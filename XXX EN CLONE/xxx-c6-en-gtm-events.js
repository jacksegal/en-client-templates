/* Signup */
function fireTrackingOnSubmit() {

    /* Is it final part of journey? */
    if($('.signup-submit').length) {

        window.dataLayer = window.dataLayer || [];
        var dataLayerObject = {
            event: "gaEvent",
            eventCategory: pageType,
            eventAction: "Signup",
            eventLabel: "Successful",
            pageName: pageName,
            campaignName: campaignName,
        }
        window.dataLayer.push(dataLayerObject);

        console.group("%cGTM", "color: #241C15; background-color: #4EE4C4; padding: 4px; font-weight: 400;");
        console.log("Event:\t", 'Signup');
        console.log(dataLayerObject);
        console.groupEnd();
    }    
}


/* Share */
$( ".share_button" ).click(function() {
    var social = $(this).data('social');
    window.dataLayer = window.dataLayer || [];
    var dataLayerObject = {
      event: "gaEvent",
      eventCategory: pageType,
      eventAction: "Share",
      eventLabel: social,
      pageName: pageName,
      campaignName: campaignName,
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
        eventCategory: pageType,
        eventAction: "Skip Share",
        eventLabel: "undefined",
        pageName: pageName,
        campaignName: campaignName,
    }
    window.dataLayer.push(dataLayerObject);

    console.group("%cGTM", "color: #241C15; background-color: #4EE4C4; padding: 4px; font-weight: 400;");
    console.log("Event:\t", 'Skip');
    console.log(dataLayerObject);
    console.groupEnd();
});

/* Donate Button */
$('.donate-button').click(function(){
    window.dataLayer = window.dataLayer || [];
        var dataLayerObject = {
        event: "gaEvent",
        eventCategory: pageType,
        eventAction: "Donate Click",
        eventLabel: this.textContent.replace("£", ""),
        pageName: pageName,
        campaignName: campaignName,
    }
    window.dataLayer.push(dataLayerObject);  

    console.group("%cGTM", "color: #241C15; background-color: #4EE4C4; padding: 4px; font-weight: 400;");
    console.log("Event:\t", 'Donate');
    console.log(dataLayerObject);
    console.groupEnd();    
});