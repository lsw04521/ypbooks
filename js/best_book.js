$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "오늘밤세계" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('best_book');

        for (var i = 0; i < boxs.length; i++) {

            $(".best >.best_book:nth-of-type(1)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
            $(".best >.best_book:nth-of-type(1)").eq(i).append('<p>' + msg.documents[1].title + "</p>");

        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "미드나잇" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('best_book');

        for (var i = 0; i < boxs.length; i++) {

            $(".best >.best_book:nth-of-type(2)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
            $(".best >.best_book:nth-of-type(2)").eq(i).append('<p>' + msg.documents[0].title + "</p>");
        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "허상어릿광대" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('best_book');

        for (var i = 0; i < boxs.length; i++) {

            $(".best >.best_book:nth-of-type(3)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
            $(".best >.best_book:nth-of-type(3)").eq(i).append('<p>' + msg.documents[0].title + "</p>");
        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "이름모를" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('best_book');

        for (var i = 0; i < boxs.length; i++) {

            $(".best >.best_book:nth-of-type(4)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
            $(".best >.best_book:nth-of-type(4)").eq(i).append('<p>' + msg.documents[0].title + "</p>");
        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "요리코" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('best_book');

        for (var i = 0; i < boxs.length; i++) {

            $(".best >.best_book:nth-of-type(5)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
            $(".best >.best_book:nth-of-type(5)").eq(i).append('<p>' + msg.documents[1].title + "</p>");
        }

    });