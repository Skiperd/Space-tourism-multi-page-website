const li = document.querySelectorAll('.div-satelite-ul li');
const img = document.querySelectorAll('.lista-imagem')
const div = document.querySelectorAll('.div-satelite-text')


let atual = 0;

li.forEach((item,index) => {
  item.addEventListener('click', () => {
    LimparTags();

    atual = index;
    img[atual].classList.add('active')
    div[atual].classList.add('active')
  })
})

function LimparTags() {
  li.forEach((item) => item.classList.remove('active'))
  img.forEach((item) => item.classList.remove('active'))
  div.forEach((item) => item.classList.remove('active'))
}

console.log(img)