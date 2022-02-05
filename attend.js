function showName () {
  let x = "Nurassyl Berik";

  document.getElementById('name').innerHTML = x;
}

function showTime () {
  var t = new Date();
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = days[t.getDay()];
  const m12 = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  let m = m12[t.getMonth()];

  document.getElementById('year').innerHTML = t.getFullYear();
  document.getElementById("today").innerHTML = day;
  document.getElementById('date').innerHTML = t.getDate();
  document.getElementById("month").innerHTML = m;
  document.getElementById('time').innerHTML = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
}

 function timeLeft() {
    var graduation =new Date(2024, 5, 18); //Month is 0-11 in JavaScript
    today=new Date();
//Get 1 day in milliseconds
    var one_day=1000*60*60*24;
//Calculate difference btw the two dates, and convert to days
  document.getElementById('left').innerHTML = (Math.ceil((graduation.getTime()-today.getTime())/(one_day))+
  " days left until the freedom!");
  }


  function multiply()
  {
          n1 = document.getElementById("n1").value;
          n2 = document.getElementById("n2").value;
          document.getElementById("result").innerHTML = n1 * n2;
  }

  function divide()
  {
          n1 = document.getElementById("n1").value;
          n2 = document.getElementById("n2").value;
  document.getElementById("result").innerHTML = n1 / n2;
  }
