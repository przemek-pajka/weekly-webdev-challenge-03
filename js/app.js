(function() {
      jQuery(document).ready(function ($) {
        $('.toggle-menu').jPushMenu();
    });
    
    $('.toggle-menu').click(function() {
        $('.cbp-spmenu').toggleClass("menu-open");
    });
     $('.toggle-menu').click(function () {
        $('body').toggleClass('overflow-hidden');
    });

    $(window).click(function () {
        $('body').removeClass('overflow-hidden');
    });
})();
