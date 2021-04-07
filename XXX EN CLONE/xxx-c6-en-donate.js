if (typeof C6 == 'undefined') {
    C6 = {};
}

C6.Donate = {
    init: function() {},
    fieldValidation: function(ccNo='#en__field_transaction_ccnumber',sortCode='#en__field_transaction_othamt1',accountNo='#en__field_transaction_othamt2',cvv='#en__field_transaction_ccvv') {
        if($(ccNo).length ){
            var cleave = new Cleave(ccNo, {
                creditCard: true,
                onCreditCardTypeChanged: function (type) {
                    console.log("%cCard type:\t "+type, "color: #241C15; background-color: #FF3EBF; padding: 4px; font-weight: 400;");
                }
            });
        }

        if($(sortCode).length ){
            var cleave = new Cleave(sortCode, {
                delimiter: '-',
                blocks: [2, 2, 2],
                numericOnly: true
            });
        }

        // Account Number
        if($(accountNo).length ){
            var cleave = new Cleave(accountNo, {
                delimiter: '',
                blocks: [8],
                numericOnly: true
            });
        }

        // CVV - Max Length
        if($(cvv).length) {
            $(cvv).attr('maxlength', 4);
            var cleave = new Cleave(cvv, {
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
    saveDonationAmtToStorage: function() {
        if($('input[name="transaction.donationAmt"]').length) {
            var donationAmount = $('input[name="transaction.donationAmt"]:checked').val();
            if(donationAmount == 'Other') {
                sessionStorage.setItem('donationAmt', $('input[name="transaction.donationAmt.other"]').val());
            } else {
                sessionStorage.setItem('donationAmt', donationAmount);
            }
        }
    },
    paymentTypeToggle: function () {
        if ($('.donate-type').length) {
            // Queries
            var primaryAmtQuery = '.donate-amounts input[type="radio"][value!="Other"]';
            var altAmtQuery = '.alt-donate-amounts input[type="radio"]';

            // Clones
            var primaryAmtClone = $(primaryAmtQuery).clone();
            var primaryLabelClone = $(primaryAmtQuery).next('label').clone();

            var altAmtClone = $(altAmtQuery).clone();
            var altLabelClone = $(altAmtQuery).next('label').clone();

            // Elements
            var primaryAmtElement = $(primaryAmtQuery);
            var altAmtElement = $(altAmtQuery);

            setTimeout(function(){
                if($('.donate-type input[type="radio"]:checked').val() == 'PRIMARY') {
                    switchToPrimary();
                } else {
                    switchToAlt();
                }
            }, 500);

            $('.donate-type input[type="radio"]').on("change", function(){
                if(this.value == 'ALTERNATIVE') {
                    switchToAlt();
                } else {
                    switchToPrimary();
                }
            });
        }

        function switchToAlt() {
            switchAmts(primaryAmtElement,altAmtClone,altLabelClone);
        }

        function switchToPrimary() {
            switchAmts(primaryAmtElement,primaryAmtClone,primaryLabelClone);
        }

        function switchAmts(element,values,labels) {
            for (let i = 0; i < element.length; i++) {
                var newAmt = $(values[i]).val();
                var newLabel = $(labels[i]).text();
                $(element[i]).val(newAmt).next('label').text(newLabel);
            }
        }
    },
}