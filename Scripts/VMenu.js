$(document).ready(function () {

    function HoverOver() {
        $(this).addClass('hover');
    }

    function HoverOut() {
        $(this).removeClass('hover');
    }

    var config = {
        sensitivity: 2,
        interval: 200,
        over: HoverOver,
        timeout: 500,
        out: HoverOut
    };

    $("#VMenu .topLevel > li.haschild").hoverIntent(config);

    $(".subLevel li.haschild").hover(HoverOver, HoverOut);

});


(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button"><a class="mobile-menu-icon bar-icon"><i class="fa fa-bars"></i></a></div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('haschild');

        cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };

})(jQuery);

(function($){
$(document).ready(function(){

$("#VMenu").menumaker({
   title: "Menu",
   format: "multitoggle"
});

});
})(jQuery);
