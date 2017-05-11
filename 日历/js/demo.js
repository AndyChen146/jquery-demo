(function(){
    /*
    *   步骤：1、声明一个dataobj变量，并获取当前系统时间
    *         2、给calendar中的div渲染HTML元素
    *         3、通过dataobj获取当前1号的信息，并遍历出表格中所有的日期
    *         4、给下月、上月绑定事件
    */
var dateobj = (function(){
    var _date = new Date();
    return {
      getDate:function(){
        return _date;
      },
      setDate:function(date){
        _date = date;
      }
    };
})();


rendHtml();
showCalendarData();
bindEvent();

//渲染HTML部分
function rendHtml(){
    var calendar = document.getElementById("calendar");
    var titleBox = document.createElement("div"); //创建表头部分
    var bodyBox = document.createElement("div");  //创建中间部分
    //添加表头部分html和样式
    titleBox.className = 'calendar-title-box';
    titleBox.innerHTML = '<span class="prev-month" id="prevMonth"></span><span class="calendar-title" id="calendarTitle"></span><span class="next-month" id="nextMonth"></span>';
    calendar.appendChild(titleBox);

    //添加中间部分html和样式
    bodyBox.className = 'calendar-body-box';

    var _headerHtml = '<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>';

    var _bodyHtml = '';
    //一个月最多31天，所以一个月最多6行表格
    for(var i=0;i<6;i++){
      _bodyHtml += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
    }

    bodyBox.innerHTML = '<table id="calendarTable" class="calendar-table">'+_headerHtml+_bodyHtml+'</table>';
    calendar.appendChild(bodyBox);
}

//表格中添加数据,并设置类名
function showCalendarData(){
  var _year = dateobj.getDate().getFullYear();
  var _month = dateobj.getDate().getMonth()+1;
  var _datastr = getDateStr(dateobj.getDate());
  //设置表头部分的年月信息
  var calendarTitle = document.getElementById("calendarTitle");
  var titleSrt = _datastr.substr(0,4)+'年'+_datastr.substr(4,2)+'月';
  calendarTitle.innerHTML = titleSrt;

  //设置表格中间部分的日期数据
  var _table = document.getElementById("calendarTable");
  var _tds = _table.getElementsByTagName("td");
  var _firstDay = new Date(_year,_month -1,1);//当前月的第一天

  for(var i=0;i<_tds.length;i++){
      var _thisDay = new Date(_year,_month-1,i+1-_firstDay.getDay());//获取当前月的所有天

      var _thisDayStr = getDateStr(_thisDay);//日期转换
      _tds[i].innerText = _thisDay.getDate();//获取日期(天)

      _tds[i].setAttribute('data',_thisDayStr);

      if(_thisDayStr == getDateStr(new Date())){ //判断是否当前日
          _tds[i].className = 'currentDay';
      }else if(_thisDayStr.substr(0,6) == getDateStr(_firstDay).substr(0,6)){
          _tds[i].className = 'currentMonth';
      }else{
          _tds[i].className = 'otherMonth';
      }
  }
 
}

//绑定下月和上月点击事件
function bindEvent(){

    var prevMonth = document.getElementById("prevMonth");
    var nextMonth = document.getElementById("nextMonth");
    addEvent(prevMonth,'click',toPrevMonth);
    addEvent(nextMonth,'click',toNextMonth);
}
//给上下月事件绑定监听方法
function addEvent(dom,etype,func){
    
    if(dom.addEventListener){
        dom.addEventListener(etype,function(e){
            func(e);
        });
    }else if(dom.attachEvent){  //低版本IE
        dom.attachEvent('on'+etype,function(e){
            func(e);
        });
    }else{
        dom['on'+etype] = function(e){
            func(e);
        };
    }
}

function toPrevMonth(){
    var date = dateobj.getDate();
    dateobj.setDate(new Date(date.getFullYear(),date.getMonth()-1,1));
    showCalendarData();

}

function toNextMonth(){
    var date = dateobj.getDate();
    dateobj.setDate(new Date(date.getFullYear(),date.getMonth()+1,1));
    showCalendarData();
}
//日期转换，xxxx年xx月xx日
function getDateStr(date){  
  var _year = date.getFullYear();
  var _month = date.getMonth()+1;
  var _d = date.getDate();

  _month = (_month > 9) ? (''+_month):('0'+_month);
  _d = (_month > 9) ? (''+_d):('0'+_d);
  return _year+_month+_d;
}


})();