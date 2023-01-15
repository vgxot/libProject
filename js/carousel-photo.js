(function() {
    "use strict";
    function Carousel(setting) {
        if(document.querySelector(setting.wrap) === null) {
            console.error(`Carousel not fount selector ${setting.wrap}`);
            return;
        }
        let privates = {},
            xDown, yDown, xUp, yUp, xDiff, yDiff;
        this.prev_slide = () => {
            if(!privates.isAnimationEnd) {
                return;
            }
            privates.isAnimationEnd = false;
            --privates.opt.position;
            if(privates.opt.position < 0) {
                privates.sel.wrap.classList.add('no-transition');
                privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.max_position}00%)`;
                privates.opt.position = privates.opt.max_position - 1;
            }
            setTimeout(() => {
                privates.sel.wrap.classList.remove('no-transition');
                privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
            }, 10);

            privates.sel.wrap.addEventListener('transitionend', () => {
                privates.isAnimationEnd = true;
            });

            if(privates.setting.autoplay === true) {
                privates.timer.become();
            }
        };

        // Next slide
        this.next_slide = () => {
            if(!privates.isAnimationEnd) {
                return;
            }

            privates.isAnimationEnd = false;

            if(privates.opt.position < privates.opt.max_position) {
                ++privates.opt.position;
            }

            privates.sel.wrap.classList.remove('no-transition');
            privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;

            privates.sel.wrap.addEventListener('transitionend', () => {
                if(privates.opt.position >= privates.opt.max_position) {
                    privates.sel.wrap.style["transform"] = 'translateX(0)';
                    privates.sel.wrap.classList.add('no-transition');
                    privates.opt.position = 0;
                }

                privates.isAnimationEnd = true;
            });

            if(privates.setting.autoplay === true) {
                privates.timer.become();
            }
        };

        // Pause timer carousel
        this.pause = () => {
            if(privates.setting.autoplay === true) {
                privates.timer.pause();
            }
        };

        // Become timer carousel
        this.become = (autoplayDelay = privates.setting.autoplayDelay) => {
            if(privates.setting.autoplay === true) {
                privates.setting.autoplayDelay = autoplayDelay;
                privates.timer.become();
            }
        };

        // Go to
        this.goto = (index) => {
            privates.opt.position = index - 1;
            this.next_slide();
        };

        // Item
        this.index = () => {
            return privates.opt.position;
        };

        /* privates methods */
        privates.hts = (e) => {
            xDown = e.touches[0].clientX;
            yDown = e.touches[0].clientY;
        };

        privates.htm = (e) => {
            if ( ! xDown || ! yDown ) {
                return;
            }

            xUp = e.touches[0].clientX;
            yUp = e.touches[0].clientY;

            xDiff = xDown - xUp;
            yDiff = yDown - yUp;

            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
                if ( xDiff > 0 ) {
                    this.next_slide();
                } else {
                    this.prev_slide();
                }
            }

            xDown = 0;
            yDown = 0;
        }

        /* privates properties */
        privates.default = {
            "touch": true,
            "autoplay": false,
            "autoplayDelay": 3000,
            "pauseOnFocus": true,
            "pauseOnHover": true
        };

        privates.setting = Object.assign(privates.default, setting);

        privates.isAnimationEnd = true;

        privates.sel = {
            "wrap": document.querySelector(privates.setting.wrap),
            "children": document.querySelector(privates.setting.wrap).children,
            "prev": document.querySelector(privates.setting.prev),
            "next": document.querySelector(privates.setting.next)
        };

        privates.opt = {
            "position": 0,
            "max_position": document.querySelector(privates.setting.wrap).children.length
        };


        /* Constructor */
        // Clone first elem to end wrap
        privates.sel.wrap.appendChild(privates.sel.children[0].cloneNode(true));


        // Autoplay
        if(privates.setting.autoplay === true) {
            privates.timer = new Timer(this.next_slide, privates.setting.autoplayDelay);
        }


        // Control
        if(privates.sel.prev !== null) {
            privates.sel.prev.addEventListener('click', () => {
                this.prev_slide();
            });
        }

        if(privates.sel.next !== null) {
            privates.sel.next.addEventListener('click', () => {
                this.next_slide();
            });
        }

        // Touch events
        if(privates.setting.touch === true) {
            privates.sel.wrap.addEventListener('touchstart', privates.hts, false);
            privates.sel.wrap.addEventListener('touchmove', privates.htm, false);
        }

        // Pause on hover
        if(privates.setting.autoplay === true && privates.setting.pauseOnHover === true) {
            privates.sel.wrap.addEventListener('mouseenter', () => {
                privates.timer.pause();
            });

            privates.sel.wrap.addEventListener('mouseleave', () => {
                privates.timer.become();
            });
        }
    }
    function timer(callback, delay) {
        /* privates properties */
        let timerId, start, remaining = delay;

        /* Public methods */
        this.resume = () => {
            start = new Date();
            timerId = setTimeout(() => {
                remaining = delay;
                this.resume();
                callback();
            }, remaining);
        };
        this.pause = () => {
            clearTimeout(timerId);
            remaining -= new Date() - start;
        };
        this.become = () => {
            clearTimeout(timerId);
            remaining = delay;
            this.resume();
        };

        /* Constructor */
        this.resume();
    }
    let a = new Carousel({
        "wrap": ".js-carousel-wrap",
        "prev": ".js-carousel-button-left",
        "next": ".js-carousel-button-right",
        "touch": true,
        "autoplay": true,
        "autoplayDelay": 3000
    });
})();