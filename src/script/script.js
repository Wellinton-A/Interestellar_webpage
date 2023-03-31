document.addEventListener('DOMContentLoaded', function(){
    const selectors = document.querySelectorAll('[data-tab-selector]');
    const containers = document.querySelectorAll('[data-tab-container]')
    const selectorTrailer = document.querySelectorAll('[data-tab-selector-trailer]')
    const containersTrailer = document.querySelectorAll('[data-tab-container-trailer]')

    for (let i = 0; i < selectors.length; i++) {
        selectors[i].addEventListener('click', function(picture) {
            allHide();
            const picAlvo = picture.target.getAttribute('data-tab-selector');
            document.querySelector(`[data-tab-container=${picAlvo}]`).classList.add('cast__container--selected');
        })
    }

    for (let i = 0; i < selectors.length; i++) {
        selectors[i].addEventListener('click', function(picture) {
            allTransparent();
            picture.target.classList.add('cast__selector__img--selected')
        })
    }

    function allTransparent() {
        for (let i = 0; i < selectors.length; i++) {
            selectors[i].classList.remove('cast__selector__img--selected')
        }
    }

    function allHide() {
        for (let i = 0; i < containers.length; i++) {
            containers[i].classList.remove('cast__container--selected')
        }
    }

    for (let i = 0; i < selectorTrailer.length; i++) {
        selectorTrailer[i].addEventListener('click', function(vid) {
            allHideTrailer();
            const trailerAlvo = vid.target.closest('[data-tab-selector-trailer]').getAttribute('data-tab-selector-trailer');
            document.querySelector(`[data-tab-container-trailer=${trailerAlvo}]`).classList.add('trailers__container--selected');
        })
    }

    for (let i = 0; i < selectorTrailer.length; i++) {
        selectorTrailer[i].addEventListener('click', function(vid) {
            allUnselected();
            var clicked = vid.target
            while (clicked !== null && clicked.nodeName !== "DIV" && clicked.nodeName !== "div") {
                clicked = clicked.parentNode;
            }
            clicked.classList.add('trailers__selector__item--selected')
        })
    }

    function allUnselected() {
        for (let i = 0; i < selectorTrailer.length; i++) {
            selectorTrailer[i].classList.remove('trailers__selector__item--selected')
        }
    }

    function allHideTrailer() {
        for (let i = 0; i < containersTrailer.length; i++) {
            containersTrailer[i].classList.remove('trailers__container--selected')
        }
    }


})