var modal = document.querySelector('.modal_background');
var privacyBtn = document.querySelector('.footer_button');
var closeBtn = document.querySelector('.close');
privacyBtn.onclick = function (){
    modal.style.display = 'flex';
}

closeBtn.onclick = function (){
    modal.style.display = 'none';
}