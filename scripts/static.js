$(function() {
    var topbar = $('.topbar');
    var content_block = $('.content_block');
    var sidebar = $('.sidebar').width();
    var add_AD = $('.add_AD');
    doc_w = $(document).width();
    topbar.css('width', (doc_w - 235) + 'px');
    content_block.css('width', (doc_w - 235) + 'px');

    $(window).resize(function() {
        doc_w = document.body.clientWidth;
        topbar.css('width', (doc_w - 235) + 'px');
        content_block.css('width', (doc_w - 235) + 'px');
        //console.log(doc_w);
        if (topbar.width() < 670) {
            //console.log(444);
            add_AD.addClass('small_add_AD');
        } else add_AD.removeClass('small_add_AD');
        //console.log(sidebar);
    });



    var scroll_top = $(document).scrollTop();
    $(window).scroll(function() {

        var x = $(".topbar").position();


        if ($(document).scrollTop() > scroll_top) {
            scroll_top = $(document).scrollTop();
            topbar.addClass('up');
        } else {
            scroll_top = $(document).scrollTop();
            topbar.removeClass('up');
        }
        var scroll_left = $(document).scrollLeft();
        topbar.css('left', 230 - scroll_left + "px");

    });

});