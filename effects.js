class TouchGlowEffect {
  constructor() {
    this.glowEl = document.getElementById("touch-glow");
    this.rippleContainer = document.getElementById("ripple-container");
    this.particlesContainer = document.getElementById("particles-bg");
    this.init();
  }

  init() {
    this.spawnParticles(24);
    this.bindPointerEvents();
    this.bindTiltCards();
  }

  spawnParticles(count) {
    if (!this.particlesContainer) return;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      dot.className = "particle-dot";
      const size = Math.random() * 6 + 3;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.animationDuration = `${Math.random() * 12 + 10}s`;
      dot.style.animationDelay = `${Math.random() * 8}s`;
      this.particlesContainer.appendChild(dot);
    }
  }

  moveGlow(x, y) {
    if (!this.glowEl) return;
    this.glowEl.style.left = `${x}px`;
    this.glowEl.style.top = `${y}px`;
  }

  createRipple(x, y) {
    if (!this.rippleContainer) return;
    const ripple = document.createElement("span");
    ripple.className = "water-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = "42px";
    ripple.style.height = "42px";
    this.rippleContainer.appendChild(ripple);
    setTimeout(() => ripple.remove(), 860);
  }

  bindPointerEvents() {
    window.addEventListener("pointermove", (e) => {
      this.moveGlow(e.clientX, e.clientY);
    }, { passive: true });

    window.addEventListener("pointerdown", (e) => {
      this.moveGlow(e.clientX, e.clientY);
      this.createRipple(e.clientX, e.clientY);
      if (this.glowEl) {
        this.glowEl.style.width = "330px";
        this.glowEl.style.height = "330px";
      }
    });

    window.addEventListener("pointerup", () => {
      if (this.glowEl) {
        this.glowEl.style.width = "280px";
        this.glowEl.style.height = "280px";
      }
    });
  }

  bindTiltCards() {
    document.querySelectorAll(".tilt-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${(-py * 3.5).toFixed(2)}deg) rotateY(${(px * 3.5).toFixed(2)}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }
}

window.SakinaEffects = new TouchGlowEffect();