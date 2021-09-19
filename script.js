const token = document.querySelectorAll('.panel')

token.forEach((panel) => {
panel.addEventListener('click', () =>{
    // console.log(212)
    chotakariba();
    panel.classList.add('active') 
})
})

function  chotakariba(){
    token.forEach((panel) => {
        panel.classList.remove('active')
    })
}