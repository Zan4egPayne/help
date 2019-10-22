// функция запускается после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // цель - время на сайте
    setTimeout('yaCounter26140737.reachGoal("time");', 1000);

    // цель - клик на элемент с определенным id
    document.getElementById('pasteImage1').addEventListener('click', clickImage1);
    function clickImage1() {
        alert('======>>>>> клик на элемент');
    }

    // цель - клик на элемент с определенным классом
    var first = document.querySelector('.kw_quick_order_click');
    first.onclick = function() {
        console.log('target ok');
    }

    // цель - отправка формы с определенным id
    document.getElementById('form').addEventListener('submit', submitForm);
    function submitForm() {
        alert('======>>>>> отправка формы');
    }

}, false);

// цель для WP (если есть несколько форм)
var firstStep = document.querySelector('#wpcf7-f1271-p281-o1');
var secondStep = document.querySelector('#wpcf7-f1278-p1280-o1');
var threeStep = document.querySelector('#wpcf7-f1279-p1281-o1');

console.log(firstStep);
console.log(secondStep);
console.log(threeStep);

if(firstStep){
    firstStep.addEventListener( 'wpcf7mailsent', function( event ) {
        console.log('ok1');
        yaCounter48037334.reachGoal('firstStep');
    }, false );
}

if(secondStep){
    secondStep.addEventListener( 'wpcf7mailsent', function( event ) {
        console.log('ok2');
        yaCounter48037334.reachGoal('secondStep');
    }, false );
}

if(threeStep){
    threeStep.addEventListener( 'wpcf7mailsent', function( event ) {
        console.log('ok3');
        yaCounter48037334.reachGoal('threeStep');
    }, false );
}


