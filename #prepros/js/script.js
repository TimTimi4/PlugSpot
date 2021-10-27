//========================================ibg====================================================================
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
//========================================ibg====================================================================



//=======================================бургер==================================================================
$('.header-menu__burger').click(function (event) {
	$(this).toggleClass('active');
	$('.header-menu__nav').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	// Блокировать бади, чтобы не было прокрутки страницы, при прокрутке бургера
	$('body').toggleClass('lock');
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});
//=======================================бургер==================================================================



//==========================================popup================================================================
// Объявляем переменные
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}

		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
//==========================================popup================================================================

//======================================scroll to elem===========================================================
$("#auction").click(function () { // ID откуда кливаем
	$('html, body').animate({
		scrollTop: $(".lots-slider").offset().top  // класс объекта к которому приезжаем
	}, 1000); // Скорость прокрутки
});
$("#info").click(function () { // ID откуда кливаем
	$('html, body').animate({
		scrollTop: $(".info").offset().top  // класс объекта к которому приезжаем
	}, 1000); // Скорость прокрутки
});
$("#contacts").click(function () { // ID откуда кливаем
	$('html, body').animate({
		scrollTop: $(".footer").offset().top  // класс объекта к которому приезжаем
	}, 1000); // Скорость прокрутки
});
$("#service").click(function () { // ID откуда кливаем
	$('html, body').animate({
		scrollTop: $(".services").offset().top  // класс объекта к которому приезжаем
	}, 1000); // Скорость прокрутки
});
//======================================scroll to elem====================================================


//========================================slider-swiper====================================================
new Swiper('.spots-slider',{
	grabCursor:true,
	slideToClickedSlide: true,
	slidesPerView: 9.5,
	watchOverflow:true,
	spaceBetween:10,
	slidesPerGroup:1,
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 1500,
	},
	breakpoints:{
		320:{
			slidesPerView: 3.5,
		},
		480:{
			slidesPerView: 5.5,
		},
		992:{
			slidesPerView: 7.5,
		},
		1366:{
			slidesPerView: 9.5,
		},
	}
})


// Инициализируем слайдер
new Swiper('.watchouter-slider', {
	grabCursor:true,
	slideToClickedSlide: true,
	slidesPerView: 6.5,
	watchOverflow:true,
	spaceBetween:60,
	slidesPerGroup:1,
	centeredSlides: true,
	loop: true,
	breakpoints:{
		320:{
			slidesPerView: 2.5,
		},
		480:{
			slidesPerView: 3.5,
		},
		767:{
			slidesPerView: 5.5,
		},
		992:{
			slidesPerView: 6.5,
		},
		1366:{
			slidesPerView: 6.5,
		},
	},
	autoplay: {
		delay: 1500,
	},
	thumbs:{
		swiper:{
			el: '.watchinner-slider',
			slidesPerView:1,
			effect: 'fade',
			speed: 1000,
			fadeEffect: {
				crossFade: true,
			}
		},
	},
});

//========================================slider-swiper==========================================================