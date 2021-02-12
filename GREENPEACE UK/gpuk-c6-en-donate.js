if (typeof C6 == 'undefined') {
    C6 = {};
}

C6.Donate = {
	init: function() {},
	fieldValidation: function() {
    	if($('#en__field_transaction_ccnumber').length ){
            var cleave = new Cleave('#en__field_transaction_ccnumber', {
                creditCard: true,
                onCreditCardTypeChanged: function (type) {
                    console.log("%cCard type:\t "+type, "color: #241C15; background-color: #FF3EBF; padding: 4px; font-weight: 400;");
                }
            });	    	    
    	}
    	
    	if($('#en__field_transaction_othamt1').length ){
            var cleave = new Cleave('#en__field_transaction_othamt1', {
                delimiter: '-',
                blocks: [2, 2, 2],
                numericOnly: true
            });	    
    	}
    	
    	// Account Number 
    	if($('#en__field_transaction_othamt2').length ){
            var cleave = new Cleave('#en__field_transaction_othamt2', {
                delimiter: '',
                blocks: [8],
                numericOnly: true
            });     
        }
    	
        // CVV - Max Length	
    	if($('#en__field_transaction_ccvv').length) {
    	    $('#en__field_transaction_ccvv').attr('maxlength', 4);
    	    var cleave = new Cleave('#en__field_transaction_ccvv', {
                numeral: true,
                numeralDecimalMark: '',
                delimiter: '',
            });	
    	}
	},
    displayDonationAmt: function() {
        if ($('.display-donation-amt').length) {
            var donationAmt = sessionStorage.getItem('donationAmt');
            if(donationAmt) {
                $('.display-donation-amt .donation-amt').text(donationAmt);
                $('.display-donation-amt').show();
            }
        }
    },
	giftAidCalculation: function() {
        if ($('.gift-aid-calculation').length) {
        	var donationAmt = sessionStorage.getItem('donationAmt');
        	if(donationAmt) {
        		giftAidAmt = (donationAmt/4)*5;
        		
        		if(giftAidAmt % 1 != 0) {
        		    giftAidAmt = giftAidAmt.toFixed(2)
        		}
        		
        		$('.gift-aid-calculation .donation-amt').text(donationAmt);
        		$('.gift-aid-calculation .gift-aid-amt').text(giftAidAmt);
        		$('.gift-aid-calculation').show();
        	}
        }
	},
	setBankDetails: function() {
        if ($('.storage-bank-details').length) {
            $('.storage-sort-code').text(sessionStorage.getItem('sortCode'));
        	$('.storage-account-number').text(sessionStorage.getItem('accountNumber'));
        }
	},
	selectOtherAmtOnOtherInput: function() {
        $('input[name="transaction.donationAmt.other"]').on("input", function(){
        	$('input[name="transaction.donationAmt"][value="Other"]').prop("checked", true).change();
        });			
	},
	submitOnAmountSelect: function() {
	    $('input[name="transaction.donationAmt"]').on("change", function(){
	        if(this.value !== 'Other') {
	            $('.en__submit button').click(); 
	        }
        });
	},
	paypalButton: function() {
        if ($('.donate-button-paypal').length) {
	        if($('input[name="transaction.paymenttype"]').val() == 'paypal') {
	            $('.donate-button-paypal').show();
	            $('.donate-button-card').hide();
	        } else {
	            $('.donate-button-paypal').hide();
	            $('.donate-button-card').show();
	        }		
	        
		    $('input[name="transaction.paymenttype"]').on("change", function(){
		        if(this.value == 'paypal') {
		            $('.donate-button-paypal').show();
		            $('.donate-button-card').hide();
		        } else {
		            $('.donate-button-paypal').hide();
		            $('.donate-button-card').show();
		        }
	        });	 
        }
	},
	cleanDataOnSubmit: function() {
		if($('#en__field_transaction_ccnumber').length ){
	        $('#en__field_transaction_ccnumber').val(function(index, value){
	            return value.replace(/\s+/g, '');
	        });
		}
	},
	saveDataOnSubmit: function() {
    	if($('input[name="transaction.recurrpay"]').length) {
    	    sessionStorage.setItem('recurrpay', $('input[name="transaction.recurrpay"]:checked').val());
    	}
    	
    	if($('input[name="transaction.donationAmt"]').length) {
    	    var donationAmount = $('input[name="transaction.donationAmt"]:checked').val();
    	    if(donationAmount == 'Other') {
    	        sessionStorage.setItem('donationAmt', $('input[name="transaction.donationAmt.other"]').val());
    	    } else {
    	        sessionStorage.setItem('donationAmt', donationAmount);
    	    }
    	}  
    	
    	if($('input[name="transaction.recurrfreq"]').length) {
    		sessionStorage.setItem('accountNumber', $('input[name="transaction.othamt2"]').val());
    		sessionStorage.setItem('sortCode', $('input[name="transaction.othamt1"]').val());
    	}
	},
}