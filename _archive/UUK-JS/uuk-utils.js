function getUrlParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/* More Info */ 
moreInfoToggle = false;
$('.more-info-toggle').click(function(){
  if(moreInfoToggle) {
    $('.more-info-text').hide('slow');
    moreInfoToggle = false;
  } else {
    $('.more-info-text').show('slow');
    moreInfoToggle = true;
  }
});

/* Email Opt-in Persuasion */
$('input[name="supporter.questions.856101"]').change(function(e) {
  if(e.target.value === 'NO') {
    $('.email-opt-in-persuasion').show();

    console.group("%cEmail Opt-in", "color: #241C15; background-color: #FFFF00; padding: 4px; font-weight: 400;");
    console.log("Value:\t", e.target.value);
    console.log("Show:\t", '.email-opt-in-persuasion');
    console.groupEnd();
  } else {
    $('.email-opt-in-persuasion').hide();

    console.group("%cEmail Opt-in", "color: #241C15; background-color: #FFFF00; padding: 4px; font-weight: 400;");
    console.log("Value:\t", e.target.value);
    console.log("Hide:\t", '.email-opt-in-persuasion');
    console.groupEnd();
  }

});