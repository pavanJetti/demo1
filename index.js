function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="AM";
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fullTime=`${hh}:${mm} ${am_pm}`
    document.getElementById("time").innerHTML=fullTime;
    if(mo==0)
    {
        mo="january"
    }
   else if(mo==1)
    {
        mo="feb"
    }
    else if(mo==2)
    {
        mo="mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="JUN"
    }
    else if(m0==6)
    {
        mo="Jul"
    }
    else if(m0==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else
    {
        mo="Dec"
    }
    var fullDate=`${dd}/${mo}/${yy}`
    document.getElementById("Date").innerHTML=fullDate;
    switch(day)
    {
        case 0:
            day="sunday";
            document.body.style.backgroundImage="url(0.jpeg)"
            break;
        case 1:
            day="monday";
            document.body.style.backgroundImage="url(1.jpeg)"
            break;
            case 2:
                day="tuesday";
                document.body.style.backgroundImage="url(2.jpeg)"
                break;
                case 3:
                    day="wednesday";
                    document.body.style.backgroundImage="url(3.jpeg)"
                    break;
                    case 4:
                        day="thursday";
                        document.body.style.backgroundImage="url(4.jpeg)"
                        break;
                        case 5:
                            day="friday";
                            document.body.style.backgroundImage="url(5.jpeg)"
                            break;
                            case 6:
                                day="saturday";
                                document.body.style.backgroundImage="url(6.jpeg)"
                                break;
    }
    document.getElementById("Day").innerHTML=day;
    document.getElementById("sec").innerHTML=ss;
    var updateTheTime=setTimeout(clock,1000);

}
function greet()
{
    var date=new Date();
    var hh=date.getHours();
    if(hh>=6 && hh<=12)
    {
        document.getElementById("GreetMessage").innerHTML="Good Morning";
        document.getElementById("bgVid").src="sunrise-7127.mp4";
    }
    else if(hh>12 && hh<=15)
    {
        document.getElementById("GreetMessage").innerHTML="good Afternoon ";
        document.getElementById("bgVid").src="clouds-44745.mp4";
        document.getElementById("bgVid").style.width="100%";
        document.getElementById("bgVid").style.height="-100px";
    }
    else if(hh>15 && hh<=20)
    {
        document.getElementById("GreetMessage").innerHTML="good Evening ";
        document.getElementById("bgVid").src="sunset-10737.mp4";
        document.getElementById("bgVid").style.width="100%";
        document.getElementById("bgVid").style.height="-100px";
    }
    else
    {
        document.getElementById("GreetMessage").innerHTML="good Night ";
        document.getElementById("bgVid").src="night-sky-31569.mp4";
        document.getElementById("bgVid").style.width="100%";
        document.getElementById("bgVid").style.height="-100px";
    }
}
greet()

function closeWid()
{
    document.getElementById("greet").style.display="none";
}
var a=setTimeout(closeWid,5000);