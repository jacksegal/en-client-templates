if (typeof C6 == 'undefined') {
    C6 = {};
}

C6.Share = {
    shareWindowInit: function() {
        // todo: passthrough jquery identifier in func (default if not set)
        $('.share-window, [data-share-window]').click(function(e) {

            /* Open Link in New Tab */
            e.preventDefault();
            window.open($(this).attr('href'), 'shareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
            
            /* Redirect to Next Page */
            if($(this).data('share-redirect')){
                document.location.href = $(this).data('share-redirect');
            } else {
                return false;
            }
        });
    },
    getLink: function(medium,msg) {
        return this.media[medium].url + encodeURIComponent(msg);
    },
    getMsg: function(medium) {
        return $(this.media[medium].msgSelector).text().trim();
    },
    getEmailSubject: function() {
        return $(this.media['email'].subjectSelector).text().trim();
    },
    getEmailBody: function() {
        return $(this.media['email'].bodySelector).text().trim().replace(/        /g, '');
    },
    getEmailLink: function(subject,body) {
        var link = this.media['email'].subjectUrl + encodeURIComponent(subject);
        link +=  this.media['email'].bodyUrl + encodeURIComponent(body);
        return link;
    },
    updateLinksFromSelector: function(media) {
        for (index = 0; index < media.length; ++index) {
            /* Which Social Media */
            var medium = media[index];

            if(medium !== 'email'){
                /* jQuery Selectory */
                var selector = this.media[medium].btnSelector;
                /* Message Being Shared */
                var msg = this.getMsg(medium);
                /* Encoded Link */
                var link = this.getLink(medium,msg);
                /* Update Link */
                $(selector).attr('href',link);                        
            } else {
                /* Different process for Email */
                var selector = this.media['email'].btnSelector;
                var subject = this.getEmailSubject();
                var body = this.getEmailBody();
                var link = this.getEmailLink(subject, body);
                $(selector).attr('href',link); 
            }
        }
    },
    media: {
        'facebook': {
            'url': 'https://www.facebook.com/sharer/sharer.php?u=',
            'msgSelector': '.social-share-fb',
            'btnSelector': '.share-button.facebook-button',
        },
        'twitter': {
            'url': 'https://twitter.com/intent/tweet?text=',
            'msgSelector': '.social-share-tw',
            'btnSelector': '.share-button.twitter-button',
        },
        'whatsapp': {
            'url': 'https://api.whatsapp.com/send?text=',
            'msgSelector': '.social-share-wa',
            'btnSelector': '.share-button.whatsapp-button',
        },
        'email': {
            'subjectUrl': 'mailto:?subject=',
            'subjectSelector': '.social-share-em-subject',
            'bodyUrl': '&body=',
            'bodySelector': '.social-share-em-body',
            'btnSelector': '.share-button.email-button',
        }
    }
}        