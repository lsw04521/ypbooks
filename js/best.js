$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "흔한남매" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {
        $('.b_box').append('<a href="#"><img src="' + msg.documents[0].thumbnail + '"/></a>');
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "오늘밤세계에서" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {
        $('.b_box1').append('<a href="#"><img src="' + msg.documents[0].thumbnail + '"/></a>');
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "미드나잇라이브러리" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {
        $('.b_box2').append('<a href="#"><img src="' + msg.documents[0].thumbnail + '"/></a>');
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "달러구트" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {
        $('.b_box3').append('<a href="#"><img src="' + msg.documents[0].thumbnail + '"/></a>');
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "오십에읽는" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
    .done(function (msg) {
        $('.b_box4').append('<a href="#"><img src="' + msg.documents[0].thumbnail + '"/></a>');
    });