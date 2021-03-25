/* Over 18 */
$('#en__field_supporter_NOT_TAGGED_160').click(function(e) {
    if ($(e.target).is(':checked')) {

        console.group("%cUUK Age Selection", "color: #241C15; background-color: #FFFF00; padding: 4px; font-weight: 400;");
        console.log("Show:\t", 'Over 18');
        console.log("Hide:\t", 'Under 18, Under 16, Age 16-17');
        console.groupEnd();

        $('.age-under-18, .age-under-15, .age-16-17').hide();
        $('.age-over-18').show();
    }
});
/* Under 18 */
$('#en__field_supporter_NOT_TAGGED_161').click(function(e) {
    if ($(e.target).is(':checked')) {

        console.group("%cUUK Age Selection", "color: #241C15; background-color: #FFFF00; padding: 4px; font-weight: 400;");
        console.log("Show:\t", 'Under 18, Age 16-17');
        console.log("Hide:\t", 'Over 18');
        console.groupEnd();

        $('.age-over-18').hide();
        $('.age-under-18').show();
        $('.age-16-17').show();
    }
});
/* Under 15 */
$('#en__field_supporter_NOT_TAGGED_19').change(function() {
    if (this.value == '1-15') {

        console.group("%cUUK Age Selection", "color: #241C15; background-color: #FFFF00; padding: 4px; font-weight: 400;");
        console.log("Show:\t", 'Under 15');
        console.log("Hide:\t", 'Over 18, Age 16-17');
        console.groupEnd();

        $('.age-over-18, .age-16-17').hide();
        $('.age-under-15').show();
    } else if (this.value == '16-17') {

        console.group("%cUUK Age Selection", "color: #241C15; background-color: #FFFF00; padding: 4px; font-weight: 400;");
        console.log("Show:\t", 'Age 16-17');
        console.log("Hide:\t", 'Over 18, Under 15');
        console.groupEnd();

        $('.age-over-18, .age-under-15').hide();
        $('.age-16-17').show();
    }
});  