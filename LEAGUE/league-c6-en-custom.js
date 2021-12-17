

function saveIsOrganisation() {
    if( $('input[name="supporter.questions.643402"]').length && $('input[name="supporter.questions.643402"]:checked').val() === 'Y' ) {
        sessionStorage.setItem('isOrganisation', 'TRUE');
    }
}

function hideGiftAid() {
    $('.giftaid').addClass('c6-hidden');
}

function isOrganisation() {
    if(sessionStorage.getItem('isOrganisation') === 'TRUE') {
        return true;
    } else {
        return false;
    }
}