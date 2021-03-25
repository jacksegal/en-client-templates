if (typeof C6 == 'undefined') {
    C6 = {};
}

C6.En = {
    trimEmail: function() {
        $('#en__field_supporter_emailAddress').bind('input', function(){
            $(this).val(function(_, v){
                return v.replace(/\s+/g, '');
            });
        });                
    },
    labelsToPlaceholders: function() {
        $('.en__field--text').each(function(){
            var input = $(this).find('input');
            var label = $(this).find('label');
            var labelText = label.text();
            input.attr('placeholder', labelText);
        });

        $('.en__field--telephone').each(function(){
            var input = $(this).find('input');
            var label = $(this).find('label');
            var labelText = label.text();
            input.attr('placeholder', labelText);
        });
        
        /*$('.en__field__input--textarea').each(function(){
            var input = $(this).find('input');
            var label = $(this).find('label');
            var labelText = label.text();
            input.attr('placeholder', labelText);
        });*/
    },
    getNextPageUrl: function() {
        return $('form.en__component--page').attr('action');
    },
    bootstrapButtons: function() {
        $('.en__submit button').addClass('btn btn-uuk btn-lg btn-block');
    }
}; 