$(function () {

    $.get("./sub_txt/section-1.txt", function (data) {

        $("#section-1").html(data);



    })



});