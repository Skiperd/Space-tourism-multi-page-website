const span = document.querySelectorAll('.span-control')
const content = document.querySelectorAll('.content')
const spanp = document.querySelectorAll('#spanp')

let atual = 0;
span.forEach((item,index) => {
  item.addEventListener('click',() => {
    removerActive();
    
    atual = index;
    content[atual].classList.add('active')
    span[atual].style.backgroundColor = '#fff'
    spanp[atual].style.color = '#000'
    console.log(atual)
  })
})

function removerActive() {
  content.forEach((item) => item.classList.remove('active'))
  span.forEach((item) => item.style.backgroundColor = 'rgba(0, 0, 0, 0.25)')
  spanp.forEach((item) => item.style.color = '#fff')
}

console.log(spanp)