document.addEventListener('DOMContentLoaded', () =>{
    //Este boton hara aparecer y desaparecer la sección de los datos personales
    //y la sección de proyectos.
    // Las siguientes variables son para los contenedores o botones de la seccion de la portada
    const btnAparecer = document.getElementById('btnPie')
    const svgFlecha = document.querySelectorAll('.svgAbajo')
    const contCuerpoPort = document.querySelector('.cuerpoHeader')
    const contHeader = document.getElementById('header')
    const txtCambiar = document.getElementById('textoCambio')
    //Las siguientes variables son para los contenedores de la seccion experiencia
    const contExperiencia = document.getElementById('contExp')
    let btnPresionado = false


    if(btnAparecer && svgFlecha.length > 0 && contCuerpoPort && contHeader){

        btnAparecer.addEventListener('mouseover', () =>{
            svgFlecha.forEach(svg =>{
                svg.style.fill = '#eaf2f9'
                svg.style.transform = 'rotate(3.142rad)'
                svg.style.transition = 'transform 1s linear'
            })
        })
        btnAparecer.addEventListener('mouseout', () =>{
            if(!btnPresionado){
                svgFlecha.forEach(svg =>{
                svg.style.transform = 'rotate(0deg)'
            })
            }
        })
        /*Este evento sirve para varias cosas por ejemplo para agregar al SVG mediante un foreach la clase
        vuelta, para hacer rotar el svg, tambien para habilitar o desabilitar el mosueout,
        agrega a el contenedor cuerpoHeader la clase ocultar y al mismo contenedor que funciona como 
        footer lo hace pequeño para que al presionar funcione como cabecera. */
        btnAparecer.addEventListener('click', () =>{
            btnPresionado = true
            svgFlecha.forEach(svg =>{
                if(svg.classList.contains('vuelta')){
                    svg.classList.remove('vuelta')
                    btnPresionado = false
                }else{
                    svg.classList.toggle('vuelta')
                }
            })
            contCuerpoPort.classList.toggle('ocultar')
            if(contHeader.classList.contains('reducir')){
                contHeader.classList.remove('reducir')
                contExperiencia.classList.toggle('ocultar')

                txtCambiar.innerText = 'Mis proyectos'
            }else{
                contHeader.classList.toggle('reducir')
                contExperiencia.classList.remove('ocultar')

                let valor = txtCambiar.textContent
                console.log(`${valor}`)
                txtCambiar.innerText = 'Sobre mi'
            }
        })
    }
})