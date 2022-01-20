$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"허상의어릿광대" },
    headers: {Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540"}
})
    .done(function (msg) {
        $('.today').append('<a href="#"><img src="' + msg.documents[0].thumbnail +'"/></a>');
        $('.today').append('<h3>' + msg.documents[0].title +'</h3>');
    });