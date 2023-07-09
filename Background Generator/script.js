const color1 = document.getElementById("color1");
    const color2 = document.getElementById("color2");
    const gradient = document.getElementById("gradient");
    
    function setGradient() {
      gradient.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    }
    
    color1.addEventListener("input", setGradient);
    color2.addEventListener("input", setGradient);