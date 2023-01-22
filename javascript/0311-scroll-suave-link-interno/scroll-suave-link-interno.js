const linksInternos=document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(event){
    event.preventDefault()
    const href=event.currentTarget.getAttribute('href')
    const section=document.querySelector(href)
    const topo=section.offsetTop

    // window.scrollTo(0,section.offsetTop) // metodo que faz com que a janela faca rolagem até o local escolhido (eixo x,y, logo os argumentos da funcao é o eixo x em pixels e depois o eixo y em pixels), offsetTop é um metodo que vai mostrar o valor em pixels do inicio do elemento escolhido
    
    section.scrollIntoView({
        behavior:'smooth',
        block:'start'
    })
    

    /*
    FORMA ALTERNATIVA: 
    */
    /*
    window.scrollTo({
        top:topo,
        behavior:'smooth'
    })
    */
    
}


linksInternos.forEach((link)=>{
    link.addEventListener('click', scrollToSection)
})