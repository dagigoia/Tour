function abrirModal(imagem, titulo, descricao) {
    document.getElementById("modal-imagem").src = imagem;
    document.getElementById("modal-titulo").innerHTML = titulo;
    document.getElementById("modal-desc").innerHTML = descricao;
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".testimonial-container");
    const testimonials = document.querySelectorAll(".testimonial");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;
    const totalTestimonials = testimonials.length;
    const step = testimonials[0].offsetWidth + 20;


    for (let i = 0; i < totalTestimonials; i++) {
        let clone = testimonials[i].cloneNode(true);
        container.appendChild(clone);
    }

    function updateCarousel() {
        container.style.transition = "transform 0.5s ease-in-out";
        container.style.transform = `translateX(${-index * step}px)`;
    }

    nextButton.addEventListener("click", () => {
        if (index >= totalTestimonials) {
            container.style.transition = "none";
            index = 0;
            container.style.transform = `translateX(${-index * step}px)`;
            setTimeout(() => {
                container.style.transition = "transform 0.5s ease-in-out";
                index++;
                updateCarousel();
            }, 50);
        } else {
            index++;
            updateCarousel();
        }
    });

    prevButton.addEventListener("click", () => {
        if (index <= 0) {
            container.style.transition = "none";
            index = totalTestimonials;
            container.style.transform = `translateX(${-index * step}px)`;
            setTimeout(() => {
                container.style.transition = "transform 0.5s ease-in-out";
                index--;
                updateCarousel();
            }, 50);
        } else {
            index--;
            updateCarousel();
        }
    });


    window.addEventListener("resize", () => {
        updateCarousel();
    });

});
console.clear()

// Garantir que o áudio toque automaticamente
const audio = document.getElementById("musica");
audio.volume = 0.03; // Ajusta o volume
audio.play(); // Inicia a música imediatamente

// Evento para garantir que a música comece quando carregado
audio.oncanplaythrough = function () {
    audio.play();  // Inicia a reprodução
};
