if (typeof C6 == 'undefined') {
    C6 = {};
}

C6.Spa = {
    init: function() {
        this.onUrlHit();
        this.onBackButton();
        this.onClick();
    },

    onUrlHit: function() {<!DOCTYPE html>
    <html>

    <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Builder -->
        <title>UK govt: Transform transport</title>

    <link href="https://action.greenpeace.org.uk/l/854853/2021-03-03/lsr9r/854853/1614771898C2eORmDf/favicon.png" rel="icon">

        <!-- TODO: Builder -->
    <meta property="og:title" content="UK govt: Transform transport">
        <meta property="og:description" content="Invest in walking, cycling, and better public transport - instead of wasting &pound;27 bn on building new roads">
        <meta property="og:image" content="https://secure.greenpeace.org.uk/page/-/sustainable%20transport%20options.png">
        <meta property="og:url" content="https://secure.greenpeace.org.uk/transportfb">

        <meta name="twitter:card" content="summary">

        <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <!-- Page -->
        <style>

        form.form p label {
        color: white !important;
    }
        form.form {
            color: white !important;
        }
        body {
            background-position: top;
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-image: url(https://secure.greenpeace.org.uk/page/-/images/content-images/generic/GP0STT47X_Medium_res%20%281%29.jpg);
        }

    .content-bg {
            background-color: white;
            margin: 30px;
            margin-top: 0;
            padding-bottom: 20px;
        }

    .highlighted {
            background-color: white;
            padding: 5px;
        }

        section {
            padding-bottom: 100px;
        }

        p {
            font-size: 20px;
        }
        /*By default all section are hidden */
    .spa-section {
            display: none;
        }


    </style>

        <!-- Page -->
        <style>
    .spa-section {
            min-height: 100vh;
            padding-top: 75px;
        }
    .hidden {
            display: none;
        }
    .campaign-text-highlight-primary {
            background-color: black !important;
            box-shadow: 7px 0 0 black, -7px 0 0 black !important;
            -moz-box-shadow: 7px 0 0 black, -7px 0 0 black !important;
            -webkit-box-shadow: 7px 0 0 black, -7px 0 0 black !important;
            line-height: 1.4;
            padding: 5px 0;
            color: #fff;
        }
    .campaign-text-highlight-secondary {
            background-color: #4aae1e !important;
            box-shadow: 7px 0 0 #4aae1e, -7px 0 0 #4aae1e !important;
            -moz-box-shadow: 7px 0 0 #4aae1e, -7px 0 0 #4aae1e !important;
            -webkit-box-shadow: 7px 0 0 #4aae1e, -7px 0 0 #4aae1e !important;
            line-height: 1.4;
            padding: 5px 0;
            color: #fff;
        }
        i {
            font-style: normal;
        }
    </style>

        <!-- Progress Tracker -->
        <style>
    .progress-container-div {
            display: inline-block;
            position: absolute;
            left: 50%;
            -ms-transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%)
        }
    .progress-container-div .progress-block {
            display: inline-block;
            margin: 0 10px
        }
    .progress-container-div .progress-mark {
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 30px;
            border: 2px solid #fff;
            background: 0 0;
            text-align: center;
            position: relative;
            top: 8px
        }
    .progress-container-div .progress-mark img {
            display: none;
            height: 15px;
            width: 15px;
            margin: 0;
            top: 5px;
            position: relative;
            left: 5px
        }
    .progress-container-div .progress-label {
            color: #fff;
            display: inline-block;
            margin-left: 8px
        }
    .progress-block.progress-block-crossed .progress-mark {
            border: 2px solid #f03f3f;
            background: #f03f3f
        }
    .progress-block.progress-block-crossed .progress-mark img.mark-no {
            display: block
        }
    .progress-block.progress-block-checked .progress-mark {
            border: 2px solid #000;
            background: #000
        }
    .progress-block.progress-block-checked .progress-mark img.mark-yes {
            display: block
        }
    .progress-container-div {
            margin-top: 2px
        }
        #signScroll {
            position: fixed;
            bottom: 5px;
            right: 5px;
            width: 163px;
            height: 50px;
            background: #f19200;
            border: 0;
            cursor: pointer;
            color: #fff;
            box-shadow: 4px 10px rgba(136, 136, 136, .3);
            border-radius: 3px;
            z-index: 9002
        }
    @media screen and (min-width:768px) {
            #signScroll {
                display: none!important
            }
        }
    @media screen and (max-width:768px) {
        .progress-container-div {
                display: inline-block;
                position: relative;
                left: 0;
                -ms-transform: translateX(0);
                -webkit-transform: translateX(0);
                transform: translateX(0);
                margin-top: 5px
            }
        .slide {
                padding-top: 98px!important
            }
        .navbar {
                height: 100px!important
            }
        }
    @media screen and (max-width:411px) {
        .progress-container-div .progress-label {
                font-size: 14px
            }
        .progress-container-div .progress-mark {
                width: 23px;
                height: 23px
            }
        .progress-container-div .progress-mark img {
                height: 14px;
                width: 14px;
                margin: 0;
                top: 3px;
                left: 3px
            }
        .progress-block {
                margin-top: 10px
            }
        }
    @media screen and (max-width:360px) {
        .progress-container-div .progress-block {
                margin: 0 7px
            }
        }
    </style>

        <!-- Link on share card -->
        <style>
    .share-card {
            color: initial;
            text-decoration: initial;
        }

    .share-card:hover {
            color: initial;
            text-decoration: initial;
        }
    </style>

        </head>

        <body>



        <!-- Header -->
        <header>
        <div class="container-fluid" style="padding: 0; margin-bottom: 35px;">
            <nav class="navbar fixed-top" style="background-color: #4AAE1E">
            <a class="navbar-brand" href="#">
            <img src="https://action.greenpeace.org.uk/l/854853/2021-03-03/lsr9p/854853/1614771898MU1DzykB/gplogo.png" alt="Greenpeace Logo" >
            </a>

            <div class="progress-container-div" style="display: none;">
            <div class="progress-block progress-block-checked" id="progress-block-signed">
            <div class="progress-mark">
            <img class="mark-yes" src="https://secure.greenpeace.org.uk/page/-/progress-tracker-test/checkmark.png">
            </div>
            <div class="progress-label">Signed</div>
            </div>
            <div class="progress-block" id="progress-block-shared">
            <div class="progress-mark">
            <img class="mark-yes" src="https://secure.greenpeace.org.uk/page/-/progress-tracker-test/checkmark.png">
            <img class="mark-no" src="https://secure.greenpeace.org.uk/page/-/progress-tracker-test/x2.png">
            </div>
            <div class="progress-label">Shared</div>
            </div>
            <div class="progress-block" id="progress-block-donated">
            <div class="progress-mark">
            <img class="mark-yes" src="https://secure.greenpeace.org.uk/page/-/progress-tracker-test/checkmark.png">
            </div>
            <div class="progress-label">£</div>
            </div>
            </div>
            </nav>
            </div>
            </header>

            <div class="page-content">

            <!-- Form -->
            <section id="form-section" class="spa-section">
            <div class="container-fluid">
            <div class="row">
            <!-- Campaign Text -->
        <div class="col-md-5">

            <!-- Heading -->
            <h1>
            <span class="campaign-text-highlight-primary">Now is the time to protect people and invest in our future</span>
        </h1>

        <!-- Video -->

        <!-- Text -->
        <div>
        <p>
        <span class="campaign-text-highlight-secondary">
            We’re living through one of the most challenging moments in recent global history.<br><br>
        The government’s first priority should be to protect the vulnerable among us – those most at risk from COVID-19, and those already suffering from the financial impact of the crisis.<br><br>
        And then they must protect our future.<br><br>
        Just like the economic crash of 2008, this crisis will shape our country for years to come. But in 2008, governments bailed out the usual suspects - the banks and polluting industries that continued to destabilise our planet. There were no conditions on how the money was spent.<br><br>
        We must not make the same mistakes again. We need an economy that works for everyone - and our planet.<br><br>
        We’re calling on the UK government to rebuild our society on fairer, safer, cleaner, more resilient foundations.<br><br>
        </span>
        </p>
        </div>

        <!-- Read more -->
        <div class="read-more-section">
            <div class="form-group">
            <button data-show=".read-more" type="button" class="btn btn-secondary">
            More info
        <svg class="read-more-icon bi bi-chevron-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <svg class="hidden read-more-icon bi bi-dash-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>
            </button>
            </div>
            <p class="read-more hidden">
            <span class="campaign-text-highlight-secondary">
            [1] All of these companies are implicated through their use of soya for animal feed. All but Asda are also buying industrial meat from companies owned by JBS who is driving Amazon destruction. Find out more: secure.greenpeace.org.uk/industrial-meat-uncovered
        </span>
        </p>
        </div>

        </div>

        <!-- Form -->
        <div class="col-md-4 content-bg" style="height: 100%; background-color: black; color: white; padding: 25px;">

            <h2 class="text-center">
            SIGN THE PETITION
        </h2>
        <h3 class="text-center">To: UK Government</h3>
        <h4 class="text-center" style="font-style: italic;">
            "Invest in a new sustainable economy that puts people first, and protects the planet we all depend on."
            </h4>

            <div class="petition-counter text-center" style="display: none;">
            <p><span class="petition_no"></span> have signed. Help reach <span  class="petition_target"></span>.</p>
        </div>

        <div>
        %%content%%
        </div>
        </div>
        </div>
        </div>
        </section>

        <!-- Share Ask -->
        <section id="share-ask-section" class="spa-section">
            <div class="container-fluid">
            <div class="row">
            <div class="col-md-7 col-sm-12">
            <h2>
            <span class="campaign-text-highlight-secondary">
            Thanks <i class="supporter-first-name">Supporter</i>
            </span>
            </h2>
            <p>
            <span class="campaign-text-highlight-primary">
            Now, will you share this urgent petition with your friends? The more people who sign, the more pressure the government will feel.
        </span>
        </p>

        <!-- Yes / No Buttons -->
        <button data-scroll-to="#share-section" type="button" class="btn btn-secondary">YES</button>
            <button data-scroll-to="#donate-monthly-section" type="button" class="skip-button btn btn-secondary">NO</button>

            </div>
            </div>
            </div>
            </section>


            <!-- Share -->
            <section id="share-section" class="spa-section">
            <div class="container-fluid">
            <div class="col-md-7 col-sm-12">
            <h2>
            <span class="campaign-text-highlight-secondary">
            Thanks <i class="supporter-first-name">Supporter</i>
            </span>
            </h2>

            <p>
            <span class="campaign-text-highlight-primary">
            Can you help get the word out?
    </span>
        </p>

        <a data-share-button="true" data-share-medium="facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsecure.greenpeace.org.uk%2Fbees-fb-ty-share" role="button" data-scroll-to="#donate-monthly-section" class="share-button facebook-share-button btn btn-primary btn-lg btn-block">Share on Facebook</a>
        <a data-share-button="true" data-share-medium="whatsapp" href="https://api.whatsapp.com/send?text=123" role="button" data-scroll-to="#donate-monthly-section" class="share-button btn btn-success btn-lg btn-block whatsapp-share-button">Share on WhatsApp</a>
        <a data-share-button="true" data-share-medium="email" href="mailto:?subject=Hello%20world&body=I%27m%20baby%20chia%20ethical%20readymade%20flannel.%20Fixie%20poutine%20kale%20chips%2C%20woke%20fam%20glossier%20vegan%20pop-up%20you%20probably%20haven%27t%20heard%20of%20them%20letterpress%20plaid%20banjo%20tacos%20hella%20marfa.%20Cliche%20pitchfork%20pinterest%20church-key%20hoodie.%0A%0AI%27m%20baby%20chia%20ethical%20readymade%20flannel.%20Fixie%20poutine%20kale%20chips%2C%20woke%20fam%20glossier%20vegan%20pop-up%20you%20probably%20haven%27t%20heard%20of%20them%20letterpress%20plaid%20banjo%20tacos%20hella%20marfa.%20Cliche%20pitchfork%20pinterest%20church-key%20hoodie.%0A%0AI%27m%20baby%20chia%20ethical%20readymade%20flannel.%20Fixie%20poutine%20kale%20chips%2C%20woke%20fam%20glossier%20vegan%20pop-up%20you%20probably%20haven%27t%20heard%20of%20them%20letterpress%20plaid%20banjo%20tacos%20hella%20marfa.%20Cliche%20pitchfork%20pinterest%20church-key%20hoodie." role="button" data-scroll-to="#donate-monthly-section" class="share-button email-share-button btn btn-secondary btn-lg btn-block">Share on Email</a>

        <a data-share-button="true" data-share-medium="facebook" class="share-button share-card" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsecure.greenpeace.org.uk%2Fbees-fb-ty-share" data-scroll-to="#donate-monthly-section" >
            <div class="card" style="margin-top: 10px; margin-bottom: 10px;">
            <img src="https://secure.greenpeace.org.uk/page/-/covid19.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">UK Gov: Now is the time to protect people and invest in our future</p>
        <p class="card-text">Join us in demanding a sustainable economic recovery that works for *everyone*, and protects the planet for the long term.</p>
        </div>
        </div>
        </a>

        <button data-scroll-to="#donate-monthly-section" type="button" class="skip-button btn btn-secondary btn-lg btn-block">Skip</button>
            </div>
            </div>
            </section>


            <!-- Donate: Single -->
            <section id="donate-single-section" class="spa-section">
            <div class="container-fluid text-center">
            <div class="row">
            <div class="col-md-7 col-sm-12">
            <h2>
            <span class="campaign-text-highlight-secondary">
            Thanks <i class="supporter-first-name">Supporter</i>
            </span>
            </h2>

            <p>
            <span class="campaign-text-highlight-primary">
            The campaign is 100% funded by individuals like you. Will you donate to help us?
    </span>
        </p>
        <a data-donate-button="true" href="https://donate.greenpeace.org.uk/donate-to-greenpeace-tyoo/?amount=500" role="button" class="btn btn-success btn-lg donate-button">£5</a>
            <a data-donate-button="true" href="https://donate.greenpeace.org.uk/donate-to-greenpeace-tyoo/?amount=1000" role="button" class="btn btn-success btn-lg donate-button">£10</a>
            <a data-donate-button="true" href="https://donate.greenpeace.org.uk/donate-to-greenpeace-tyoo/?amount=2000" role="button" class="btn btn-success btn-lg donate-button">£20</a>
            </div>
            </div>
            </div>
            </section>

            <!-- Donate: Monthly -->
            <section id="donate-monthly-section" class="spa-section">
            <div class="container-fluid text-center">
            <div class="row">
            <div class="col-md-7 col-sm-12">
            <h2>
            <span class="campaign-text-highlight-secondary">
            Thanks <i class="supporter-first-name">Supporter</i>
            </span>
            </h2>
            <p>
            <span class="campaign-text-highlight-primary">
            The campaign is 100% funded by individuals like you. Will you join us as a supporter with a regular amount of £3 or more a month?
    </span>
        </p>

        <a data-donate-button="true" href="https://donate.greenpeace.org.uk/donate-to-greenpeace-tydd/?frequency=regular&amount=300" role="button" class="btn btn-success btn-lg donate-button">£3</a>
            <a data-donate-button="true" href="https://donate.greenpeace.org.uk/donate-to-greenpeace-tydd/?frequency=regular&amount=500" role="button" class="btn btn-success btn-lg donate-button">£5</a>
            <a data-donate-button="true" href="https://donate.greenpeace.org.uk/donate-to-greenpeace-tydd/?frequency=regular&amount=800" role="button" class="btn btn-success btn-lg donate-button">£8</a>
            </div>
            </div>
            </div>
            </section>

            </div>


            <!-- Optional JavaScript -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossorigin="anonymous"></script>
            <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
            <script src="https://secure.greenpeace.org.uk/page/-/forward-action/forwardaction-scripts/jquery-scrollTo-2-1-3.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
            <script src="https://secure.greenpeace.org.uk/page/-/forward-action/privacypopup.js"></script>

            <!-- Custom Event Polyfill -->
            <script>
            (function () {

                if ( typeof window.CustomEvent === "function" ) return false;

                function CustomEvent ( event, params ) {
                    params = params || { bubbles: false, cancelable: false, detail: null };
                    var evt = document.createEvent( 'CustomEvent' );
                    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
                    return evt;
                }

                window.CustomEvent = CustomEvent;
            })();
    </script>
        <!-- Event Listener Polyfill -->
        <script>
        (function() {
            if (!Event.prototype.preventDefault) {
                Event.prototype.preventDefault=function() {
                    this.returnValue=false;
                };
            }
            if (!Event.prototype.stopPropagation) {
                Event.prototype.stopPropagation=function() {
                    this.cancelBubble=true;
                };
            }
            if (!Element.prototype.addEventListener) {
                var eventListeners=[];

                var addEventListener=function(type,listener /*, useCapture (will be ignored) */) {
                    var self=this;
                    var wrapper=function(e) {
                        e.target=e.srcElement;
                        e.currentTarget=self;
                        if (typeof listener.handleEvent != 'undefined') {
                            listener.handleEvent(e);
                        } else {
                            listener.call(self,e);
                        }
                    };
                    if (type=="DOMContentLoaded") {
                        var wrapper2=function(e) {
                            if (document.readyState=="complete") {
                                wrapper(e);
                            }
                        };
                        document.attachEvent("onreadystatechange",wrapper2);
                        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper2});

                        if (document.readyState=="complete") {
                            var e=new Event();
                            e.srcElement=window;
                            wrapper2(e);
                        }
                    } else {
                        this.attachEvent("on"+type,wrapper);
                        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper});
                    }
                };
                var removeEventListener=function(type,listener /*, useCapture (will be ignored) */) {
                    var counter=0;
                    while (counter<eventListeners.length) {
                        var eventListener=eventListeners[counter];
                        if (eventListener.object==this && eventListener.type==type && eventListener.listener==listener) {
                            if (type=="DOMContentLoaded") {
                                this.detachEvent("onreadystatechange",eventListener.wrapper);
                            } else {
                                this.detachEvent("on"+type,eventListener.wrapper);
                            }
                            eventListeners.splice(counter, 1);
                            break;
                        }
                        ++counter;
                    }
                };
                Element.prototype.addEventListener=addEventListener;
                Element.prototype.removeEventListener=removeEventListener;
                if (HTMLDocument) {
                    HTMLDocument.prototype.addEventListener=addEventListener;
                    HTMLDocument.prototype.removeEventListener=removeEventListener;
                }
                if (Window) {
                    Window.prototype.addEventListener=addEventListener;
                    Window.prototype.removeEventListener=removeEventListener;
                }
            }
        })();
    </script>

        <script>

        PageOptions = {
            defaultApproachCode: 'ECCLNAPEUN010C'
            //paid = FOAMMDPEFB01CV
        };

        PardotForm = {
            init: function() {
                this.removeEmailRequirement();
                this.clearFormFieldValues();
                this.labelsToPlaceholders(['.first_name','.last_name','.email','.phone','.zip']);
                this.addCssToForm();
                $('#form-section').fadeIn();

                this.updateFacebookShareLinkIfPaid();

                if(getUrlVars()['debug'] && getUrlVars()['debug'] === "true") {
                    $('.spa-section').fadeIn();
                }
            },
            removeEmailRequirement: function() {
                var element = document.querySelector(".email input");

                if(element) {
                    element.setAttribute("onchange", "");
                }
            },
            clearFormFieldValues: function() {
                //TODO: also save them to a Var for later use?
                //TODO: Add a "data-only" class that saves data and hides element
                //TODO: Check other inputs - radios / checkboxes / etc
                var inputElements = document.getElementsByTagName("input");
                for (var i=0; i < inputElements.length; i++) {
                    if (inputElements[i].type == "text" || inputElements[i].type == "email") {
                        inputElements[i].value = "";
                    }
                }
                var textareaElements = document.getElementsByTagName("textarea");
                for (var i=0; i < textareaElements.length; i++) {
                    textareaElements[i].value = "";
                }
            },
            addCssToForm: function() {
                var textInputs = document.querySelectorAll('.pd-text input');
                textInputs.forEach(function(textInput) {
                    textInput.classList.add("form-control");
                });

                var selects = document.querySelectorAll('.pd-select select');
                selects.forEach(function(select) {
                    select.classList.add("form-control");
                });

                var checkboxes = document.querySelectorAll('.pd-checkbox span.value span, .pd-radio span.value span');
                checkboxes.forEach(function(checkbox) {
                    checkbox.classList.add("form-check");
                });

                var checkboxLabels = document.querySelectorAll('.pd-checkbox span.value input, .pd-radio span.value input');
                checkboxLabels.forEach(function(checkboxLabel) {
                    checkboxLabel.classList.add("form-check-label");
                });

                var checkboxInputs = document.querySelectorAll('.pd-checkbox span.value input, .pd-radio span.value input');
                checkboxInputs.forEach(function(checkboxInput) {
                    checkboxInput.classList.add("form-check-input");
                });
            },
            getApproachCode: function() {
                // Get Approach Code from URL
                if(getUrlVars()['approach_code']) {
                    return getUrlVars()['approach_code'];
                }
                // Fallback to Form default
                if(PageOptions.defaultApproachCode && PageOptions.defaultApproachCode != '') {
                    return PageOptions.defaultApproachCode;
                }
                // Last resort: generic fallback
                return 'GOMONAOTUN015K';
            },
            addApproachCodeToDonateButtons: function() {
                $('[data-donate-button="true"]').each(function(){
                    this.href += '&reserved_approach_code=' + PardotForm.getApproachCode();
                });
            },
            isDDGiver: function() {
                var element = document.querySelector(".Live_Direct_Debit input");

                if(element && element.value === "Yes") {
                    return true;
                } else {
                    return false;
                }
            },
            changeDonateAskToSingle: function() {
                $('[data-scroll-to="#donate-monthly-section"]').attr('data-scroll-to', '#donate-single-section');
            },
            constructFormFields: function() {
                this.populateJoinCampaign();
                this.populateFormResponse();
                if(OneClick.isOneClick()) {
                    this.populateOneClickFormCompletions();
                }
            },
            populateFormResponse: function() {
                var formResponse = document.querySelector(".Form_Responses input");

                if(formResponse) {
                    var data = [
                        {name: 'form_id', value: getFormId()},
                        {name: 'approach_code', value: this.getApproachCode()},
                        {name: 'first_name', value: document.querySelector(".first_name input").value || ''},
                        {name: 'last_name', value: document.querySelector(".last_name input").value || ''},
                        {name: 'email', value: this.getEmailAddress()},
                        {name: 'phone', value: document.querySelector(".phone input").value || ''},
                        {name: 'email_opt_in', value: this.getEmailOptIn()},
                        {name: 'phone_opt_in', value: this.getPhoneOptIn()},
                        {name: 'postcode', value: document.querySelector(".zip input").value || ''},
                        {name: 'created_date', value: moment().format('YYYY-MM-DD HH:mm:ss')},
                    ];

                    console.log(data);

                    if(formResponse.value !== '') {
                        var newFormResponse = formResponse.value;
                    } else {
                        var newFormResponse = '';
                    }

                    for (var i = 0; i < data.length; i++) {
                        if(data.length - i !== 1) {
                            newFormResponse += data[i].name + '=' + this.removeIllegalChars(data[i].value) + '|';
                        } else {
                            newFormResponse += data[i].name + '=' + this.removeIllegalChars(data[i].value) + ';';
                        }
                    }
                    console.log(newFormResponse);

                    formResponse.value = newFormResponse;
                } else {
                    console.log('> No One_Click_Form_Completions field');
                }
            },
            populateJoinCampaign: function() {
                var element = document.querySelector(".Join_Campaign input");
                if(element && element.value === '') {
                    element.value = this.getApproachCode();
                }
            },
            populateOneClickFormCompletions: function() {
                var oneClickFormCompletions = document.querySelector(".One_Click_Form_Completions input");
                if(oneClickFormCompletions) {
                    if(oneClickFormCompletions.value !== '') {
                        var newOneClickFormCompletions = oneClickFormCompletions.value + '-' + getFormId();
                    } else {
                        var newOneClickFormCompletions = getFormId();
                    }
                    oneClickFormCompletions.value = newOneClickFormCompletions;
                } else {
                    console.log('> No One_Click_Form_Completions field');
                }
            },
            removeIllegalChars: function(str) {
                return str
                    .replace('|','')
                    .replace(';','')
                    .replace("'",'')
                    .replace('"','')
                    .replace(',','');
            },
            getEmailOptIn: function() {
                if(document.querySelector(".email input") && document.querySelector(".email input").value != '') {
                    return '1';
                } else {
                    return '0';
                }
            },
            getPhoneOptIn: function() {
                if(document.querySelector(".phone input") && document.querySelector(".phone input").value != '') {
                    return '1';
                } else {
                    return '0';
                }
            },
            getEmailAddress: function() {
                if(document.querySelector(".email input") && document.querySelector(".email input").value != '') {
                    return document.querySelector(".email input").value;
                } else {
                    return "temp_email_"+Date.now()+"_"+Math.random().toString(36).substr(2, 5)+"@greenpeace.org";
                }
            },
            labelsToPlaceholders: function(inputs) {
                inputs.forEach(function(input) {
                    $(input).each(function(){
                        var input = $(this).find('input');
                        var label = $(this).find('label');
                        var labelText = label.text();
                        input.attr('placeholder', labelText);
                        label.hide();
                    });
                });
            },
            updateFacebookShareLinkIfPaid: function() {
                var approachBaseUrl = "https://greenpeace-api.appspot.com/approaches/";
                var thisUrl = "https://greenpeace-api.appspot.com/approaches/" + this.getApproachCode();
                jQuery.ajax({
                    type: "GET",
                    url: thisUrl,
                    dataType: "json",
                    success: function(response) {
                        console.log(response);
                        if (response.approach.is_paid == 1) {
                            $('[data-share-medium="facebook"]').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsecure.greenpeace.org.uk%2Fsave-our-bees-fbp');
                        }
                    },
                    error: function(xhr, textStatus, error) {
                        console.log(xhr.status);
                        console.log(xhr.responseJSON)
                    }
                })
            },
        };

        OneClick = {
            isOneClick: function() {
                if( this.supporterIsEligible() && this.paramIsPresent && this.supporterHasntSubmited() ) {
                    return true;
                } else {
                    return false;
                }
            },
            supporterIsEligible: function() {
                var element = document.querySelector(".One_Click_Supporter input");

                if(element && element.value === "Yes") {
                    return true;
                } else {
                    return false;
                }
            },
            paramIsPresent: function() {
                if(getUrlVars()["one_click"] && getUrlVars()["one_click"] === "true") {
                    return true;
                } else {
                    return false;
                }
            },
            supporterHasntSubmited: function() {
                var submittedForms = document.querySelector(".One_Click_Form_Completions input");

                if(submittedForms && submittedForms.value) {
                    var FormId = getFormId();
                    var locat = submittedForms.value.indexOf(FormId);

                    if (locat == -1) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    console.log('> No One_Click_Form_Completions field');
                    return false;
                }
            }
        };
    </script>

        <!-- Submit the Form -->
        <script>
        function submitFormAjax(form) {
            $.post($(form).attr('action'), $(form).serialize()).done(function(data){
                submitSuccess();
                console.log('> submitSuccess()');
            }).fail(function(data){
                submitError();
                console.log('> submitError()');
            });
        }
        function submitSuccess() {

            // Show firstname
            var firstname = document.querySelector(".first_name input");
            if(firstname && firstname.value != '') {
                $('.supporter-first-name').text(firstname.value);
            }

            // Next ask
            var destination = '#share-ask-section';
            $(destination).show();
            $(window).scrollTo($(destination), 800);

            // Progress Steps
            $(".progress-container-div").fadeIn();

            // Dispatch Event
            var event = new CustomEvent('petitionSuccess');
            document.dispatchEvent(event);
        }
        function submitError() {
            console.log("Pardot Error -> Redirecting to regular form");
            window.location.replace(window.location.href);
        }
    </script>

        <!-- Social Share -->
        <script>
        $('[data-share-button-new-window]').click(function(e) {
            /* Open Link in New Tab */
            e.preventDefault();
            //TODO: should we open button if it's email?
            window.open($(this).attr('href'), 'shareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

            // Dispatch Event
            var event = new CustomEvent('share', {'detail': $(this).data('share-medium')});
            document.dispatchEvent(event);

            ProgressSteps.tickShare();

        });
    </script>

        <!-- Progress Steps -->
        <script>
        ProgressSteps = {
            tickShare: function() {
                $("#progress-block-shared").removeClass("progress-block-crossed");
                $("#progress-block-shared").addClass("progress-block-checked");
            },
            crossShare: function() {
                if (!$("#progress-block-shared").hasClass("progress-block-checked")) {
                    $("#progress-block-shared").addClass("progress-block-crossed");
                }
            },
            tickDonate: function() {
                $("#progress-block-donated").addClass("progress-block-checked");
            }
        };
    </script>

        <!-- Skip Share Click -->
        <script>
        $('.skip-button').click(function(e) {
            ProgressSteps.crossShare();
        });
    </script>

        <!-- Donate Click -->
        <script>
        $('[data-donate-button="true"]').click(function(e) {
            ProgressSteps.tickDonate();
        });
    </script>

        <!-- Petition Counter -->
        <script>
        var PetitionCounter = {
            init: function(campaign) {
                // var counterBaseUrl = 'https://uat-gpuk.cs127.force.com/pc/services/apexrest/campaign/petitioncounter/';
                var counterBaseUrl = 'https://gpuk.secure.force.com/pc/services/apexrest/campaign/petitioncounter/';
                var that = this;
                $.ajax({
                    type: "GET",
                    url: counterBaseUrl + campaign,
                    dataType: "json",
                    success: function(response) {
                        if (response.petitionCounter && Number.isInteger(response.petitionCounter)) {
                            var count = response.petitionCounter;
                            var target = that.getCounterTarget(count);
                            if(count > 1000) {
                                that.updateCounterText(count, target);
                            } else {
                                console.log("> petition counter is not large enough");
                            }
                        } else {
                            console.log("> petition counter $response.unique_count is not an Integer");
                        }
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        console.log("> petition counter returned an error");
                    }
                });
            },
            getCounterTarget: function(count) {
                switch (true) {
                    case count < 25000:
                        // nearest 5,000
                        var target = this.getRoundUp(count, 5000);
                        break;
                    case count < 150000:
                        // nearest 25,000
                        var target = this.getRoundUp(count, 25000);
                        break;
                    case count < 300000:
                        // nearest 50,000
                        var target = this.getRoundUp(count, 50000);
                        break;
                    case count < 1000000:
                        // nearest 100,000
                        var target = this.getRoundUp(count, 100000);
                        break;
                    case count >= 1000000:
                        // nearest 500,000
                        var target = this.getRoundUp(count, 500000);
                        break;
                    default:
                    //
                }
                return target;
            },
            getRoundUp: function(value, multiple) {
                return Math.ceil((value + 1) / multiple) * multiple;
            },
            numberWithCommas: function(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            updateCounterText: function(count, target) {
                var that = this;
                $('.petition_no').text(that.numberWithCommas(count));
                $('.petition_target').text(that.numberWithCommas(target));
                $('.petition-counter').fadeIn();
            },
        };
        PetitionCounter.init(PageOptions.defaultApproachCode);
    </script>

        <!-- Validation Object -->
        <script>
        Validator = {
                getRules: function() {
                    var rules = {};
                    rules[document.querySelector(".first_name input").getAttribute('name')] = {required: true};
                    rules[document.querySelector(".last_name input").getAttribute('name')] = {required: true};
                    rules[document.querySelector(".zip input").getAttribute('name')] = {isValidPetition: true};
                    rules[document.querySelector(".email input").getAttribute('name')] = {email: true};
                    return rules;
                },
                getMessages: function() {
                    var messages = {};
                    messages[document.querySelector(".first_name input").getAttribute('name')] = "Please enter your first name\n";
                    messages[document.querySelector(".last_name input").getAttribute('name')] = "Please enter your last name\n";
                    return messages;
                }
            }
            </script>

            <script>
            function getUrlVars() {
                var vars = {};
                var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
                    function(m,key,value) {
                        vars[key] = value;
                    });
                return vars;
            }
        function getFormId() {
            var parser = document.createElement('a');
            var form = document.querySelector('#pardot-form');
            if(form) {
                parser.href = form.getAttribute('action');
                return parser.pathname.split( '/' )[2];
            } else {
                return 0;
            }
        }
    </script>

        <!-- Read more display -->
        <script>
        $("button[data-show]").click(function() {
            var destination = $(this).attr('data-show');
            $(destination).toggleClass('hidden');
            $(this).find('.read-more-icon').toggleClass('hidden');
        });
    </script>

        <!-- Form Validation -->
        <script>
        $(function() {
            $.validator.addMethod("isValidPetition", function(value, element) {
                if($('.email input').val() || $('.phone input').val() || $('.zip input').val() ) {
                    return true;
                } else {
                    return false;
                }
            }, "Please leave your postcode so we can verify your petition signup\n");

            $( "#pardot-form" ).validate({
                submitHandler: function(form, event) {
                    console.log('> submitHandler()');
                    event.preventDefault();
                    PardotForm.constructFormFields();
                    submitFormAjax(form);
                },
                rules: Validator.getRules(),
                messages: Validator.getMessages()
            });
        });
    </script>

        <!-- Scroll to Buttons -->
        <script>
        // TODO: Combine all of the Event Listeners
        $("[data-scroll-to]").click(function() {
            var destination = $(this).attr('data-scroll-to');
            $(destination).show();
            $(window).scrollTo($(destination), 800);
        });
    </script>

        <!-- Share Listener -->
        <script>
        document.addEventListener('share', function (e) {
            console.log(e.detail);
        }, false);
    </script>

        <!-- Page App -->
        <script>
        $(function() {
            if( OneClick.isOneClick() ) {
                $('#pardot-form').submit();
            } else {
                PardotForm.init();
            }

            PardotForm.addApproachCodeToDonateButtons();

            if(PardotForm.isDDGiver()) {
                PardotForm.changeDonateAskToSingle();
            }
        });
    </script>

        <!--
            Template Personalisation???  New tab for the code???
            GTM
            More info: add icons and change colour
            New options: video URL && whatsapp share
            Does page work if postcode / email / phone aren't present?
            Pretty console.log
            Combine Code into files / Objects
        -->
        </body>
        </html>

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