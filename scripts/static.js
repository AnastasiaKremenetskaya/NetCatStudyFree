$(function() {

    var login_bar_is_active = new Boolean(false);
    login_bar_is_active = false;
    showLoginBar(false);

    //@auth
    var userIsAuath = new Boolean(false);
    //userIsAuath = true;

    //Показать логинбар

    //Показывать профильбар, если пользователь вошел
    var profile_bar = $(".profilebar");
    var but_sign_in = $(".but_sign_in")
    if (userIsAuath == true) {
        profile_bar.css('top', '13%')
        but_sign_in.css('top', '-200px')
    } else {
        profile_bar.css('top', '-200px')
        but_sign_in.css('top', '13%')
    }


    var topbar = $('.topbar');
    var content_block = $('.content_block');
    var footer = $('.footer');
    var sidebar = $('.sidebar').width();
    var add_AD = $('.add_AD');
    doc_w = $(document).width();

    //ширина хедера и контент блока для полной версии сайта
    if (doc_w > 650) {
        topbar.css('width', (doc_w - 235) + 'px');
        content_block.css('width', (doc_w - 235) + 'px');
    }


    //Размер кнопки добавления объявления для маленьой ширины сайта
    if (topbar.width() < 690) {
        add_AD.addClass('small_add_AD');
    }

    //Изменения расположения блоков при ресайзе
    $(window).resize(function() {
        doc_w = document.body.clientWidth;
        doc_h = document.body.clientHeight;

        if (doc_w > 650) {
            topbar.css('width', (doc_w - 235) + 'px');
            topbar.css('left', "230px");
            content_block.css('width', (doc_w - 235) + 'px');
            footer.css('width', content_block.width() + 240 + "px");
        } else {
            topbar.css('width', doc_w + 'px');
            topbar.css('left', "0px");
            content_block.css('width', doc_w + 'px');
            footer.css('width', "100%");
        }

        //Устанавливаем логин бар по середине
        if (login_bar_is_active == true) {
            var left_lorin_bar;
            left_lorin_bar = (doc_w / 2) - (login_bar.width() / 2);
            login_bar.css('left', left_lorin_bar + "px");
        }

        //console.log(doc_w);
        if (topbar.width() < 700) {
            //console.log(444);
            add_AD.addClass('small_add_AD');
        } else add_AD.removeClass('small_add_AD');
        //console.log(sidebar);



    });



    var scroll_top = $(document).scrollTop();
    $(window).scroll(function() {
        var scroll_top = $(document).scrollTop();
        var x = $(".topbar").position();

        /*console.log(login_bar.offset().top);
        if (login_bar.offset().top < 0) {
            login_bar.css('position', 'absolute')
        } else login_bar.css('position', 'fixed')
        */


        //Выезжание хедера при прокрутке сайта вверх
        if (doc_w > 650) {
            if ($(document).scrollTop() > scroll_top) {
                scroll_top = $(document).scrollTop();
                topbar.addClass('up');
            } else {
                scroll_top = $(document).scrollTop();
                topbar.removeClass('up');
            }
        }

        //Выравнивание хедера справа от сайдбара
        var scroll_left = $(document).scrollLeft();
        if (doc_w > 650)
            topbar.css('left', 230 - scroll_left + "px");
        else
            topbar.css('left', 0 - scroll_left + "px");

    });

    $(".but_sign_in").click(function(e) {
        showLoginBar(true);
        login_bar_is_active = true;
        var left_lorin_bar;
        left_lorin_bar = (doc_w / 2) - (login_bar.width() / 2);
        login_bar.css('left', left_lorin_bar + "px");
    });

    var login_bar = $(".login-wrap");
    $(".login_bg").click(function(e) {
        showLoginBar(false);
        login_bar_is_active = false;
        login_bar.css('left', '-100%');
    });

});

function showLoginBar(show) {
    var login_wrap = $('.login-wrap');
    var login_bg = $(".login_bg");
    if (show == true) {
        login_bg.css('left', "0px");
    } else {
        login_bg.css('left', "-100%");
        login_wrap.css('left', "-100%");
    }
}