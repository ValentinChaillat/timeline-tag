
function init(){

var div1 = document.getElementById("wrapper1");
var temp1=0;
div1.onclick=function mouvement(){
      if (temp1==0) {
        $('#bloc1').append($('#element1'));
        div1.style.background='#B91C77';
        div1.style.color='#F0F0F0';
        div1.style.boxshadow=('10px 10px');
        temp1=1;
      }
      else {
        $('#bloc2').prepend($('#element1'));
        div1.style.background='#F0F0F0';
        div1.style.color='#B91C77';
        temp1=0;
      }
    }

var div2 = document.getElementById("wrapper2");
var temp2=0;
div2.onclick=function mouvement(){
      if (temp2==0) {
        $('#bloc1').append($('#element2'));
        div2.style.background='#006E77';
        div2.style.color='#F0F0F0';
        temp2=1;
      }
      else {
        $('#bloc2').prepend($('#element2'));
        div2.style.background='#F0F0F0';
        div2.style.color='#006E77';
          temp2=0;
      }
    }

var div3 = document.getElementById("wrapper3");
var temp3=0;
div3.onclick=function mouvement(){
        if (temp3==0) {
          $('#bloc1').append($('#element3'));
          div3.style.background='#B91C77';
          div3.style.color='#F0F0F0';
          temp3=1;
        }
        else {
          $('#bloc2').prepend($('#element3'));
          div3.style.background='#F0F0F0';
          div3.style.color='#B91C77';
          temp3=0;
        }
      }


var div4 = document.getElementById("wrapper4");
var temp4=0;
div4.onclick=function mouvement(){
    if (temp4==0) {
      $('#bloc1').append($('#element4'));
      div4.style.background='#2296DA';
      div4.style.color='#F0F0F0';
      temp4=1;
    }
    else {
      $('#bloc2').prepend($('#element4'));
      div4.style.background='#F0F0F0';
      div4.style.color='#2296DA';
      temp4=0;
    }
  }

var div5 = document.getElementById("wrapper5");
var temp5=0;
div5.onclick=function mouvement(){
    if (temp5==0) {
      $('#bloc1').append($('#element5'));
      div5.style.background='#006E77';
      div5.style.color='#F0F0F0';
      temp5=1;
    }
    else {
      $('#bloc2').prepend($('#element5'));
      div5.style.background='#F0F0F0';
      div5.style.color='#006E77';
      temp5=0;
    }
  }

var div6 = document.getElementById("wrapper6");
var temp6=0;
div6.onclick=function mouvement(){
    if (temp6==0) {
      $('#bloc1').append($('#element6'));
      div6.style.background='#B91C77';
      div6.style.color='#F0F0F0';
      temp6=1;
    }
    else {
      $('#bloc2').prepend($('#element6'));
      div6.style.background='#F0F0F0';
      div6.style.color='#B91C77';
      temp6=0;
    }
  }

var div7 = document.getElementById("wrapper7");
var temp7=0;
div7.onclick=function mouvement(){
    if (temp7==0) {
      $('#bloc1').append($('#element7'));
      div7.style.background='#006E77';
      div7.style.color='#F0F0F0';
      temp7=1;
    }
    else {
      $('#bloc2').prepend($('#element7'));
      div7.style.background='#F0F0F0';
      div7.style.color='#006E77';
      temp7=0;
    }
  }

var div8 = document.getElementById("wrapper8");
var temp8=0;
div8.onclick=function mouvement(){
    if (temp8==0) {
      $('#bloc1').append($('#element8'));
      div8.style.background='#006E77';
      div8.style.color='#F0F0F0';
      temp8=1;
    }
    else {
      $('#bloc2').prepend($('#element8'));
      div8.style.background='#F0F0F0';
      div8.style.color='#006E77';
      temp8=0;
    }
  }

var div9 = document.getElementById("wrapper9");
var temp9=0;
div9.onclick=function mouvement(){
    if (temp9==0) {
      $('#bloc1').append($('#element9'));
      div9.style.background='#006E77';
      div9.style.color='#F0F0F0';
      temp9=1;
    }
    else {
      $('#bloc2').prepend($('#element9'));
      div9.style.background='#F0F0F0';
      div9.style.color='#006E77';
      temp9=0;
    }
  }

var div10 = document.getElementById("wrapper10");
var temp10=0;
div10.onclick=function mouvement(){
    if (temp10==0) {
      $('#bloc1').append($('#element10'));
      div10.style.background='#006E77';
      div10.style.color='#F0F0F0';
      temp10=1;
    }
    else {
      $('#bloc2').prepend($('#element10'));
      div10.style.background='#F0F0F0';
      div10.style.color='#006E77';
      temp10=0;
    }
  }

var div11 = document.getElementById("wrapper11");
var temp11=0;
div11.onclick=function mouvement(){
    if (temp11==0) {
      $('#bloc1').append($('#element11'));
      div11.style.background='#006E77';
      div11.style.color='#F0F0F0';
      temp11=1;
    }
    else {
      $('#bloc2').prepend($('#element11'));
      div11.style.background='#F0F0F0';
      div11.style.color='#006E77';
        temp11=0;
    }
  }
}














//-----------------------------------------------------
// deplacement avec left et top
// var div = document.getElementById("wrapper");
// var temp=0;
// div.onclick=function mouvement(){
//
//
//
// if (temp==0) {
//   div.style.left='100px';
//   div.style.top='100px';
//   temp=1;
// }
// else {
//   div.style.left='200px';
//   div.style.top='200px';
//   temp=0;
// }
// }
