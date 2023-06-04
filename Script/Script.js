const hamberger = document.querySelector('.hamberger');
const firstList = document.querySelector('.firstList');
const mybutton = document.getElementById("myBtn");
hamberger.addEventListener('click',function(){
    firstList.classList.toggle('active');
    hamberger.classList.toggle('active');
})

setInterval(function(){
    const date =dayjs();
    let dateAndTime =date.format("YYYY/M/D h:m:s A");
    document.querySelector(".hour").innerHTML=`${dateAndTime}`;
})


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}
