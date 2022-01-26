$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불편편의점" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('best_book2');

        for (var i = 0; i < boxs.length; i++) {

            $(".best2 >.best_book2:nth-of-type(1)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
            $(".best2 >.best_book2:nth-of-type(1)").eq(i).append('<p>' + msg.documents[0].title + "</p>");

        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "어서오세요휴남동" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('best_book2');

        for (var i = 0; i < boxs.length; i++) {

            $(".best2 >.best_book2:nth-of-type(2)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
            $(".best2 >.best_book2:nth-of-type(2)").eq(i).append('<p>' + msg.documents[0].title + "</p>");
        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "작은것들을위한시" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('best_book2');

        for (var i = 0; i < boxs.length; i++) {

            $(".best2 >.best_book2:nth-of-type(3)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
            $(".best2 >.best_book2:nth-of-type(3)").eq(i).append('<p>' + msg.documents[0].title + "</p>");
        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "계절산문" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('best_book2');

        for (var i = 0; i < boxs.length; i++) {

            $(".best2 >.best_book2:nth-of-type(4)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
            $(".best2 >.best_book2:nth-of-type(4)").eq(i).append('<p>' + msg.documents[0].title + "</p>");
        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "카페에서공부하는할머니" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('best_book2');

        for (var i = 0; i < boxs.length; i++) {

            $(".best2 >.best_book2:nth-of-type(5)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
            $(".best2 >.best_book2:nth-of-type(5)").eq(i).append('<p>' + msg.documents[0].title + "</p>");
        }

    });