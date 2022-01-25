$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "코난" },
    headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
  })
    .done(function (msg) {
  
      var boxs = document.getElementsByClassName('t_box');
  
      for (var i = 0; i < boxs.length; i++) {
  
        $('.book:nth-of-type(1)').eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
        $('.book:nth-of-type(1)').eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
        $('.book:nth-of-type(1)').eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
        $('.book:nth-of-type(1)').eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");
  
      }
  
    });