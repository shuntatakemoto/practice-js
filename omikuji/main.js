'use strict';

{
  const btn = document.getElementById('btn');
  btn.addEventListener('click',()=>{
    const n = Math.random();
    if(n<0.1){
      btn.textContent="大吉"; //10%
    }else if(n<0.3){
      btn.textContent="吉"; //20%
    }else if(n<0.6){
      btn.textContent="中吉"; //30%
    }else if(n<0.9){
      btn.textContent="末吉"; //30%
    }else{
      btn.textContent="凶"; //10%
    }
  });
}