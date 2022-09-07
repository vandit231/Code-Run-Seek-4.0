setInterval(()=>{
    const dueTime=new Date("September 30, 2022 00:00:00").getTime();
    let days=document.getElementById('days');
    let hours=document.getElementById('hours');
    let minutes=document.getElementById('minutes')
    let seconds=document.getElementById('seconds')
    var currentTime =new Date().getTime();
    var timeRemaining = dueTime - currentTime ;
    console.log(timeRemaining);
    var d = Math.floor(timeRemaining/(86400000));
    var h = Math.floor((timeRemaining%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var m = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    let dd=document.getElementById('dd');
    let hh=document.getElementById('hh');
    let mm=document.getElementById('mm');
    let ss=document.getElementById('ss');
    days.innerHTML=d;
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    dd.style.strokeDashoffset=440-(440*d)/24;
    hh.style.strokeDashoffset=440-(440*h)/24;
    mm.style.strokeDashoffset=440-(440*m)/60;
    ss.style.strokeDashoffset=440-(440*s)/60;

})