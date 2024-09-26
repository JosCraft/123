document.getElementById("transition-button").addEventListener("click", function (e) {
    e.preventDefault();
    
    // Crear el corazón para la transición
    const heart = document.createElement("div");
    heart.classList.add("heart-transition");
    document.body.appendChild(heart);
  
    // Añadir la clase para activar la animación
    setTimeout(() => {
      heart.classList.add("active");
      document.body.classList.add("transitioning");
    }, 10);
  
    // Redirigir a la nueva página después de la animación
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
  