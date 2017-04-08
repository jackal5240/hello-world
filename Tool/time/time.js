(function() {

  today = new Date();
  today_year = today.getFullYear(); //西元年份
  today_month = today.getMonth()+1; //一年中的第幾月
  today_date = today.getDate(); //一月份中的第幾天

  today_hours = today.getHours(); //一天中的小時數
  today_minutes = today.getMinutes(); //一天中的分鐘
  today_seconds = today.getSeconds(); //一天中的秒數
  /*
  var CurrentDate = today_year+"-"+today_month+"-"+today_date+"  "+today_hours+":"+today_minutes+":"+today_seconds;
  var ScheduleDate = "2013-8-30 04:00:00";

  if ( (Date.parse(ScheduleDate)).valueOf() < (Date.parse(CurrentDate)).valueOf())
  {
    document.write("ScheduleDate = " + ScheduleDate);
    document.write("<br/>系統目前時間 = " + CurrentDate);
    document.write("<br/>ScheduleDate比系統目前時間小" );
  } else {
    document.write("ScheduleDate = " + ScheduleDate);
    document.write("<br/>系統目前時間 = " + CurrentDate);
    document.write("<br/>ScheduleDate比系統目前時間BIG");
  }
  */

  // db = new Date();
  // document.write("<br/>db time = " + db);

  var CurrentDate = today_year+"-"+today_month+"-"+today_date+"  "+today_hours+":"+today_minutes+":"+today_seconds;
  document.write("<br/>CurrentDate = " + CurrentDate);

  db = new Date(1305856000000);
  db_year = db.getFullYear();
  db_month = db.getMonth() + 1;
  db_date = db.getDate();

  var dbDate = db_year + '-' + db_month + '-' + db_date;
  document.write("<br/>dbDate = " + dbDate);
  var nowDate = today_year + '-' + today_month + '-' + today_date;
  document.write("<br/>nowDate = " + nowDate);

  if ( (Date.parse(nowDate)).valueOf() > (Date.parse(dbDate)).valueOf())
  {
    document.write("<br/>系統目前時間 = " + dbDate);
    document.write("<br/>nowDate比系統目前時間Big，Course is end" );
  } else {
    document.write("<br/>系統目前時間 = " + dbDate);
    document.write("<br/>nowDate比系統目前時間small，Course is start!!!!");
  }




  var timestamp = Date.parse(new Date());
  //timestamp = timestamp / 1000;
  //当前时间戳为：1403149534000.  1305856000000
  document.write("<br/>当前时间戳为：" + timestamp);


}) ();