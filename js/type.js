$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=content",
  data: { query: "추천베스트" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box >.t_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $(".type-box >.t_box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
      $(".type-box >.t_box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


      var str = msg.documents[i].contents;
      var str2 = str.substring(0, 60);

      $(".type-box >.t_box").eq(i).append("<p>" + '<a href="#">' + str2 + "</a>" + "</p>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=content",
  data: { query: "신" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box2 >.t_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $(".type-box2 >.t_box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
      $(".type-box2 >.t_box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


      var str = msg.documents[i].contents;
      var str2 = str.substring(0, 60);

      $(".type-box2 >.t_box").eq(i).append("<p>" + '<a href="#">' + str2 + "</a>" + "</p>");

    }

  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=content",
  data: { query: "셀러책" },
  headers: { Authorization: "KakaoAK ba55818c71fb7419139bf66827f8d540" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('t_box');

    for (var i = 0; i < boxs.length; i++) {

      $(".type-box3 >.t_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $(".type-box3 >.t_box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
      $(".type-box3 >.t_box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


      var str = msg.documents[i].contents;
      var str2 = str.substring(0, 60);

      $(".type-box3 >.t_box").eq(i).append("<p>" + '<a href="#">' + str2 + "</a>" + "</p>");

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
      $(".type-box4 >.t_box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


      var str = msg.documents[i].contents;
      var str2 = str.substring(0, 60);

      $(".type-box4 >.t_box").eq(i).append("<p>" + '<a href="#">' + str2 + "</a>" + "</p>");

    }

  });