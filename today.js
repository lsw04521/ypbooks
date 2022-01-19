$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"허상의어릿광대" },
    headers: {Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540"}
})
    .done(function (msg) {
        console.log(msg.documents[0].title);
        console.log(msg.documents[0].thumbnail);
        $('.today').append('<a href="#"><img src="' + msg.documents[0].thumbnail +'"/></a>');
        $('.today').append('<h3>' + msg.documents[0].title +'</h3>');
        $('.today').append('<p>' + '천재 물리학자와 엘리트 형사가 상식을 초월하는 불가사의한 사건에 도전한다허상의 어릿광대인터넷판매가: 16,920원 (히가시노게이고 | 재인)' +'</p>');
    });