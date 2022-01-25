$(function () {

    $.get("./sub_txt/section-1.txt", function (data) {
        $("#section-1").html(data);
    })

    $.get("./sub_txt/section-2.txt", function (data) {
        $("#section-2").html(data);
    })

    $.get("./sub_txt/section-3.txt", function (data) {
        $("#section-3").html(data);
    })

    $.get("./sub_txt/section-4.txt", function (data) {
        $("#section-4").html(data);
    })



});