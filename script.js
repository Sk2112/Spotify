let songIndex = 1;
let masterPlay = document.getElementById('masterPlay');
let seek = document.getElementById('seek');
let audioElement = new Audio('1.mp3');
let gif = document.getElementById('gif')
let songs = Array.from(document.getElementsByClassName('songs'));
let songItemPlay = Array.from(document.getElementsByClassName('one'));
let next = document.getElementById('next');
let previous = document.getElementById('previous');

let songItem = [
  {songName:"warrior mortal" , filePath:"1.mp3" , coverPath:"1.jpg"}, 
  
  {songName:"ceilo huma-huma" , filePath:"2.mp3" , coverPath:"2.jpg"} ,
  
  {songName:"Deaf-kev Invincible" , filePath:"3.mp3" , coverPath:"3.jpg"},
  
  {songName:"Black Swan" , filePath:"4.mp3" , coverPath:"4.jpg"},

  {songName:"Kesariya" , filePath:"5.mp3" , coverPath:"5.jpg"},

  {songName:"     level" , filePath:"6.mp3" , coverPath:"6.jpg"},

  {songName:"Har Har Shambhu" , filePath:"7.mp3" , coverPath:"7.jpg"},

  {songName:"LIke Crazy" , filePath:"8.mp3" , coverPath:"8.jpg"},
  ]
  

songs.forEach((element, i)=>{
  
 element.getElementsByTagName("img")[0].src = songItem[i].coverPath;
 element.getElementsByClassName("songName")[0].innerText = songItem[i].songName;
})

  
masterPlay.addEventListener('click',()=>{
  
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
    gif.style.opacity = 1;
  }
  else{
   audioElement.pause();
   masterPlay.classList.remove('fa-pause-circle');
   masterPlay.classList.add('fa-play-circle'); 
   makeAllPlay();
   gif.style.opacity = 0;
  }
})


audioElement.addEventListener('timeupdate',()=>{
  
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  seek.value = progress;
})

seek.addEventListener('change',()=>{
  
audioElement.currentTime = ((seek.value * audioElement.duration)/100);  
})


const makeAllPlay = () =>{
  songItemPlay.forEach((element)=>{
   
   element.classList.remove('fa-pause-circle');
   element.classList.add('fa-play-circle');
  })
}

songItemPlay.forEach((element)=>{
  
  element.addEventListener('click',(e)=>{
  
   

   
   songIndex = parseInt(e.target.id);
   
   if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.src = (`${songIndex}.mp3`);
    makeAllPlay();
   e.target.classList.remove('fa-play-circle');
   e.target.classList.add('fa-pause-circle');
   
   
   audioElement.currentTime = 0;
   audioElement.play();
   
   gif.style.opacity=1;
   
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');}
   else{
     
    audioElement.src = (`${songIndex}.mp3`);
    
    e.target.classList.remove('fa-pause-circle');
    e.target.classList.add('fa-play-circle');
    
    
    audioElement.currentTime = 0;
    audioElement.pause();
    
    gif.style.opacity = 1;
    
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle'); 
   }
  })
})

next.addEventListener('click',()=>{
  
  if(songIndex>=8){
    songIndex=1;
  }
  else{
    songIndex+=1;
  }
  audioElement.src = (`${songIndex}.mp3`);
  audioElement.currentTime = 0;
  audioElement.play();
  
  gif.style.opacity = 1;
  
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  
})


previous.addEventListener('click', () => {

  if (songIndex <= 1) {
    songIndex = 8;
  }
  else {
    songIndex -= 1;
  }
  audioElement.src = (`${songIndex}.mp3`);
  audioElement.currentTime = 0;
  audioElement.play();

  gif.style.opacity = 1;

  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})