$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "정리" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('bb_i_box');

        for (var i = 0; i < boxs.length; i++) {

            $(".book >.bb_i_box:nth-of-type(1)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
            $(".book >.bb_i_box:nth-of-type(1)").eq(i).append("<h5>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
            $(".book >.bb_i_box:nth-of-type(1)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");

        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "여우가잠든숲" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('bb_i_box');

        for (var i = 0; i < boxs.length; i++) {

            $(".book >.bb_i_box:nth-of-type(2)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
            $(".book >.bb_i_box:nth-of-type(2)").eq(i).append("<h5>" + '<a href="#">' + msg.documents[0].title + "</a>" + "</h3>");
            $(".book >.bb_i_box:nth-of-type(2)").eq(i).append("<h6>" + msg.documents[0].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");

        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "여우가잠든" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('bb_i_box');

        for (var i = 0; i < boxs.length; i++) {

            $(".book >.bb_i_box:nth-of-type(3)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
            $(".book >.bb_i_box:nth-of-type(3)").eq(i).append("<h5>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
            $(".book >.bb_i_box:nth-of-type(3)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");

        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "요리코" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('bb_i_box');

        for (var i = 0; i < boxs.length; i++) {

            $(".book >.bb_i_box:nth-of-type(4)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
            $(".book >.bb_i_box:nth-of-type(4)").eq(i).append("<h5>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
            $(".book >.bb_i_box:nth-of-type(4)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");

        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "만3세" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('bb_i_box');

        for (var i = 0; i < boxs.length; i++) {

            $(".book >.bb_i_box:nth-of-type(5)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
            $(".book >.bb_i_box:nth-of-type(5)").eq(i).append("<h5>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
            $(".book >.bb_i_box:nth-of-type(5)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");

        }

    });