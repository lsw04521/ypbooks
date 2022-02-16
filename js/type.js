$(function () {
  $('.cart').append('<a href="#">' + '<div class="c_1">' + "장바구니" + "</div>" + '</a>');
  $('.cart').append('<a href="#">' + '<div class="c_2">' + "내서점" + "</div>" + '</a>');
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "명탐정코난100" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box >.t_box:nth-of-type(1)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
      $(".type-box >.t_box:nth-of-type(1)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[0].title + "</a>" + "</h3>");
      $(".type-box >.t_box:nth-of-type(1)").eq(i).append("<h6>" + msg.documents[0].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box >.t_box:nth-of-type(1)").eq(i).append("<h3>" + msg.documents[0].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "이나은대본집" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box >.t_box:nth-of-type(2)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box >.t_box:nth-of-type(2)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box >.t_box:nth-of-type(2)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box >.t_box:nth-of-type(2)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "지각심리학적" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box >.t_box:nth-of-type(3)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box >.t_box:nth-of-type(3)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box >.t_box:nth-of-type(3)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box >.t_box:nth-of-type(3)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "세상에서가장행복한" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box >.t_box:nth-of-type(4)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box >.t_box:nth-of-type(4)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box >.t_box:nth-of-type(4)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box >.t_box:nth-of-type(4)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "강성태66일" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box >.t_box:nth-of-type(5)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box >.t_box:nth-of-type(5)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box >.t_box:nth-of-type(5)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box >.t_box:nth-of-type(5)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "인문학33선" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box >.t_box:nth-of-type(6)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box >.t_box:nth-of-type(6)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box >.t_box:nth-of-type(6)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box >.t_box:nth-of-type(6)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "현대문학핀시리즈소설선" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box >.t_box:nth-of-type(7)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box >.t_box:nth-of-type(7)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box >.t_box:nth-of-type(7)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box >.t_box:nth-of-type(7)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "빛을" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box >.t_box:nth-of-type(8)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box >.t_box:nth-of-type(8)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box >.t_box:nth-of-type(8)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box >.t_box:nth-of-type(8)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "스핀오프" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box2 >.t_box:nth-of-type(1)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box2 >.t_box:nth-of-type(1)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box2 >.t_box:nth-of-type(1)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box2 >.t_box:nth-of-type(1)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "호수의 일" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box2 >.t_box:nth-of-type(2)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
      $(".type-box2 >.t_box:nth-of-type(2)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[0].title + "</a>" + "</h3>");
      $(".type-box2 >.t_box:nth-of-type(2)").eq(i).append("<h6>" + msg.documents[0].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box2 >.t_box:nth-of-type(2)").eq(i).append("<h3>" + msg.documents[0].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "치약을" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box2 >.t_box:nth-of-type(3)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box2 >.t_box:nth-of-type(3)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box2 >.t_box:nth-of-type(3)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box2 >.t_box:nth-of-type(3)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "최초의역사수메르" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box2 >.t_box:nth-of-type(4)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box2 >.t_box:nth-of-type(4)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box2 >.t_box:nth-of-type(4)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box2 >.t_box:nth-of-type(4)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "치약을마중나온" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box2 >.t_box:nth-of-type(5)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
      $(".type-box2 >.t_box:nth-of-type(5)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[0].title + "</a>" + "</h3>");
      $(".type-box2 >.t_box:nth-of-type(5)").eq(i).append("<h6>" + msg.documents[0].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box2 >.t_box:nth-of-type(5)").eq(i).append("<h3>" + msg.documents[0].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "멸망" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box2 >.t_box:nth-of-type(6)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box2 >.t_box:nth-of-type(6)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box2 >.t_box:nth-of-type(6)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box2 >.t_box:nth-of-type(6)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "빛을" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box2 >.t_box:nth-of-type(7)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box2 >.t_box:nth-of-type(7)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box2 >.t_box:nth-of-type(7)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box2 >.t_box:nth-of-type(7)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "슈트트가르트" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box2 >.t_box:nth-of-type(8)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box2 >.t_box:nth-of-type(8)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box2 >.t_box:nth-of-type(8)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box2 >.t_box:nth-of-type(8)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "달러구트꿈백화점" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box3 >.t_box:nth-of-type(1)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
      $(".type-box3 >.t_box:nth-of-type(1)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[0].title + "</a>" + "</h3>");
      $(".type-box3 >.t_box:nth-of-type(1)").eq(i).append("<h6>" + msg.documents[0].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box3 >.t_box:nth-of-type(1)").eq(i).append("<h3>" + msg.documents[0].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "돈의속성" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box3 >.t_box:nth-of-type(2)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
      $(".type-box3 >.t_box:nth-of-type(2)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[0].title + "</a>" + "</h3>");
      $(".type-box3 >.t_box:nth-of-type(2)").eq(i).append("<h6>" + msg.documents[0].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box3 >.t_box:nth-of-type(2)").eq(i).append("<h3>" + msg.documents[0].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "꽃을보듯" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box3 >.t_box:nth-of-type(3)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box3 >.t_box:nth-of-type(3)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box3 >.t_box:nth-of-type(3)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box3 >.t_box:nth-of-type(3)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "보통의언어들" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box3 >.t_box:nth-of-type(4)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box3 >.t_box:nth-of-type(4)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box3 >.t_box:nth-of-type(4)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box3 >.t_box:nth-of-type(4)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "부의추월차선" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box3 >.t_box:nth-of-type(5)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box3 >.t_box:nth-of-type(5)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box3 >.t_box:nth-of-type(5)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box3 >.t_box:nth-of-type(5)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "부자아빠" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box3 >.t_box:nth-of-type(6)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box3 >.t_box:nth-of-type(6)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box3 >.t_box:nth-of-type(6)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box3 >.t_box:nth-of-type(6)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "종의기원" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box3 >.t_box:nth-of-type(7)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box3 >.t_box:nth-of-type(7)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box3 >.t_box:nth-of-type(7)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box3 >.t_box:nth-of-type(7)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "아몬드" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box3 >.t_box:nth-of-type(8)").eq(i).append('<a href="#">' + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
      $(".type-box3 >.t_box:nth-of-type(8)").eq(i).append("<h3>" + '<a href="#">' + msg.documents[1].title + "</a>" + "</h3>");
      $(".type-box3 >.t_box:nth-of-type(8)").eq(i).append("<h6>" + msg.documents[1].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box3 >.t_box:nth-of-type(8)").eq(i).append("<h3>" + msg.documents[1].sale_price + "원" + "</h3>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "코믹" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box4 >.t_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $(".type-box4 >.t_box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
      $(".type-box4 >.t_box").eq(i).append("<h6>" + msg.documents[i].authors + "ㅣ" + msg.documents[i].publisher + "</h6>");
      $(".type-box4 >.t_box").eq(i).append("<h3>" + msg.documents[i].sale_price + "원" + "</h3>");

    }

  });