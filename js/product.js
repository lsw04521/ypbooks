$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"센강의이름모를여인" },
    headers: {Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540"}
})
    .done(function (msg) {
        $('.p_s').append('<img src="' + msg.documents[0].thumbnail +'"/>');
        $('.p_s').append('<a href="#">' + "미리보기" + '</a>');
        $('.p_s').append('<br>');
        $('.p_s').append('<br>');
        $('.p_s').append('<a href="#">' + "영업점 재고 및 위치 확인" + '</a>');
        $('.p_text').append('<h3>' + msg.documents[0].title +'</h3>');
        $('.p_text').append('<p>' + "저자:" + msg.documents[0].authors + "&nbsp;" + "출판사:" + msg.documents[0].publisher + "&nbsp;" + "역자:" + msg.documents[0].translators + '<br>' + "2022.01.19 ㅣ 376p ㅣ ISBN-13 : 9788984374386" + '</p>' + '<hr>');
        $('.p_text').append('<p>' + "정가" + "&nbsp;" + '<s>' + msg.documents[0].price + '</s>' + "원" + '</p>');
        $('.p_text').append('<p>' + "판매가" + "&nbsp;" +'<b style="color:red;">' + msg.documents[0].sale_price + '</b>' + "원" + "&nbsp;" + "(10% 할인)" + '</p>');
        $('.p_text').append('<p>' + "적립금" + "&nbsp;" + "800원(5%)" +'</p>');
        $('.p_text').append('<p>' + "배송일정" + "&nbsp;" + "오늘 출고 예정 &nbsp; (주말/공휴일 제외)" +'</p>');
    });