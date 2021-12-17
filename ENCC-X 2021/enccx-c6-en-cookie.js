// Cookie
if (typeof C6 == 'undefined') {
    C6 = {};
}

C6.Cookie = {
    /* Set Cookie - adapted from: https://www.quirksmode.org/js/cookies.html */
    set: function(name, value, date) {
        document.cookie = name + "=" + value + "; expires=" + date + "; path=/";
    },
    /* Get Cookie - adapted from: https://www.quirksmode.org/js/cookies.html */
    get: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    /* Delete Cookie - adapted from: https://www.quirksmode.org/js/cookies.html */
    delete: function(name) {
        var expires = this.getExpiredDate();
        this.set(name, "", expires);
    },
    /* Return expired date (yesterday) in UTC String format - adapted from BSD snippet */
    getExpiredDate: function() {
        return (new Date(-1 * 864E5 + (new Date()).getTime())).toUTCString();
    },
};