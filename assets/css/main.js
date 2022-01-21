const menubar = document.querySelector(".header-menu-bar");
const barList = document.querySelector(".header-menu-bar__item")
menubar.addEventListener("click", function(){
    menubar.classList.toggle("active");
})

function openBarList(){
    barList.classList.toggle("open")
}
menubar.addEventListener("click", openBarList)

var index = 0;
changeImg = function (){
    var arrImg= ["./assets/img/FT.jpg", "./assets/img/OP.jpg", "./assets/img/DB.jpg"];
    document.getElementById('img').src = arrImg[index];
    index++;
    if(index == 3){
        index = 0;
    }
}
setInterval(changeImg, 1500);


const modalVote = document.querySelector(".modal-vote")
// open modl
const clickVote = document.querySelector(".vote")
function openModalVote(){
    modalVote.classList.add("openModal")
}
clickVote.addEventListener("click", openModalVote)
// close modal

const closeModal = document.querySelector(".close-modal")
function removeModal(){
    modalVote.classList.remove("openModal")
} 
closeModal.addEventListener("click", removeModal);

$(document).ready(function(){
    $('.anime-coming-soon_list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });
  });
