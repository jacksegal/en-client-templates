function getStartDate(today,select,input) {

    var selectedDate = $(select).val();
    var minimumDate = moment(today).add(21, 'days');

    var thisMonth = moment(minimumDate);
    var nextMonth = moment(minimumDate).add(1, 'months');

    if (minimumDate.date() > 26) {
        switch (selectedDate) {
            case '5':
                var paymentDate = '05/' + nextMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '12':
                var paymentDate = '12/' + nextMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '20':
                var paymentDate = '20/' + nextMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '26':
                var paymentDate = '26/' + nextMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;
        }
    } else if (minimumDate.date() > 20) {
        switch (selectedDate) {
            case '5':
                var paymentDate = '05/' + nextMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '12':
                var paymentDate = '12/' + nextMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '20':
                var paymentDate = '20/' + nextMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '26':
                var paymentDate = '26/' + thisMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;
        }
    } else if (minimumDate.date() > 12) {
        switch (selectedDate) {
            case '5':
                var paymentDate = '05/' + nextMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '12':
                var paymentDate = '12/' + nextMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '20':
                var paymentDate = '20/' + thisMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '26':
                var paymentDate = '26/' + thisMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;
        }
    } else if (minimumDate.date() > 5) {
        switch (selectedDate) {
            case '5':
                var paymentDate = '05/' + nextMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '12':
                var paymentDate = '12/' + thisMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '20':
                var paymentDate = '20/' + thisMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '26':
                var paymentDate = '26/' + thisMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;
        }
    } else if (minimumDate.date() <= 5) {
        switch (selectedDate) {
            case '5':
                var paymentDate = '05/' + thisMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '12':
                var paymentDate = '12/' + thisMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '20':
                var paymentDate = '20/' + thisMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;

            case '26':
                var paymentDate = '26/' + thisMonth.format('MM/YYYY');
                $(input).val(paymentDate);
                break;
        }
    } else {
        console.log('> ELSE');
    }

    console.group("%cDD Start date", "color: #241C15; background-color: #4EE4C4; padding: 4px; font-weight: 400;");
    console.log("Today:\t", today.format('DD/MM/YYYY'));
    console.log("Minimum Date:\t", minimumDate.format('DD/MM/YYYY'));
    console.log("Payment Date:\t", paymentDate);
    console.groupEnd();
}

$(function() {
    // update total on page load
    var donationAmt = calculateDecimal(Number(sessionStorage.getItem('donationAmt')));
    $('input[name="supporter.NOT_TAGGED_77"]').val(donationAmt);  

    // listen to gift aid tick
    $('input[name="supporter.NOT_TAGGED_46"]').change(function() {
      if($(this).prop('checked')) {
        // populate the hidden gift aid fields
        updateGiftAidAmount();
      } else {
        // reset
        resetGiftAidAmount();
      }
    });
});

function resetGiftAidAmount() {
  // gift aid
  $('input[name="supporter.NOT_TAGGED_76"]').val('0');
  // total
  var donationAmt = calculateDecimal(Number(sessionStorage.getItem('donationAmt')));
  $('input[name="supporter.NOT_TAGGED_77"]').val(donationAmt);  
}

function updateGiftAidAmount() {

  var donationAmt = Number(sessionStorage.getItem('donationAmt'));

  var amts = calculateGiftAidAmts(donationAmt);

  // gift aid
  $('input[name="supporter.NOT_TAGGED_76"]').val(amts.giftAid);
  // total
  $('input[name="supporter.NOT_TAGGED_77"]').val(amts.total);

}

function calculateGiftAidAmts(donationAmt) {

  var giftAidAmt = (donationAmt / 100) * 25;

  return {
    'giftAid': calculateDecimal(giftAidAmt),
    'total': calculateDecimal(donationAmt+giftAidAmt),
  }
}

function calculateDecimal(amt) {
  // if(amt % 1 != 0) {
  //     amt = amt.toFixed(2)
  // }
  return amt.toFixed(2);
}