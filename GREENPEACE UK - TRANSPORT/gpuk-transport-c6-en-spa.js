if (typeof C6 == 'undefined') {
    C6 = {};
}

C6.Spa = {
    init: function() {
        this.onUrlHit();
        this.onBackButton();
        this.onClick();
    },

    onUrlHit: function() {
        if (!location.hash == '') {
            
            if($('.spa-page-force').length) {
                this.updateBrowser('.spa-container', '.spa-page-force');
                history.pushState(null, '', '#');
                this.log('URL','Show Landing page');
            } else {
                this.updateBrowser('.spa-container', '.spa-name-'+location.hash.replace('#', ''));
                // history.pushState(null, '', '#');
                this.log('URL','Show "'+location.hash+'"');
            }
            
            
        }
    },

    onBackButton: function() {
        /* Handle SPA - browser button */
        var self = this;
        window.onpopstate = function(event) {
            if (event.state) {
                // SHOW THE PAGE FROM STATE
                self.log('Browser','Show "'+event.state.page+'"');

                self.updateBrowser('.spa-container', '.spa-name-'+event.state.page);
            } else {
                // SHOW THE LANDING PAGE
                self.log('Browser','Show Landing page');
                self.updateBrowser('.spa-container', '.spa-page-load');                          
            }
        }        
    },

    onClick: function() {
        var self = this;
        $('[data-spa]').click(function() {
            
            /* Grab Origin for Hiding and Destination for Showing */
            var hide = $(this).data('spa-hide');
            var show = $(this).data('spa-show');
            var name = $(this).data('spa-next-name');

            /* Hide and Show */
            self.updateButton(hide,show);

            /* Log Event */
            self.log('App','Show "'+name+'"');

            /* Push State */
            if(name) {
                self.pushState(name);
            }

            var event = new CustomEvent('spa-page-change', {'detail': {
                'hide': hide,
                'show': show,
                'name': name,
            }});
            document.dispatchEvent(event);            
        }); 
    },

    updateButton: function(hide,show) {
        $(hide).fadeOut('slow', function(){
            $(show).show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });            
    },

    updateBrowser: function(hide,show) {
        $(hide).hide();
        $(show).fadeIn('slow', function(){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    pushState: function(name) {
        var state = {
            page: name
        };
        var url = '#'+name;
        history.pushState(state, '', url);
    },

    log: function(client,action) {
        console.group("%cSPA", "color: #241C15; background-color: #FF3EBF; padding: 4px; font-weight: 400;");
        console.log("Client:\t", client);
        console.log("Action:\t", action);
        console.groupEnd();
    }     
}