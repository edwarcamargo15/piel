//js del beautytest
const contenedor = document.getElementById("test");

const preguntas = [
  {
    pregunta : "1. Tu piel en un primer contacto es:",
    respuestas : {
      a. "Grasosa"
      b. "Brillante en zonas como la barbilla y la nariz"
      c. "Fina y suave"
    },
    respuetaCorrecta: "a"
  }
]

function mostrarTest(){
    const preguntasYrespuestas = [];

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const respuestas = [];
        for(LetraRespuesta in preguntaActual.respuestas){
            respuestas.push(
            
            `<label>
            <input type="radio" name="${numerodePregunta}" value="${LetraRespuesta}">
            ${LetraRespuesta} : ${preguntaActual.respuestas[LetraRespuesta]}
            </label>`
                           
            );
        }
        preguntasYrespuestas.push(
            `<div class= "cuestion"> ${preguntaActual.pregunta} </div>
             <div class= "respuestas"> ${respuestas.join('')} </div>
            `
        )
    })
    contenedor.innerHTML = preguntasYrespuestas.join('');
}

mostrarTest();