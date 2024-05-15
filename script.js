const btnNext = document.querySelector('.next');
const btnBack = document.querySelector('.back');

const container = document.querySelector('.container');
const list = document.querySelector('.container .list');
const thumb = document.querySelector('.container .thumb');

/*const clickParis = document.getElementById('paris');
const clickBali = document.getElementById('bali');
const clickRoma = document.getElementById('roma');
const clickVeneza = document.getElementById('veneza');*/

btnNext.onclick = () => MoveItensOnClick('next');
btnBack.onclick = () => MoveItensOnClick('back');
/*clickParis.onclick = () => MoveItensOnClick('clickParis');
clickBali.onclick = () => MoveItensOnClick('clickBali');
clickRoma.onclick = () => MoveItensOnClick('clickRoma');
clickVeneza.onclick = () => MoveItensOnClick('clickVeneza');*/

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

/*function moveClick(){
    document.querySelectorAll('.thumb__item').forEach(item => {
        item.addEventListener('click', event => {
            // Get the data-target attribute of the clicked thumbnail
            const target = event.currentTarget.getAttribute('data-target');
    
            // Hide all main content sections
            document.querySelectorAll('.list__item').forEach(content => {
                content.style.display = 'none';
            });
    
            // Show the main content section that matches the data-target
            document.querySelector(`#${target}`).closest('.list__item').style.display = 'block';
    
            // Update the active class for the thumbnails
            document.querySelectorAll('.thumb__item').forEach(thumb => {
                thumb.classList.remove('active');
            });
            event.currentTarget.classList.add('active');
        });
    });
} Função de mundaça do carrosel com click na imagem, se atentar ao CSS */ 



