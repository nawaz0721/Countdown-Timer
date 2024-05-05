var years = document.getElementById('years');
var months = document.getElementById('months');
var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var ye = document.getElementById('ye');
var mo = document.getElementById('mo');
var dd = document.getElementById('dd');
var hh = document.getElementById('hh');
var mm = document.getElementById('mm');
var ss = document.getElementById('ss');

 var endDate = '6/17/2024 00:00:00' ;

var x = setInterval(function(){
    var now = new Date(endDate).getTime();
    var countDown = new Date().getTime();
    var distance = now - countDown;

    //time calulation for months,days,hours,minutes,second
    var y = Math.floor(distance / (1000 * 60 * 60 * 24 * 30 * 12));
    var mon = Math.floor(distance / (1000 * 60 * 60 * 24 * 30) % 12);
    var d = Math.floor((distance / (1000 * 60 * 60 * 24)) % 30);
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / (1000)); 


    //output the result in element with id
    years.innerHTML = y + "<br><span>Years</span>";
    months.innerHTML = mon + "<br><span>Months</span>";
    days.innerHTML = d + "<br><span>Days</span>";
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";

    //Animate Stroke
    ye.style.strokeDashoffset = 440 - (440 * y) / 100;
    mo.style.strokeDashoffset = 440 - (440 * mon) / 12;
    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

})