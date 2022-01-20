$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"달러구트꿈백화점합본호" },
    headers: {Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540"}
})
    .done(function (msg) {
        $('.week').append('<a href="#"><img src="' + msg.documents[0].thumbnail +'"/></a>');
        $('.week_text').append('<h5 style="color: #3f9255; font-weight:normal;">' + "[달러구트 꿈 백화점] 100만 부 돌파 특별 합본호" +'</h5>');
        $('.week_text').append('<h3 style="color: #3a3a3a;">' + msg.documents[0].title +'</h3>');
        $('.week_text').append('<h5>' + "인터넷판매가:&nbsp;" + msg.documents[0].sale_price + "원" +'</h5>');
        $('.week_text').append('<h5 style="color: #777; font-weight:normal; padding-top:12px;">' + msg.documents[0].contents +'</h5>');
    });