let buttonData = [
	[
		[`input`],[`inputSlide`],[`button`],[`onclick`, `fS1()`],[`<`],[``]
	],
	[
		[`div`],[``],[``],[``, ``],[``],[`wIN`]
	],
	[
		[`input`],[`inputSlide`, ],[`button`],[`onclick`, `nextAuto()`],[`>`],[``]
	]
];
let buttonData2 = [
	[
		[`input`],[`fullScreenButton`],[``],[`onclick`, `toggleFullScreen()`],[`< >`]
	],
	[
		[`input`],[`inputSlideBigLeft inputSlideBig`],[`button`],[`onclick`, `fS1()`],[`<`]
	],
	[
		[`input`],[`inputSlideBigPause inputSlideBig`],[`button`],[`onclick`, `pause()`],[`| |`]
	],
	[
		[`input`],[`inputSlideBigRight inputSlideBig`],[`button`],[`onclick`, `nextAuto()`],[`>`]
	],
	[
		[`div`],[`wrapperInputSlide`, ],[``],[``, ``],[``]
	]
];
let controlPanelBlock = document.createElement(`div`);
	controlPanelBlock.className = `controlPanel`;
	document.getElementsByClassName('wrapperSpanSlide')[0].appendChild(controlPanelBlock);

for (let i = 0; i < buttonData2.length; i++) {
	element = document.createElement(buttonData2[i][0]);
	element.className = `${buttonData2[i][1]}`;
	element.type = `${buttonData2[i][2]}`;
	// element.setAttribute(buttonData[i][3][0],buttonData[i][3][1]);
	element.value = `${buttonData2[i][4]}`;
	// document.getElementsByClassName('wrapperInputSlide')[0].appendChild(element);
	// WrapFullScreen
		document.getElementsByClassName('controlPanel')[0].appendChild(element)
}

for (let i = 0; i < buttonData.length; i++) {
	element = document.createElement(buttonData[i][0]);
	element.className = `${buttonData[i][1]}`;
	element.type = `${buttonData[i][2]}`;
	// element.setAttribute(buttonData[i][3][0],buttonData[i][3][1]);
	element.value = `${buttonData[i][4]}`;
	element.id = `${buttonData[i][5]}`;
	document.getElementsByClassName('wrapperInputSlide')[0].appendChild(element);

}
document.getElementsByClassName(`inputSlide`)[0].setAttribute(buttonData[0][3][0],buttonData[0][3][1]);
document.getElementsByClassName(`inputSlide`)[1].setAttribute(buttonData[2][3][0],buttonData[2][3][1]);
document.getElementsByClassName(`fullScreenButton`)[0].setAttribute(buttonData2[0][3][0],buttonData2[0][3][1]);
document.getElementsByClassName(`inputSlideBigLeft`)[0].setAttribute(buttonData2[1][3][0],buttonData2[1][3][1]);
document.getElementsByClassName(`inputSlideBigPause`)[0].setAttribute(buttonData2[2][3][0],buttonData2[2][3][1]);
document.getElementsByClassName(`inputSlideBigRight`)[0].setAttribute(buttonData2[3][3][0],buttonData2[3][3][1]);
console.log(document.getElementsByClassName('wrapperInputSlide')[0].appendChild(element));

let time = 8000; // Пауза між кадрами (мілісек)
let speed = 1;  // скорость листання (сек)
function Id(e) {return document.getElementById(e)};
function CE(e) {return document.createElement(e)};
// let WrapFullScreen = Id("WrapFullScreen");
let quantity = document.getElementsByClassName('wrapperSpanSlide')[0].childNodes;
let WrapFullScreen = document.getElementsByClassName('wrapperSpanSlide')[0];
let quantityButton = Id('wIN').childNodes;
let quantityLength = quantity.length-1; // Кількість слайдів
// let numberNextSlide = quantityLength;  // Номер наступного слайда
// let numberNextSlide = quantityLength;  // Номер наступного слайда
let numberNextSlide = 1;  // Номер наступного слайда
let numberBeakSlide = 1; // Номер основного слайда
let zI = 8;                 // z-index
let s1 = Id(`slide${numberNextSlide}`);
let s2 = Id(`slide${numberBeakSlide}`); 
for (let i = 0; i < quantityLength; i++) {
	quantity[i].id = `slide${i+1}`;
	let input = CE('input');
		input.classList.add("inputSlide", "inputSlideN");
		input.type="button";
		input.style.background = `url("${i+1}.jpg") `;
		input.style.backgroundSize = `100% 100%`;
		// input.value=`${i+1}`;
		input.setAttribute('onclick', `fS1(${i+1})`);
	Id('wIN').appendChild(input);
};
quantity[0].style.zIndex = zI-1;
console.log(quantityLength);
console.log(quantityButton);

function avtoHover(namber){
	for (let i = 0; i < quantityLength; i++) {
		quantityButton[i].style.boxShadow = 'inset 0 0 2em rgba(0, 0, 0, 0.3)';	}
	quantityButton[namber].style.boxShadow = `inset 0 0 1em rgba(256, 256, 256, 0.3),  0em 0em 2em rgba(0, 0, 0, 1)`;};
	avtoHover(numberBeakSlide-1);
let setI = setInterval(() => {nextAuto();}, time);
function beforeGo(e) {
	s1 = Id(`slide${numberNextSlide}`);
	avtoHover(numberNextSlide-1);
	if (s2 == null) {s2 = Id(`slide${1}`)};
	s1.style.cssText=`transition: 'left 0s';left: ${e}100%;`;
	s1.style.zIndex = `${zI}`;
	s2.style.cssText=`transition: 'left 0s';left: 0%;`;
	s2.style.zIndex = `${zI}`;
	zI++;	
	setTimeout(() => {
		s1.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
		s1.style.left = "0%";
		s2.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
		if (e == '') {s2.style.left = '-100%';} else {s2.style.left = '100%';};
	}, 88);};

function nextAuto(nNSU) {
	clearIntervalMini();
	if (nNSU) {
		numberNextSlide=nNSU;
		s2 = s1;
	} else {
		numberNextSlide++;
		numberBeakSlide = numberNextSlide-1;
		if (numberBeakSlide == 0) {numberBeakSlide = quantityLength};
		if (numberNextSlide > quantityLength){numberNextSlide = 1};
		s2 = Id(`slide${numberBeakSlide}`); 
	};
	beforeGo(''); }; 

function fS1(nNSU) {
	if (numberNextSlide == nNSU) {	
		clearIntervalMini();	
	} else { 
		if (numberNextSlide < nNSU) {
			nextAuto(nNSU); 
			clearIntervalMini();
		} else {
			clearIntervalMini();
			if (nNSU == undefined) {
				numberNextSlide--;
				if (numberNextSlide==0) {numberNextSlide=quantityLength};
			} else {
				numberNextSlide = nNSU;
				if (numberNextSlide==0) {numberNextSlide=quantityLength};
			};	
			s2 = s1;
			beforeGo('-');
		};
        };
    };
function clearIntervalMini() {
	clearInterval(setI);
	setI = setInterval(() => {
		nextAuto();
	}, time);
	setI;	};
function pause() {
	clearInterval(setI);
}
function toggleFullScreen() {
	WrapFullScreen.mozRequestFullScreen();
		if (WrapFullScreen.mozRequestFullScreen()) {} else {document.mozCancelFullScreen()}
	WrapFullScreen.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		if (WrapFullScreen.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)) {} else {document.webkitCancelFullScreen()}
};
document.addEventListener('keydown', function(event) {
    if (event.keyCode==39) {nextAuto()};
    if (event.keyCode==37) {fS1()};
    if (event.keyCode==38) {toggleFullScreen()};
    if (event.keyCode==40) {toggleFullScreen()};
    if (event.keyCode==32) {pause()};
        }, false);

let style = document.createElement('style');
style.innerHTML = `body {
  background-color: #888;
  padding: 0;
  margin: 0;
  width: 100%; }
.wrapperSpanSlide {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #333;
  padding: 0;
  position: relative;
  overflow: hidden;
  margin: 0 auto; }
  .wrapperSpanSlide span {
    position: absolute;
    height: 100%;
    width: 100%;
    background-size: cover; }

.controlPanel {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  position: absolute;
  z-index: 8888;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; }

.fullScreenButton {
  position: absolute;
  z-index: 8888;
  top: 0;
  right: 0;
  height: 15%;
  width: 11%;
  border-radius: 0 0 0 30%;
  font: 55px GOST Type BU;
  box-sizing: border-box;
  padding: 0.2em 0.4em 0.2em 0.4em;
  opacity: 0.08;
  color: #444;
  background: rgba(88, 88, 88, 0.2);
  border: 1px rgba(88, 88, 88, 0.2) solid;
  text-shadow: 0 0 2px rgba(250, 250, 250, 0.5);
  display: flex;
  justify-content: center;
  align-items: center; }
  .fullScreenButton:hover {
    opacity: 1; }

.inputSlideBig {
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  height: 70%;
  width: 30%;
  font: 188px GOST Type BU;
  color: #444;
  background: rgba(88, 88, 88, 0.2);
  border: 1px rgba(88, 88, 88, 0.2) solid;
  text-shadow: 0 0 2px rgba(250, 250, 250, 0.5);
  opacity: 0.08; }
  .inputSlideBig:hover {
    opacity: 1; }

.inputSlideBigLeft {
  left: 0;
  border-top-right-radius: 40%;
  border-bottom-right-radius: 40%; }

.inputSlideBigRight {
  right: 0;
  border-top-left-radius: 40%;
  border-bottom-left-radius: 40%; }

.inputSlideBigPause {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50%;
  width: 25%;
  border-radius: 40%; }

.wrapperInputSlide {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 8888;
  opacity: 0.1; }
  .wrapperInputSlide:hover {
    opacity: 1; }

.inputSlide {
  background: rgba(88, 88, 88, 0.3);
  padding: 1vh 7vh;
  border: 0;
  color: #444;
  font: 38px GOST Type BU; }
  .inputSlide:hover {
    background: rgba(88, 88, 88, 0.5);
    border: 1px rgba(88, 88, 88, 0.2) solid;
    text-shadow: 0 0 1px rgba(250, 250, 250, 0.6); }

#wIN {
  display: flex;
  flex-wrap: no-wrap; }

#slide1 {
  background-image: url("1.jpg"); }

#slide2 {
  background-image: url("2.jpg"); }

#slide3 {
  background-image: url("3.jpg"); }

#slide4 {
  background-image: url("4.jpg"); }

#slide5 {
  background-image: url("5.jpg"); }

#slide6 {
  background-image: url("6.jpg"); }

#slide7 {
  background-image: url("7.jpg"); }

#slide8 {
  background-image: url("8.jpg"); }

#slide9 {
  background-image: url("9.jpg"); }

#slide10 {
  background-image: url("10.jpg"); }

#slide11 {
  background-image: url("11.jpg"); }

#slide12 {
  background-image: url("12.jpg"); }

#slide13 {
  background-image: url("13.jpg"); }

#slide14 {
  background-image: url("14.jpg"); }

#slide15 {
  background-image: url("15.jpg"); }

#slide16 {
  background-image: url("16.jpg"); }
`;

WrapFullScreen.appendChild(style);