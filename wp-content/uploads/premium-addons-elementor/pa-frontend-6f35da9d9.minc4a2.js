!function(e){function i(i,m){var u=i.find(".premium-carousel-wrapper"),h=m(u).data("settings"),e=getComputedStyle(i[0]);if(!(u.find(".item-wrapper").length<1)){if(u.on("init",function(e){e.preventDefault(),setTimeout(function(){window.carouselTrigger=!0,i.trigger("paCarouselLoaded"),t("init")},500),m(this).find("item-wrapper.slick-active").each(function(){var e=m(this);e.addClass(e.data("animation"))}),m(".slick-track").addClass("translate")}),u.find(".premium-carousel-inner").slick({vertical:h.vertical,slidesToScroll:h.slidesToScroll,slidesToShow:h.slidesToShow,responsive:[{breakpoint:h.tabletBreak,settings:{slidesToShow:h.slidesTab,slidesToScroll:h.slidesTab,swipe:h.touchMove}},{breakpoint:h.mobileBreak,settings:{slidesToShow:h.slidesMob,slidesToScroll:h.slidesMob,swipe:h.touchMove}}],useTransform:!0,fade:h.fade,infinite:h.infinite,speed:h.speed,autoplay:h.autoplay,autoplaySpeed:h.autoplaySpeed,rows:0,draggable:h.draggable,rtl:h.rtl,adaptiveHeight:h.adaptiveHeight,pauseOnHover:h.pauseOnHover,centerMode:h.centerMode,centerPadding:e.getPropertyValue("--pa-carousel-center-padding")+"px",arrows:h.arrows,prevArrow:u.find(".premium-carousel-nav-arrow-prev").html(),nextArrow:u.find(".premium-carousel-nav-arrow-next").html(),dots:h.dots,variableWidth:h.variableWidth,cssEase:h.cssEase,customPaging:function(){return u.find(".premium-carousel-nav-dot").html()}}),i.find(".premium-carousel-hidden").removeClass("premium-carousel-hidden"),u.find(".premium-carousel-nav-arrow-prev").remove(),u.find(".premium-carousel-nav-arrow-next").remove(),h.variableWidth&&u.find(".elementor-container").css("flex-wrap","nowrap"),u.on("afterChange",function(e,i,n){var a,t,o=i.options.slidesToScroll,s=(a=i.options.slidesToShow,(t=m(window).width())>h.tabletBreak&&(a=h.slidesDesk),t<=h.tabletBreak&&(a=h.slidesTab),t<=h.mobileBreak&&(a=h.slidesMob),a),r=i.options.centerMode,l=n+s-1;if(u.find(".slick-active .elementor-invisible").each(function(e,i){var n=m(i).data("settings");if(n&&(n._animation||n.animation)){var a=n._animation_delay?n._animation_delay:0,t=n._animation||n.animation;setTimeout(function(){m(i).removeClass("elementor-invisible").addClass(t+" animated")},a)}}),1===o){if(!0==!r){var d=m(this).find("[data-slick-index='"+l+"']");"null"!=h.animation&&d.find("p, h1, h2, h3, h4, h5, h6, span, a, img, i, button").addClass(h.animation).removeClass("premium-carousel-content-hidden")}}else for(var c=o+n;0<=c;c--)d=m(this).find("[data-slick-index='"+c+"']"),"null"!=h.animation&&d.find("p, h1, h2, h3, h4, h5, h6, span, a, img, i, button").addClass(h.animation).removeClass("premium-carousel-content-hidden");i.$slides.length-1!=n||h.infinite||u.find(".premium-carousel-inner").slick("slickSetOption","autoplay",!1,!1)}),u.on("beforeChange",function(e,i,n){t();var a=m(this).find("[data-slick-index='"+n+"']");"null"!=h.animation&&a.siblings().find("p, h1, h2, h3, h4, h5, h6, span, a, img, i, button").removeClass(h.animation).addClass("premium-carousel-content-hidden")}),h.vertical){var n=-1;elementorFrontend.elements.$window.on("load",function(){u.find(".slick-slide").each(function(){m(this).height()>n&&(n=m(this).height())}),u.find(".slick-slide").each(function(){m(this).height()<n&&m(this).css("margin",Math.ceil((n-m(this).height())/2)+"px 0")})})}var a={element:m("a.ver-carousel-arrow"),getWidth:function(){return this.element.outerWidth()/2},setWidth:function(e){"vertical"==(e=e||"vertical")?this.element.css("margin-left","-"+this.getWidth()+"px"):this.element.css("margin-top","-"+this.getWidth()+"px")}};a.setWidth(),a.element=m("a.carousel-arrow"),a.setWidth("horizontal"),m(document).ready(function(){h.navigation.map(function(e,i){e&&m(e).on("click",function(){var e=u.find(".premium-carousel-inner").slick("slickCurrentSlide");i!==e&&u.find(".premium-carousel-inner").slick("slickGoTo",i)})})})}function t(e){var i=u.find(".slick-slide");"init"===e&&(i=i.not(".slick-current")),i.find(".animated").each(function(e,i){var n=m(i).data("settings");if(n&&(n._animation||n.animation)){var a=n._animation||n.animation;m(i).removeClass("animated "+a).addClass("elementor-invisible")}})}}e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/premium-carousel-widget.default",i)})}(jQuery);