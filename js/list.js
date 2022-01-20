$(function () {

    $('.menu-3 li:nth-of-type(1)').click(function () {
        $('.type-box').show();
        $('.type-box2').hide();
        $('.type-box3').hide();
        $('.type-box4').hide();
    });


    $('.menu-3 li:nth-of-type(2)').click(function () {
        $('.type-box').hide();
        $('.type-box2').show();
        $('.type-box3').hide();
        $('.type-box4').hide();
    });


    $('.menu-3 li:nth-of-type(3)').click(function () {
        $('.type-box').hide();
        $('.type-box2').hide();
        $('.type-box3').show();
        $('.type-box4').hide();
    });

    $('.menu-3 li:nth-of-type(4)').click(function () {
        $('.type-box').hide();
        $('.type-box2').hide();
        $('.type-box3').hide();
        $('.type-box4').show();
    });

});

