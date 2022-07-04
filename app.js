let winAudio = new Audio ('./win.mp3');
let nearFailAudio = new Audio ('./nearFail.mp3');
let failAudio = new Audio ('./win.mp3');
var count = 0;

let secretNember = Math.trunc(Math.random()* 20)+1;
console.log(secretNember);
 const checkBtn = document.querySelector('.check')
checkBtn.addEventListener('click',function() {
    count++; 
const guessNumber =Number( document.querySelector('.guess').value);
if(!guessNumber) {
    document.querySelector('.message').textContent='⛔No Number!';
} else if(guessNumber !== secretNember) {
    document.querySelector('.message').textContent = guessNumber > secretNember ? 'Too Hight' : 'Too Low';
    document.querySelector(".guess").value='';

    if(count === 4) {
        nearFailAudio.play();
    } else if(count === 5) {
        failAudio.play();
        document.querySelector('.message').innerHTML = '<h4>No attemp left, Try again!😭</h4>'
        checkBtn.disabled = true;
        checkBtn.style.bacckgroundColor ="rgba(220, 220, 220, 0.677)"
    } 
}

 else if (count === 5 && guessNumber === secretNember) {
    winAudio.play();
    document.querySelector('.message').textContent = '🎉correct Number';
    document.querySelector('.number').textContent = secretNember;
    document.querySelector('body').style.backgroundColor ='green';
    document.querySelector('.number').style.width = '15rem';
    checkBtn.style.bacckgroundColor ="rgba(220, 220,220, 0.677)"
    checkBtn.disabled = true;
}
else if (guessNumber === secretNember) {
    winAudio.play();
    document.querySelector('.message').textContent = '🎉correct Number';
    document.querySelector('.number').textContent = secretNember;
    document.querySelector('body').style.backgroundColor ='green';
    document.querySelector('.number').style.width = '15rem';
    checkBtn.style.bacckgroundColor ="rgba(220, 220,220, 0.677)"
    checkBtn.disabled = true;

}


})
let btnagin =document.querySelector('.again');
btnagin.addEventListener('click',()=>{
    count =0;
    secretNember = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent ='?';
    document.querySelector('.message').textContent ='Start guess';
    btnagin.disabled =false;
    document.querySelector('body').style.backgroundColor ='#f0db4f';
    checkBtn.style.bacckgroundColor ='#388697';
    document.querySelector('.number').style.width ='10rem';
    document.querySelector('.lets-paly').textContent ='lets play😀';
    document.querySelector('.guess').value = "";


})