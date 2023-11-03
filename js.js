let swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});
const click = document.getElementById('click');
const dede = document.querySelector('.dede');
const pepe = document.querySelector('.pepe');
const imggg = document.querySelector('.icon')
const buttonText = document.querySelector('.click_text')
    click.addEventListener('click',function(){

    dede.classList.toggle('dede_max');
    imggg.classList.toggle('icon_reverse');
});

function change() // no ';' here
{
    var elem = document.getElementById("click");
    if (elem.value=="     Показать все") elem.value = "     Скрыть";
    else elem.value = "     Показать все";
}
