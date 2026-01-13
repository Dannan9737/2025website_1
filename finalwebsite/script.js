function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

gsap.registerPlugin(ScrollTrigger);

// 卡片滾動浮現
gsap.utils.toArray(".info-card").forEach((card, i) => {
  gsap.fromTo(card, 
    { opacity: 0, y: 40 }, 
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%", // 卡片進入視口 80% 時觸發
      },
      delay: i * 0.2 // 三張卡片依序延遲
    }
  );
});

/* -----------------------------------------------------------work.html------------------------------------------------------------------ */
gsap.registerPlugin(ScrollTrigger);

const skills = document.querySelector(".skills");

skills.innerHTML += skills.innerHTML += skills.innerHTML;

const totalWidth = skills.scrollWidth / 2;

gsap.to(skills, {
  x: -totalWidth,
  ease: "none",
  duration: 20,
  repeat: -1
});

/* -------------------------------------------------------------------------------------------------------------------------------------- */