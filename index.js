function addition() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var d = parseInt(document.getElementById("d").value);
    if (isNaN(a) == true) a = 0;
    if (isNaN(b) == true) b = 0;
    if (isNaN(d) == true) d = 0;

    var c = a + b + d;
    summ = c; 
    document.getElementById("result").innerHTML = c;
  }
  function percent(number){
    var percent="30";
    var number= summ;
    var number_percent=number/100*percent;
    var x = Number(number) - Number(number_percent);
    document.getElementById("finalresult").innerHTML = x;
  }