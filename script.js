let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
setInterval(() => {
    const obj=new Date();
    
hrs.innerHTML=(obj.getHours()<10?"0":"")+obj.getHours();
min.innerHTML=(obj.getMinutes()<10?"0":" ")+obj.getMinutes();
sec.innerHTML=(obj.getSeconds()<10?"0":" ")+obj.getSeconds();

}, 1000);
