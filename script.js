const btnNext = document.querySelector('.next');
const btnBack = document.querySelector('.back');

const container = document.querySelector('.container');
const list = document.querySelector('.container .list');
const thumb = document.querySelector('.container .thumb');

btnNext.onclick = () => MoveItensOnClick('next');
btnBack.onclick = () => MoveItensOnClick('back');

function MoveItensOnClick(type){

    const listItens = document.querySelectorAll('.list .list__item');
    const thumbItens = document.querySelectorAll('.thumb .thumb__item');

    if (type === 'next') {

        list.appendChild(listItens[0])
        thumb.appendChild(thumbItens[0])
        container.classList.add('next')
    } else{

        list.prepend(listItens[listItens.length - 1])
        thumb.prepend(thumbItens[thumbItens.length - 1])
        container.classList.add('back')
    }
    
    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);
}