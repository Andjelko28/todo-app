const forma = document.querySelector('#form')
const input = document.querySelector('#input')
const btn = document.querySelector('button')
const lista = document.querySelector('#list')

forma.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(input.value)
    const newInput = input.value
    const dltBtn = document.createElement('button')
    dltBtn.textContent = 'X'
    
    const newLi = document.createElement('li')
    newLi.innerText = newInput
    list.appendChild(newLi)
    newLi.appendChild(dltBtn)
    input.value = ''
    

    dltBtn.addEventListener('click', (e) =>{
        e.preventDefault()
        dltBtn.parentElement.remove(newLi)
    })
    
    
    



})