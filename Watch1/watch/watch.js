let hr=document.getElementById('hr');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
setInterval(function(){
    let current=new Date();
    hr.innerHTML=(current.getHours()+0<10?"0":"")+current.getHours();
    min.innerHTML=(current.getMinutes()+0<10?"0":"")+current.getMinutes();
    sec.innerHTML=(current.getSeconds()+0<10?"0":"")+current.getSeconds()
})