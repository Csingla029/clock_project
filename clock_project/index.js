function clock(){
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("am");

    var time = new Date();
    var a = time.getHours();
    var b=time.getMinutes();
    var c = time.getSeconds();
    // console.log(a + " "+b+ " "+c);
    
    
    if(a>=12 && a<=23) 
    {
        am.textContent="PM";
    }  
    else
    {
        am.textContent="AM";
    }
    if(a>12 && a<=23)
    {
        a=a-12;
    }
    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
}
setInterval(clock,1000);

function settime()
{
    var i = document.getElementById("wakeuptime").value;
    var hourr=new Date().getHours();
    if(i==hourr){
        document.getElementById("imgg").style.backgroundImage="url('images/wake.jpg')";
        document.getElementById("imgg").textContent="Lets Have Some Breakfast";
        document.getElementById("imgg").style.color = "Black";
        document.getElementById("tdec").style.visibility="visible";
        document.getElementById("tdec").style.color="red";
    }
    var j = document.getElementById("lunchtime").value;
    var hourr=new Date().getHours();
    if(j==hourr){
        document.getElementById("imgg").style.backgroundImage="url('images/lunch_image.png')";
        document.getElementById("imgg").textContent="Lets Have Some Lunch";
        document.getElementById("tdec").style.visibility="visible";
        document.getElementById("tdec").textContent="Good Afternoon!!";
        document.getElementById("tdec").style.color="red";
        // document.getElementById("imgg").style.color = "Black";
    
    }
    var l = document.getElementById("naptime").value;
    var hourr=new Date().getHours();
    if(l==hourr){
        document.getElementById("imgg").style.backgroundImage="url('images/lunch_image.png')";
        document.getElementById("imgg").textContent="Lets Have Some Sleep";
        document.getElementById("tdec").style.visibility="visible";
        document.getElementById("tdec").textContent="Good Night!!";
        // document.getElementById("imgg").style.color = "Black";
        document.getElementById("tdec").style.color="red";
    
    }

}