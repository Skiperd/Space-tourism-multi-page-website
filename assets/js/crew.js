const div = document.querySelectorAll('.div-content');
const span = document.querySelectorAll('.span-doom')


let atual = 0;

span.forEach((item,index) => {
  item.addEventListener('click',() => {
    Limpar();

    console.log(span[index])
    atual = index;
    div[atual].classList.add('active')
    span[atual].style.backgroundColor = '#fff'
  })
})

function Limpar() {
  div.forEach((item) => item.classList.remove('active'))
  span.forEach((item) => item.style.backgroundColor = '#979797')
}