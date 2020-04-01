// NAVIGATION

document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY;
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.header__navigation a')


    sections.forEach((el) => {
        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('item-active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('item-active');
                }
            })
        }
    })
}

// SLIDER

let items = document.querySelectorAll('.carousel-item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (items.length + n) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('carousel-active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('carousel-next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('carousel-next', direction);
        this.classList.add('carousel-active');
        isEnabled = true;
    });
}


function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n-1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n+1);
    showItem('from-right');
}

document.querySelector(".arrow-left").addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
})

document.querySelector(".arrow-right").addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
})