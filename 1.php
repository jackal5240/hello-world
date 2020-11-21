http://9datong.com/water/php/login_code.php
Content-Type: application/x-www-form-urlencoded
Form Data
account_id=32382779&password=32382779


<html>
<head>
  <meta charset="UTF-8">
  <title>9大通 - </title>
  <script src="http://s.codepen.io/assets/libs/modernizr.js" type="text/javascript"></script>
   <!-- sweet alert This is what you need -->
  <script src="dist/sweetalert-dev.js"></script>
  <link rel="stylesheet" href="dist/sweetalert.css">
  <!--.....end..................-->
</head>
<body >

  <script language="javascript">
  swal({
      title: "請再做最後一次確認!",
      text: "<font color='red'>手機號與<img src='img/line.png'>line ID 《務必填寫正確》以免無法加入貴賓<img src='img/line.png'>line為好友成為我們的專屬貴賓，利用 相片/視訊/影片 配對到喜愛的美容師。</font>",
      html: true,
      type: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "確定註冊",
      cancelButtonText: "回上一頁修改資料",
       closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm){
     if (isConfirm) {
       swal({
        title: "<font color='black'>註冊成功!請加line為好友並輸入通關密語 :) </font>",
        text: "<font color='black'>1. 請點選<a href=https://line.me/ti/p/OpVMXHrcCC ><img src='img/linecs2.png' /></a>加line為好友 , 並在line聊天室中輸入通關密語<font color='red'> <b>[手機號後6碼]</b></font> ，否則無法幫你做配對。 <br> <br> 2.客服人員會在24H內確認line好友，如是『女司機』客服加入請找他告知『手機號後６碼』，請務必主動告知否則無法開通 感謝配合。</font><br> <br>",
        html: true,
        type: "warning",
        showCancelButton: true,
        showConfirmButton: false,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確定註冊",
        cancelButtonText: "回首頁",
         closeOnConfirm: false,
        closeOnCancel: false
        },
        function(isConfirm){
          if (isConfirm) {
          }
          else{
            location.href="index.php";
          }
        }
      );
      } else {
      window.history.back();
      }


    });

  </script>
  </body>
</html>
