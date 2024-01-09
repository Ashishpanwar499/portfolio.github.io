const circle=document.querySelectorAll('.circle');
circle.forEach(elem=>{
    var dots =elem.getAttribute("data-dots");
    var marked=elem.getAttribute("data-percent");
    var percent=math.floor(dots*marked/100);
    var points="";
    var rotate=360/dots;

    for(let i=0;i<dots;i++){
        points+=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    elem.innerHTML=points;
})
