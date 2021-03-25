function getStartDate(today,select,input) {

    var selectedDate = $(select).val();
    var minimumDate = moment(today).add(21, 'days');

    var thisMonth = moment(minimumDate);
    var nextMonth = moment(minimumDate).add(1, 'months');

    if (minimumDate.date() > 26) {
        switch (selectedDate) {
            case '5':
                var paymentDate = '5th ' + nextMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                console.log('5th ' + nextMonth.format('MMMM YYYY'));
                break;

            case '12':
                var paymentDate = '12th ' + nextMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '20':
                var paymentDate = '20th ' + nextMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '26':
                var paymentDate = '26th ' + nextMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;
        }
    } else if (minimumDate.date() > 20) {
        switch (selectedDate) {
            case '5':
                var paymentDate = '5th ' + nextMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '12':
                var paymentDate = '12th ' + nextMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '20':
                var paymentDate = '20th ' + nextMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '26':
                var paymentDate = '26th ' + thisMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;
        }
    } else if (minimumDate.date() > 12) {
        switch (selectedDate) {
            case '5':
                var paymentDate = '5th ' + nextMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '12':
                var paymentDate = '12th ' + nextMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '20':
                var paymentDate = '20th ' + thisMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '26':
                var paymentDate = '26th ' + thisMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;
        }
    } else if (minimumDate.date() > 5) {
        switch (selectedDate) {
            case '5':
                var paymentDate = '5th ' + nextMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '12':
                var paymentDate = '12th ' + thisMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '20':
                var paymentDate = '20th ' + thisMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '26':
                var paymentDate = '26th ' + thisMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;
        }
    } else if (minimumDate.date() < 5) {
        switch (selectedDate) {
            case '5':
                var paymentDate = '5th ' + thisMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '12':
                var paymentDate = '12th ' + thisMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '20':
                var paymentDate = '20th ' + thisMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;

            case '26':
                var paymentDate = '26th ' + thisMonth.format('MMMM YYYY');
                $(input).val(paymentDate);
                break;
        }
    }

    console.group("%cDD Start date", "color: #241C15; background-color: #4EE4C4; padding: 4px; font-weight: 400;");
    console.log("Today:\t", today.format('Do MMMM YYYY'));
    console.log("Minimum Date:\t", minimumDate.format('Do MMMM YYYY'));
    console.log("Payment Date:\t", paymentDate);
    console.groupEnd();
}