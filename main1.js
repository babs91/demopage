document.getElementById("container").addEventListener('mouseover',function(e){

    e.preventDefault();

     var i = document.getElementById("fmd");
     i.style.display = "block";
     i.style.transitionProperty = "unset";
     i.style.transitionDuration = "3.5s";
     i.style.marginTop = "25px";
     i.style.opacity = 1;

     var j = document.getElementById("see");
     j.style.transitionDuration = "2s";
      j.style.opacity = 0.8;
      j.style.borderRadius = "4%";
     j.style.marginLeft = "28%";
     
     
 });
