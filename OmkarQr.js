const card = document.getElementById("card");
const container = document.querySelector(".container");
const mainCard = document.querySelector(".main-card");
const alertBox = document.getElementById("alertBox");

// 🔥 MASTER TIMELINE
let tl = gsap.timeline();

// Intro Animation
tl.from(card, {
  scale: 0,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)"
})

// Flip to back
.to(card, {
  rotateY: 180,
  duration: 1,
  ease: "power2.inOut"
})

// Slight pause
.to(card, {
  duration: 0.4
})

// Flip back to front
.to(card, {
  rotateY: 360,
  duration: 1,
  ease: "power2.inOut"
})

// Exit animation
.to(card, {
  scale: 0,
  opacity: 0,
  duration: 0.8,
  ease: "power2.in"
})

// Remove intro screen
.to(container, {
  opacity: 0,
  duration: 0.6,
  onComplete: () => {
    container.style.display = "none";
  }
})

// Show main content
.to(mainCard, {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out"
})

// Show alert
.to(alertBox, {
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: "power2.out"
})

// Hide alert after delay
.to(alertBox, {
  opacity: 0,
  y: 20,
  duration: 0.5,
  delay: 2
});


// 🔁 Manual Flip (optional interaction after intro)
let flipped = false;

card.addEventListener("click", () => {
  flipped = !flipped;

  gsap.to(card, {
    rotateY: flipped ? 180 : 0,
    duration: 0.8,
    ease: "power2.inOut"
  });
});


// BUTTON HOVER MICRO-ANIMATION
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { letterSpacing: 1, duration: 0.2 });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { letterSpacing: 0, duration: 0.2 });
  });
});
