let time = 8000; // Пауза між кадрами (мілісек)
let speed = 4;  // скорость листання (сек)
let slider = document.getElementsByClassName('Slider')[0];
let allSlides = document.getElementsByClassName('Slider')[0].childNodes;
let allSlidesLength = allSlides.length-1; // Кількість слайдів
let numberNextSlide = 1;  // Номер наступного слайда
let numberBackSlide = 1; // Номер основного? слайда // 2
let zIndex = 8; 
let setI = setInterval(() => {next();}, time);
allSlides[0].style.zIndex = zIndex-1;

for (let i = 0; i < allSlidesLength; i++) {
	// allSlides[i].className = `slide slide${i+1}`;
	allSlides[i].classList.add(`slide${i+1}`);
	allSlides[i].classList.add(`slide`);
	let buttonNamber = document.createElement(`div`);
		buttonNamber.classList.add(`buttonNamber`);
		buttonNamber.style.background = `url("${i+1}.jpg") `;
		// buttonNamber.style.backgroundSize = `100% 100%`;
		buttonNamber.setAttribute(`onclick`, `verification(${i+1})`);
    document.getElementsByClassName(`wrapButtonNamber`)[0].appendChild(buttonNamber);
    // Закоменtить в PUG
};
let virtualSlideNext = document.getElementsByClassName(`slide${numberNextSlide}`)[0];
let virtualSlideBack = document.getElementsByClassName(`slide${numberBackSlide}`)[0]; 

function verification(nNSU) {
	if (numberNextSlide == nNSU) {	
		clearIntervalMini();	
	} else { 
		if (numberNextSlide < nNSU) {
			next(nNSU); 
			clearIntervalMini();
		} else {
			clearIntervalMini();
			if (nNSU == undefined) {
				numberNextSlide--;
				if (numberNextSlide==0) {numberNextSlide=allSlidesLength};
			} else {
				numberNextSlide = nNSU;
				if (numberNextSlide==0) {numberNextSlide=allSlidesLength};
			};	
			virtualSlideBack = virtualSlideNext;
			beforeGo('-');
		};
    };
};

function next(nNSU) {
	clearIntervalMini();
	if (nNSU) {
		numberNextSlide=nNSU;
		virtualSlideBack = virtualSlideNext;
	} else {
		numberNextSlide++;
		numberBackSlide = numberNextSlide-1;
		if (numberBackSlide == 0) {numberBackSlide = allSlidesLength};
		if (numberNextSlide > allSlidesLength){numberNextSlide = 1};
		virtualSlideBack = document.getElementsByClassName(`slide${numberBackSlide}`)[0]; 
	};
    beforeGo(''); }; 

function beforeGo(e) {
	virtualSlideNext = document.getElementsByClassName(`slide${numberNextSlide}`)[0];
	autoHover(numberNextSlide-1);
	if (virtualSlideBack == null) {virtualSlideBack = document.getElementsByClassName(`slide${1}`)[0]};
	virtualSlideNext.style.cssText=`transition: left 0s;left: ${e}100%;z-index: ${zIndex}`;
    virtualSlideBack.style.cssText=`transition: left 0s;left: 0%;z-index: ${zIndex}`;
	zIndex++;
	setTimeout(() => {
		virtualSlideNext.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
        virtualSlideNext.style.left = "0%";
		virtualSlideBack.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
        if (e == '') {virtualSlideBack.style.left = '-100%';} else {virtualSlideBack.style.left = '100%';};
    }, 88);
};


function clearIntervalMini() {
	clearInterval(setI);
	setI = setInterval(() => {
		next();
	}, time);
    setI;	
};
function pause() {
	clearInterval(setI);
}

function autoHover(namber){
	for (let i = 0; i < allSlidesLength; i++) {
        allSlides[i].style.border = '2px rgba(222, 0, 0, 0.9) solid';	
        allSlides[i].style.boxShadow = 'inset 0 0 2em rgba(222, 0, 0, 0.9)';	
    };
    allSlides[namber].style.boxShadow = `inset 0 0 1em rgba(256, 256, 256, 0.3),  0em 0em 2em rgba(0, 0, 0, 1)`;
};
autoHover(numberBackSlide-1);

function fullScreen() {
	slider.mozRequestFullScreen();
		if (slider.mozRequestFullScreen()) {} else {document.mozCancelFullScreen()}
	slider.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		if (slider.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)) {} else {document.webkitCancelFullScreen()}
};
document.addEventListener('keydown', function(event) {
    if (event.keyCode==39) {nextAuto()};
    if (event.keyCode==37) {fS1()};
    if (event.keyCode==38) {fullScreen()};
    if (event.keyCode==40) {fullScreen()};
    if (event.keyCode==32) {pause()};
        }, false);
