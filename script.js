var data = {
     title : [
        "Another_Love",
        "Attention",
        "Call-Out-My-Name",
        "heart",
        "HOVO",
        "Heat_Waves",
        "axjikner",
        "eliesudu",
        "paro",
        "smoke_break",
        "We-Don't-Talk-Anymore",
        "miyagi",
        "turTever",
        "123"
     ],

     song : [
        "music/Another_Love.mp3",
        "music/Attention.mp3",
        "music/Call-Out-My-Name.mp3",
        "music/heart.mp3",
        "music/HOVO",
        "music/Heat_Waves.mp3",
        "music/axjikner.mp3",
        "music/eliesudu.mp3",
        "music/paro.mp3",
        "music/smoke_break.mp3",
        "music/song1.mp3",
        "music/miyagi.mp3",
        "music/turTever.mp3",
        "music/123"
     ],

     poster : [
        "images/bc5743245f004c7ea45cd8a71991c661.gif",
        "images/cc0ed34dd09adf414a19a69b460804f4.gif",
        "https://i.pinimg.com/736x/64/01/c1/6401c1d51715e07df0918410f0825978.jpg", 
        "https://c.tenor.com/HJvqN2i4Zs4AAAAj/milk-and-mocha-cute.gif",
        "https://www.icegif.com/wp-content/uploads/2022/01/icegif-209.gif",
        "https://i.pinimg.com/originals/94/7f/79/947f79bf19270e8b8783bfc98f327140.gif",
        "https://38.media.tumblr.com/8cd0b60ef2fe29d3c951e2434ac34954/tumblr_n9l2xnMSi81sjwwzso1_500.gif",
        "https://phoneky.co.uk/thumbs/screensavers/down/abstract/sound_2wxtiyj1.gif",
        "https://img.wattpad.com/c465c4c9dc6df51e04fc60e8db465998a72baa78/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7a6b396e346f4c6c3873357a54673d3d2d3732353437353339332e313631303665313661646637353031333939313635323836393934372e676966",
        "https://i.pinimg.com/originals/a5/6f/c9/a56fc90a5ed23e3047aa9cc902750b54.gif",
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://gifsoutloud.com/wp-content/uploads/2020/12/source.gif",
        "https://i.pinimg.com/originals/2f/20/9a/2f209ab995102ea9dfb4fe40816b72ee.gif",
        "https://i.pinimg.com/originals/71/21/29/712129d48c17029cfd2bd99bf6a4ee10.gif"
        
      ]
}

var song = new Audio()
var currentSong = 0;
console.log(song);


window.onload = function () {
   playSong()
}

function playSong() {
   song.src = data.song[currentSong]; 
   let songTitle = document.getElementById("songTitle");
   songTitle.textContent = data.title[currentSong];
   let img = document.getElementById("row1");
   img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
   let main = document.getElementById("main")
   main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
   song.play();
}



function playOrPauseSong() {
let play = document.getElementById("play");


if (song.paused) {
    song.play();
    play.src = "images/pause.png" //pause
} else {
    song.pause();
    play.src = "images/play-button-arrowhead.png" //play
}

}



song.addEventListener("timeupdate", function (){
      console.log(song.currentTime);
      console.log(song.duration);

let fill = document.getElementById("fill")

let position = song.currentTime / song.duration;
fill.style.width = position * 100 + "%";

convertTime(song.currentTime)


if (song.ended) {
next()
}

}) 


function convertTime(seconds){

   let currentTime = document.getElementById("currentTime");

   let min = Math.floor(seconds / 60)
   let sec = Math.floor(seconds % 60)

   min = (min < 10) ? "0" + min : min;
   sec = (sec < 10) ? "0" +sec : sec;


   currentTime.textContent = min + ":" + sec;
   totalTime(Math.round(song.duration))
   
   }

   function totalTime (seconds){
      var min = Math.floor(seconds / 60)
      var sec = Math.floor(seconds % 60)
   
      min = (min < 10) ? "0" + min : min;
      sec = (sec < 10) ? "0" +sec : sec;

      if(isNaN(min) ||  isNaN(sec)){
         return false
      }else{
         currentTime.textContent += " / " + min + " : " + sec

      }

   }

function next () {
   currentSong++;
   console.log(currentSong);
   if (currentSong == data.song.length) {
      currentSong = 0
   }

   playSong();
   play.src = "images/pause.png"
}

function pre() {
   currentSong--;

   if (currentSong < 0) {
      currentSong = data.song.length - 1;
      
   }
   playSong();
   play.src = "images/pause.png"
}

function muted () {
   let mute = document.getElementById("mute");
   //console.log(mute);

   if (song.muted) {
      song.muted = false
      mute.src = "images/volume.png"
   }else{
      song.muted = true
      mute.src = "images/volume-mute.png"
   }
}

function decrease () {
   song.volume -= 0.2
}

function increase() {
   song.volume += 0.2
}