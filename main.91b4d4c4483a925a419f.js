(()=>{"use strict";var t=document.querySelector("img"),e=document.getElementById("title"),n=document.getElementById("artist"),a=document.querySelector("audio"),c=document.getElementById("prev"),i=document.getElementById("play"),o=document.getElementById("next"),r=document.getElementById("progress-container"),s=document.getElementById("progress"),d=document.getElementById("current-time"),l=document.getElementById("duration"),m=[{name:"track-01",displayName:"Love is all around",artist:"Wet Wet Wet"},{name:"track-02",displayName:"When You Say Nothing At All",artist:"Ronan Keating"},{name:"track-03",displayName:"Open Arms",artist:"Journey"},{name:"track-04",displayName:"Torn",artist:"Natalie Imbruglia"}],u=!1;function y(){u=!0,i.classList.replace("fa-play","fa-pause"),i.setAttribute("title","Pause"),a.play()}function p(c){console.log(c),e.textContent=c.displayName,n.textContent=c.artist,a.src="./assets/music/".concat(c.name,".mp3"),t.src="./assets/images/".concat(c.name,".jpg")}i.addEventListener("click",(function(){return u?(u=!1,i.classList.replace("fa-pause","fa-play"),i.setAttribute("title","Play"),void a.pause()):y()}));var g=0;function f(){++g>m.length-1&&(g=0),p(m[g]),y()}p(m[g]),c.addEventListener("click",(function(){--g<0&&(g=m.length-1),p(m[g]),y()})),o.addEventListener("click",f),a.addEventListener("timeupdate",(function(t){if(u){var e=this.duration,n=this.currentTime;if(e){var a=n/e*100;s.style.width="".concat(a,"%");var c=Math.floor(e/60),i=Math.floor(e%60);i<10&&(i="0".concat(i)),l.textContent="".concat(c,":").concat(i)}var o=Math.floor(n/60),r=Math.floor(n%60);r<10&&(r="0".concat(r)),d.textContent="".concat(o,":").concat(r)}})),a.addEventListener("ended",f),r.addEventListener("click",(function(t){var e=this.clientWidth,n=t.offsetX,c=a.duration;a.currentTime=n/e*c}))})();