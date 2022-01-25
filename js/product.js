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
        $('.p_text').append('<br>');
        $('.p_text').append('<p>' + "저자:" + '<b style="font-weight:normal; color:#000;">' + msg.documents[0].authors + "ㅣ" + '</b>' + "&nbsp;" + "출판사:" + '<b style="font-weight:normal; color:#000;">' + msg.documents[0].publisher + "ㅣ" + '</b>' + "&nbsp;" + "역자:" + '<b style="font-weight:normal; color:#000;">' + msg.documents[0].translators + '</b>' + '<br>' + "2022.01.19 ㅣ 376p ㅣ ISBN-13 : 9788984374386" + '</p>' + '<br>' + '<hr>');
        $('.p_text').append('<br>');
        $('.p_text').append('<p>' + "정가" + "&nbsp;" + '<s>' + '<b>' + msg.documents[0].price + '</b>' + '</s>' + "원" + '</p>');
        $('.p_text').append('<p>' + "판매가" + "&nbsp;" +'<b style="color:red; font-size:20px;">' + msg.documents[0].sale_price + '</b>' + "원" + "&nbsp;" + "(10% 할인)" + '</p>');
        $('.p_text').append('<p>' + "적립금" + "&nbsp;" + '<b>' + "800원(5%)" + '</b>' +'</p>');
        $('.p_text').append('<p>' + "배송일정" + "&nbsp;" + '<b style="font-weight:normal; color:red;">' + "오늘 출고 예정 &nbsp; (주말/공휴일 제외)" + '</b>' +'</p>');
    });