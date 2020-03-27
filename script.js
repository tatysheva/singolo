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
