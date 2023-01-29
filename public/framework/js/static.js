
//COOKIES HANDLING
function setCookie(cname,cvalue,seconds) {
  //console.log(cname + cvalue + cduration);
               var now = new Date();
               //var minutes = seconds;
               now.setTime(now.getTime() + (seconds * 1000));
               document.cookie = cname + "=" + cvalue + ";expires=" + now.toUTCString() + ";";
             //  console.log(document.cookie);
             //  console.log(now.toUTCString());
              // document.write ("Setting Cookies : " + "name=" + cvalue );
            }

function getCookie(cname) {
let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
 return; 
 }

//STORAGE
var l, i;
var array = [];
for (i = 0; i < localStorage.length; i++) {
y = localStorage.key(i);
  x = localStorage.getItem(y);
  array.push(x);
}
// console.log(array);

//setItemLocal(key,value,seconds){}

 //QUERY SELECTORS
 function qs(string){
var out = document.querySelector(string);
if(out){
  return out; 
}
 }

 function qsa(string){
  var out = document.querySelectorAll(string);
  if(out){return out;} else {qs(string);}
   }
//WINDOW
/*let wmWindow;
function openWindow(wmWindow,url,attr) {
  if(wmWindow) && (url) && (attr){eval(wmWindow) = window.open(utr, wmWindow, attr);}
  else if(wmWindow && url){eval(wmWindow) = window.open(url, wmWindow, attr);}
  else if(wmWindow){eval(wmWindow) = window.open(); }
  else {window.open();}
}
function closeWindow() {
  if (wmWindow) {
    wmWindow.close();
  }
}
function checkWindow() {
if (!wmWindow) {
  return 'Window not found';
} else {
  if (wmWindow.closed) { 
    return 'Opened';
  } else {
    return 'Closed';
  }
}
}
*/

//FOR LOOP
function forLoop(string,key,value){
  if(string){
var out = string;
if(key && value){
const lth = out.length;
var output = []; 
for (let l = 0; l < lth; l++) {
  //console.log(out[l]);
  out[l].setAttribute(key,value);
  output.push(out[l]);
}
}
}
  return output;
}

function forLoopMax(string,count,key,value){
  if(string && count){
    var out = string;
    if(key && value){
    const lth = out.length;
    var output = []; 
    for (let l = 0; l < count; l++) {
      //console.log(out[l]);
      out[l].setAttribute(key,value);
      output.push(out[l]);
    }
    } else if(string){forLoop(string)} else {var output = null;}
}
return output;
}

function forLoopMin(string,count,key,value){
  if(string && count){
    var out = string;
    if(key && value){
    const lth = out.length;
    var output = []; 
    for (let l = count; l < lth; l++) {
      //console.log(out[l]);
      out[l].setAttribute(key,value);
      output.push(out[l]);
    }
    }else if(string){forLoop(string)} else {var output = null;}
}
return output;
}

function forLoopMinMax(string,count1,count2,key,value){
  if(string && count1 && count2){
    var out = string;
    if(key && value){
    const lth = out.length;
    var output = []; 
    for (let l = count1; l < count2; l++) {
     // console.log(out[l]);
      out[l].setAttribute(key,value);
      output.push(out[l]); 
    }
    }else if(string){forLoop(string)} else {var output = null;}
}
return output;
}

//HEX CONVERSION
function fromHex(hex,str){
  try{
    str = decodeURIComponent(hex.replace(/(..)/g,'%$1'))
  }
  catch(e){
    str = hex
   // console.log('invalid hex input: ' + hex)
  }
  return str
}

function toHex(str,hex){
  try{
    hex = unescape(encodeURIComponent(str))
    .split('').map(function(v){
      return v.charCodeAt(0).toString(16)
    }).join('')
  }
  catch(e){
    hex = str
    //console.log('invalid text input: ' + str)
  }
  return hex
}

//HIDE & SHOW
function identifyElement(string){
 // console.log('ie received');

if(string.startsWith("#") === true){var output = "id";}
else if(string.startsWith(".") === true){var output = "class";}
else if(string.startsWith(".") === true && string.endsWith(")") === true){var output = "classSpecific";}
else if(string.startsWith("[") === true){var output = "data";}
else if(string.startsWith("[") === true && string.endsWith(")") === true){var output = "dataSpecific";}
else if(string.endsWith(")") === true){var output = "tagSpecific";}
else {var output = "tag";}
return output;
}

function showSingle(string){string.style.display = "block";}
function showMultiple(string){for (let i = 0; i < string.length; i++) {string[i].style.display="block";}}
function showSpecific(string,nth){string[(nth - 1)].style.display = "block";}

function hideSingle(string){string.style.display = "none";}
function hideMultiple(string){for (let i = 0; i < string.length; i++) {string[i].style.display="none";}}
function hideSpecific(string,nth){string[(nth - 1)].style.display = "none";}

function removeSingle(string){string.outerHTML = "";}
function removeMultiple(string){for (let i = 0; i < string.length; i++) {string[i].outerHTML = "";}}
function removeSpecific(string,nth){string[(nth - 1)].outerHTML = "";}

function emptySingle(string){string.innerHTML = "";}
function emptyMultiple(string){for (let i = 0; i < string.length; i++) {string[i].innerHTML = "";}}
function emptySpecific(string,nth){string[(nth - 1)].innerHTML = "";}

function resetSingle(string){string.reset();}
function resetMultiple(string){for (let i = 0; i < string.length; i++) {string[i].reset();}}
function resetSpecific(string,nth){string[(nth - 1)].reset();}

function clickSingle(string){string.click();}
function clickMultiple(string){for (let i = 0; i < string.length; i++) {string[i].click();}}
function clickSpecific(string,nth){string[(nth - 1)].click();}

function action(action,string,nth){
 // console.log('show received ' + string);
var element = identifyElement(string);
//console.log(element);
if(element == "id"){var elementSingle = document.getElementById(string.substring(1));}
else if(element == "tag"){var elementMultiple = document.getElementsByTagName(string);}
else if(element == "class"){var elementMultiple = document.getElementsByClassName(string.substring(1));}
else if(element == "data"){if(document.querySelectorAll(string)){var elementMultiple = document.querySelectorAll(string);} else {var elementSingle = document.querySelector(string);}}
else {var elementSingle = element;}

var fnSingle = action + "Single";
var fnSpecific = action + "Specific";
var fnMultiple = action + "Multiple";

if(nth){
if(elementSingle){eval(fnSingle)(elementSingle);}
if(elementMultiple){eval(fnSpecific)(elementMultiple,nth);}
} else {
  if(elementSingle){eval(fnSingle)(elementSingle);}
  if(elementMultiple){eval(fnMultiple)(elementMultiple);}
}
}

function show(string,nth){action("show",string,nth);}
function hide(string,nth){action("hide",string,nth);}
function remove(string,nth){action("remove",string,nth);}
function empty(string,nth){action("empty",string,nth);}
function reset(string,nth){action("reset",string,nth);}
function click(string,nth){action("click",string,nth);}



//TIMEOUT & INTERVALS
/*
function setTimer(from,to,action){
  const timerSecond;
  if(from){
    if(to){
      var timerloop = setInterval(timerstart, 1000);
      function timerstart(){
var ctime = new Date().valueOf();
var diff = ctime - stime;  
if(diff < (ltime * 1000)){
  timerSecond = Math.round(60 - (diff / 1000));
console.log('In timer');
} else {  clearInterval(timerloop); console.log('out timer');}

  if(from > to){

  } else if(from < to){

  }
}
    }
  }

}
*/




//ARRAY