/* Signup */
window.enOnSubmit = function(){

    /* Is it final part of journey? */
    if($('input[name="supporter.emailAddress"]').length) {

        /* Get Opt-in */
        if ($('#en__field_supporter_questions_71944').is(':checked')) {
            var isOptedIn = "true";
        } else {
            var isOptedIn = "false";
        }
        /* Get Under-Age */
        if ($('#en__field_supporter_NOT_TAGGED_161').is(':checked')) {
            var isUnderAge = "true";
        } else {
            var isUnderAge = "else";
        }


        window.dataLayer = window.dataLayer || [];
        var dataLayerObject = {
            event: "gaEvent",
            eventCategory: uukCategory,
            eventAction: "Signup",
            eventLabel: "Successful",
            petitionName: uukPetitionName,
            optIn: isOptedIn,
            underAge: isUnderAge,
            campaignName: uukCampaignName,
        }
        window.dataLayer.push(dataLayerObject);

        console.group("%cGTM", "color: #241C15; background-color: #4EE4C4; padding: 4px; font-weight: 400;");
        console.log("Event:\t", 'Signup');
        console.log(dataLayerObject);
        console.groupEnd();
    }

    return true;
}

/* Share */
$( ".share_button" ).click(function() {
    var social = $(this).data('social');
    window.dataLayer = window.dataLayer || [];
    var dataLayerObject = {
      event: "gaEvent",
      eventCategory: uukCategory,
      eventAction: "Share",
      eventLabel: social,
      petitionName: uukPetitionName,
      campaignName: uukCampaignName,
    }
    window.dataLayer.push(dataLayerObject);

    console.group("%cGTM", "color: #241C15; background-color: #4EE4C4; padding: 4px; font-weight: 400;");
    console.log("Event:\t", 'Share');
    console.log(dataLayerObject);
    console.groupEnd();
}); 

/* Skip */
$('.btn-uuk-skip').click(function(){
    window.dataLayer = window.dataLayer || [];
    var dataLayerObject = {
        event: "gaEvent",
        eventCategory: uukCategory,
        eventAction: "Skip Share",
        eventLabel: "undefined",
        petitionName: uukPetitionName,
        campaignName: uukCampaignName,
    }
    window.dataLayer.push(dataLayerObject);

    console.group("%cGTM", "color: #241C15; background-color: #4EE4C4; padding: 4px; font-weight: 400;");
    console.log("Event:\t", 'Skip');
    console.log(dataLayerObject);
    console.groupEnd();
});

/* Donate */
$('.donate-button').click(function(){
    window.dataLayer = window.dataLayer || [];
        var dataLayerObject = {
        event: "gaEvent",
        eventCategory: uukCategory,
        eventAction: "Donate Click",
        eventLabel: this.textContent.replace("£", ""),
        petitionName: uukPetitionName,
        campaignName: uukCampaignName,
    }
    window.dataLayer.push(dataLayerObject);  

    console.group("%cGTM", "color: #241C15; background-color: #4EE4C4; padding: 4px; font-weight: 400;");
    console.log("Event:\t", 'Donate');
    console.log(dataLayerObject);
    console.groupEnd();    
});