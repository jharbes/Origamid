const sections=document.querySelectorAll('.js-scroll')


if (sections.length){
    const windowMetade=window.innerHeight*0.6    // utilizaremos essa constante para que a animacao ja comece antes mesmo que o topo do elemento atinja o inicio da tela, ela ainda estara em 60% da tela  

    function animaScroll(){
        sections.forEach((section)=>{
            const sectionTop=section.getBoundingClientRect().top    
            if (sectionTop<windowMetade){ // precisei acertar o tamanho do topo para que o ultimo elemento também sofresse a animacao
                section.classList.add('js-scroll-ativo')
            }
            else{
                section.classList.remove('js-scroll-ativo')
            }
        })
        // sectionTop vai retornar em tempo real a distancia de cada um dos elementos com a classe .js-scroll do topo atual da pagina

    }
    animaScroll()

    window.addEventListener('scroll', animaScroll)
}