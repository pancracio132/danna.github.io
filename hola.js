function mostrarMensaje(){

    const sorpresa =
    document.getElementById("sorpresa");

    sorpresa.innerHTML =
    " Espero que la vida te regale muchísimas sonrisas, sueños cumplidos, abrazos sinceros y momentos tan hermosos como tu corazón";

    lanzarConfeti();
}

function lanzarConfeti(){

    for(let i = 0; i < 120; i++){

        const confeti =
        document.createElement("div");

        document.body.appendChild(confeti);

        confeti.style.position = "fixed";
        confeti.style.left =
        Math.random() * window.innerWidth + "px";

        confeti.style.top = "-20px";

        confeti.style.width = "12px";
        confeti.style.height = "12px";

        confeti.style.backgroundColor =
        `hsl(${Math.random()*360},100%,50%)`;

        confeti.style.borderRadius = "50%";

        const duracion =
        Math.random() * 3 + 2;

        confeti.animate([

            {
                transform:"translateY(0) rotate(0deg)",
                opacity:1
            },

            {
                transform:
                `translateY(${window.innerHeight}px)
                rotate(720deg)`,

                opacity:0
            }

        ],{

            duration:duracion * 1000,
            easing:"linear"

        });

        setTimeout(()=>{
            confeti.remove();
        }, duracion * 1000);
    }
}

function crearCorazon(){

    const corazon =
    document.createElement("div");

    corazon.innerHTML = "💖";

    corazon.classList.add("corazon");

    corazon.style.left =
    Math.random() * window.innerWidth + "px";

    corazon.style.fontSize =
    Math.random() * 20 + 20 + "px";

    corazon.style.animationDuration =
    Math.random() * 5 + 5 + "s";

    document.body.appendChild(corazon);

    setTimeout(()=>{
        corazon.remove();
    },10000);
}

setInterval(crearCorazon,400);
