function sessionincrement()
{

  if (sessionValue>= 0 ) {
    sessionValue+=1 ;

  }
  sessionobject.innerHTML=sessionValue;
}

function sessiondecriment()
{
  if (sessionValue> 1 ) {
    sessionValue-= 1;

  }
  sessionobject.innerHTML=sessionValue ;
}

function breakincrement()
{

  if (breakValue>= 0 && breakValue < sessionValue-1 ) {
    breakValue+=1 ;

  }
  breakobject.innerHTML=breakValue;
}

function breakdecriment()
{
  if (breakValue> 1 ) {
    breakValue-= 1;

  }
  breakobject.innerHTML=breakValue ;
}
function resetAction()
{   sessionValue=25;
    breakValue=5;
    breakobject.innerHTML=breakValue;
    sessionobject.innerHTML=sessionValue ;
    displayTimeObject.innerHTML="25:00";
    playContinue=0;
    totalseg=1500;
    totalbreakseg=300;
    firstTimetotalseg=0;
    firstTimetotalbreakseg=0;
    displayTimeObject.setAttribute('style', 'font-color=: white');
    sessionTime=1;
    displaySessionObject.innerHTML="Session";


}

function playAction()
{
  playContinue=1;
  if (pauseActive==0 )
  {
    breakValue=Number(breakobject.innerHTML);
    sessionValue=Number(sessionobject.innerHTML) ;
      totalseg=sessionValue*60;
      totalbreakseg=breakValue*60;

  }else {
    pauseActive=0;
  }


}


function stopAction()

{
  playContinue=2;

  breakValue=Number(breakobject.innerHTML);
  sessionValue=Number(sessionobject.innerHTML) ;
  totalseg=sessionValue*60;
  totalbreakseg=breakValue*60;

  let min=0.00;
  let stringmin="";

    min=sessionValue;

      stringmin=min.toString();




  let seg= totalseg%60;
  if (stringmin.length  == 1 ) {stringmin="0"+stringmin;}
  stringseg=seg.toString();
  if (stringseg.length  == 1 ) {stringseg="0"+stringseg;}
  displayTimeObject.innerHTML= stringmin +":"+stringseg;

      playContinue=0;

      firstTimetotalseg=0;
      firstTimetotalbreakseg=0;
      displayTimeObject.setAttribute('style', 'font-color=: white');
      sessionTime=1;
      displaySessionObject.innerHTML="Session";

}

function pauseAction()
{

  playContinue=3;
  pauseActive=1;
}

function decrement()
{

  if (totalseg >0)
  {

      totalseg-=1;
      let min=0.00;
      let stringmin="";
      if (totalseg ==0) {min="0";}
        else {min =totalseg / 60;
          stringmin=min.toString();
          min=stringmin.slice(0,stringmin.indexOf("."));}


      stringmin=min;
      let seg= totalseg%60;
      if (stringmin.length  == 1 ) {stringmin="0"+stringmin;}
      stringseg=seg.toString();
      if (stringseg.length  == 1 ) {stringseg="0"+stringseg;}
      displayTimeObject.innerHTML= stringmin +":"+stringseg;
  }
  else if (totalbreakseg >0 ){
    sessionTime=0;
    displaySessionObject.innerHTML="Break";
    displayTimeObject.setAttribute('style', 'font-color=: white');
    totalbreakseg-=1;
    let min=0.00;
    let stringmin="";

    if (totalbreakseg ==0) {min="0";}
      else {min =totalbreakseg / 60;
        stringmin=min.toString();
        min=stringmin.slice(0,stringmin.indexOf("."));
      }

    stringmin=min.toString();

    stringmin=min;
    let seg= totalbreakseg%60;
    if (stringmin.length  == 1 ) {stringmin="0"+stringmin;}
    stringseg=seg.toString();
    if (stringseg.length  == 1 ) {stringseg="0"+stringseg;}

    displayTimeObject.innerHTML= stringmin +":"+stringseg;
  }

if (totalseg >=6 && totalseg <= 15 && sessionTime==1){
  displayTimeObject.setAttribute('style', 'color: yellow'  );}
if (totalseg >=0 && totalseg <= 6 && sessionTime==1){
    displayTimeObject.setAttribute('style', 'color: red'  );}

if (totalbreakseg >=6 && totalbreakseg <= 15 &&sessionTime==0){
      displayTimeObject.setAttribute('style', 'color: yellow'  );}
if (firstTimetotalbreakseg >=0 && totalbreakseg <= 6 && sessionTime ==0){
        displayTimeObject.setAttribute('style', 'color: red'  );}

if (totalseg==0 && firstTimetotalseg==0 && sessionTime ==1) {x.play(); firstTimetotalseg=1;}
if (totalbreakseg==0 && firstTimetotalbreakseg==0 && sessionTime==0 ) {x.play(); firstTimetotalbreakseg=1;

if (totalseg==0 && totalbreakseg==0 && sessionTime==0 && firstTimetotalseg==1 && firstTimetotalbreakseg==1)
      {
          stopAction();
          playContinue=1;
        }

}
return 1;
}

function central()
{

switch (playContinue) {
//play
  case 1 :
      let cariable=decrement();
    break;
//stop
    case 2 :

      break;
//pause
      case 3:

// no begin
        case 0:

        break;

  default:

}

}
//MAIN

let windowWidth=screen.width;
let sessionValue=25;
let sessionTime=1;
let breakValue=5;
let totalseg=1500;
let totalbreakseg=300;
let playContinue=0;
let pauseActive=0;
let firstTimetotalseg=0;
let firstTimetotalbreakseg=0;

let displayText="";
let liveOperators =0;
let lastOperation="";
let currentOperation="";
let reciveNumbers=0;
let size=12;


const container = document.querySelector('#container');
//console.log(screen.width);
container.setAttribute('style', 'display:block ; background: rgba(182, 231,224, 0.9) ; border: 5px solid #2f2c2b ; margin:0 auto; width:' + windowWidth/3 +'px; text-align:center; box-shadow: 5px 10px #98C2DD;'  );
//console.log(container);

const sessionUpobject = document.querySelector('.sessionUp');
sessionUpobject.addEventListener('click',sessionincrement);

const sessionDownobject = document.querySelector('.sessionDown');
sessionDownobject.addEventListener('click',sessiondecriment);

const sessionobject = document.querySelector('.session');


const breakobject = document.querySelector('.break');

const breakUpobject = document.querySelector('.breakUp');
breakUpobject.addEventListener('click',breakincrement);

const breakDownobject = document.querySelector('.breakDown');
breakDownobject.addEventListener('click',breakdecriment);

const resetObject = document.querySelector('.reset');
resetObject.addEventListener('click',resetAction);

const playObject = document.querySelector('.play');
playObject.addEventListener('click',playAction);


const stopObject = document.querySelector('.stop');
stopObject.addEventListener('click',stopAction);

const pauseObject = document.querySelector('.pause');
pauseObject.addEventListener('click',pauseAction);

const displayTimeObject = document.querySelector('.displayTime');
const displaySessionObject=document.querySelector('.displaySession');

var myVar = setInterval(central, 1000);

var x = document.getElementById("myAudio");
