function encry() {
  if (!area.value) return
  let results = area.value.toLowerCase()
  let text = results.replace(/[eioua]/g, (caracter) => dic[caracter])


  asideContainer.innerHTML = ''
  asideReplace.textContent = text
  asideReplace.classList.add('aside_text')
  asideContainer.appendChild(asideReplace)

  btnCopy.textContent = 'Copy'
  btnCopy.classList.add('aside-btn')
  asideContainer.appendChild(btnCopy)
  area.value = ''
}

function decry() {
  if (!area.value) return
  let text = area.value.toLowerCase()
  for (const key in dic) {
    text = text.replaceAll(dic[key], key)
  }

  asideContainer.innerHTML = ''
  asideReplace.textContent = text
  asideReplace.classList.add('aside_text')
  asideContainer.appendChild(asideReplace)

  btnCopy.textContent = 'Copy'
  btnCopy.classList.add('aside-btn')
  asideContainer.appendChild(btnCopy)
  area.value = ''
}

const dic = Object.freeze({
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
})

let copybtn = document.getElementById('copy')
let encrypt = document.getElementById('encrypt')
let decrypt = document.getElementById('decrypt')
let area = document.getElementById('area')

let img = document.getElementById('img1')
let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')

let asideContainer = document.getElementById('aside-ctn')
let asideReplace = document.createElement('div')
let btnCopy = document.createElement('button')

btnCopy.addEventListener('click', () => {
  area.value = asideReplace.textContent
  asideContainer.textContent = ''
})
