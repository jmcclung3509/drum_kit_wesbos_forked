

function playSound(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
key.classList.add("playing")
console.log(audio)
if (!audio) {
    return
}else{
    audio.currentTime = 0;
    audio.play()
}
};
// window.addEventListener('keyup', function(e){
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     key.classList.remove("playing")
// })

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove("playing")
}

window.addEventListener('keydown', playSound)
const keys = document.querySelectorAll(".key")
keys.forEach(key=> key.addEventListener('transitionend', removeTransition))