function hitung(){

let input=parseFloat(document.getElementById("inputLaser").value);

if(isNaN(input)){
alert("Masukkan Input Laser");
return;
}

let ratio=document.getElementById("splitterRatio").value;
let plc=parseFloat(document.getElementById("splitterPLC").value);

let data=ratio.split("_");

let lossRatioPlc=parseFloat(data[0]);
let lossRatio=parseFloat(data[1]);

let output=input-(lossRatioPlc+plc);

let next=input-lossRatio;

document.getElementById("outputLaser").value=output.toFixed(2);

document.getElementById("nextODP").value=next.toFixed(2);

}

function resetForm(){

document.getElementById("inputLaser").value="";
document.getElementById("splitterRatio").selectedIndex=0;
document.getElementById("splitterPLC").selectedIndex=0;
document.getElementById("outputLaser").value="";
document.getElementById("nextODP").value="";

}