$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "존리의부자되기습관" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {
        $(".one> .tm_box:nth-of-type(1)").append('<a href="#"><img src="' + msg.documents[0].thumbnail + '"/></a>');
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "요리코를위해" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {
        $(".one> .tm_box:nth-of-type(2)").append('<a href="#"><img src="' + msg.documents[0].thumbnail + '"/></a>');
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "재인 재욱 재훈" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {
        $(".one> .tm_box:nth-of-type(3)").append('<a href="#"><img src="' + msg.documents[0].thumbnail + '"/></a>');
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "여름은 오래 그곳에 남아" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {
        $(".two> .tm_box:nth-of-type(1)").append('<a href="#"><img src="' + msg.documents[0].thumbnail + '"/></a>');
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "소크라테스 익스프레스" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {
        $(".two> .tm_box:nth-of-type(2)").append('<a href="#"><img src="' + msg.documents[0].thumbnail + '"/></a>');
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "소설-상(열린책들세계문학4)" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {
        $(".two> .tm_box:nth-of-type(3)").append('<a href="#"><img src="' + msg.documents[0].thumbnail + '"/></a>');
    });