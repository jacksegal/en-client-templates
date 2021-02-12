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
        $('.label-placeholder .en__field--text').each(function(){
            var input = $(this).find('input');
            var label = $(this).find('label');
            var labelText = label.text();
            input.attr('placeholder', labelText);
        });

        $('.label-placeholder .en__field--telephone').each(function(){
            var input = $(this).find('input');
            var label = $(this).find('label');
            var labelText = label.text();
            input.attr('placeholder', labelText);
        });
    },
    updateNextPageUrl: function() {
        $(".next-button").attr('href', this.getNextPageUrl());
    },
    getNextPageUrl: function() {
        return $('form.en__component--page').attr('action');
    },
    readMoreToggle: function() {
        /* More Info */ 
        moreInfoToggle = false;
        $('.read-more-toggle').click(function(){
          if(moreInfoToggle) {
            $('.read-more-content').hide('slow');
            moreInfoToggle = false;
          } else {
            $('.read-more-content').show('slow');
            moreInfoToggle = true;
          }
        });        
    },
    removeFormValidationOnInput: function() {
        window.enOnError = function(){
            $('.en__field--validationFailed .en__field__input').on('input', function() {
                $(this).closest('.en__field--validationFailed').removeClass('en__field--validationFailed').find('.en__field__error').hide();
            });   
        } 
    },
    optInPersuasion: function(optInField, optInValue, persuasion) {
        $(optInField).change(function(e) {
            if(e.target.value === optInValue) {
                $(persuasion).show();

                console.group("%Opt-in", "color: #241C15; background-color: #FFFF00; padding: 4px; font-weight: 400;");
                console.log("Value:\t", e.target.value);
                console.log("Show:\t", persuasion);
                console.groupEnd();
            } else {
                $(persuasion).hide();

                console.group("%Opt-in", "color: #241C15; background-color: #FFFF00; padding: 4px; font-weight: 400;");
                console.log("Value:\t", e.target.value);
                console.log("Hide:\t", persuasion);
                console.groupEnd();
            }

        });        
    },
    addLogicalCssClasses: function() {
        $('img.d-inline').parent('.en__component--imageblock').addClass('d-inline');
        $('.en__submit button').addClass('btn btn-en-submit btn-lg btn-block');
    },
    createErrorContainer: function() {
        if ($('.en__errorHeader').length && $('.en-errors').length) {
            var errorIcon = '<svg height="20px" width="20px" style="color: rgba(248, 113, 113, 1);margin-top: 10px;" class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>';
        
            $( ".en-errors" ).prepend( '<div class="alert alert-danger error-bag d-flex" role="alert"></div>' );
            $( errorIcon ).appendTo( '.error-bag' );
            $( ".en__errorHeader" ).appendTo( '.error-bag' );
            $( ".en__errorList" ).appendTo( '.en__errorHeader' );
        }
    },
}; 