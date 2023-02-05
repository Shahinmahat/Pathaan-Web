function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

 function toggle(){
  var trailer = document.querySelector('.trailer')
  var video = document.querySelector('.video')
  trailer.classList.toggle('active')
  video.currentTime = 0;
  video.pause();
 }