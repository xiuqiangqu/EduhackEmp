function calcage(secs, num1, num2) {
    s = ((Math.floor(secs / num1)) % num2).toString();
    if (LeadingZero && s.length < 2)
        s = "0" + s;
    return "<b>" + s + "</b>";
}

function CountBack(secs) {
    if (secs < 0) {
        document.getElementById("cntdwn").innerHTML = FinishMessage;
        // document.getElementById("mainButton").hidden = false;
        youDidIt();

        let x = "timetracker_" + StartTime.toString() + "=" + EndTime.toString();

        document.cookie = x

        return;
    }
    DisplayStr = DisplayFormat.replace(/%%D%%/g, calcage(secs, 86400, 100000));
    DisplayStr = DisplayStr.replace(/%%H%%/g, calcage(secs, 3600, 24));
    DisplayStr = DisplayStr.replace(/%%M%%/g, calcage(secs, 60, 60));
    DisplayStr = DisplayStr.replace(/%%S%%/g, calcage(secs, 1, 60));

    document.getElementById("cntdwn").innerHTML = DisplayStr;
    if (CountActive)
        setTimeout("CountBack(" + (secs + CountStepper) + ")", SetTimeOutPeriod);
}
function youDidIt(){
    var x = document.createElement("IMG");
    x.setAttribute("src","youdidit.jpg");
    x.setAttribute("width","100");
    x.setAttribute("height","100");
    x.setAttribute("alt","You Did It!!!");
    document.body.appendChild(x);
}
function putspan(backcolor, forecolor) {
    document.write("<span id='cntdwn' style='background-color:" + backcolor +
        "; color:" + forecolor + "'></span>");
}

function countdown2() {


    var dthen = new Date(TargetDate);
    var dnow = new Date();
    if (CountStepper > 0)
        ddiff = new Date(dnow - dthen);
    else
        ddiff = new Date(dthen - dnow);
    gsecs = Math.floor(ddiff.valueOf() / 1000);
    document.getElementById("cntdwn").hidden=false;
    CountBack(gsecs);
}



let StartTime = new Date().getTime();
let EndTime = StartTime;
BackColor = "#ffffff";
ForeColor = "#c00040";
CountActive = true;
CountStepper = -1;
LeadingZero = true;
DisplayFormat = "%%H%% Hours, %%M%% Minutes, %%S%% Seconds.";
FinishMessage = "timer is done";

CountStepper = Math.ceil(CountStepper);
if (CountStepper == 0)
    CountActive = false;
var SetTimeOutPeriod = (Math.abs(CountStepper) - 1) * 1000 + 990;

function StartSession() {
    let TimerInString = document.getElementById("timeSelector").value;
    let Timer = parseFloat(TimerInString);
    StartTime = new Date().getTime();
    EndTime = StartTime + Timer * 60000;
    TargetDate = new Date().setTime(EndTime);
    
    document.getElementById("StartSessionButton").hidden=true

 countdown2();
    
}