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

// 背景視差效果
gsap.to(".info-section", {
  backgroundPosition: "400px 400px", // 漸變斜向移動
  ease: "none",
  scrollTrigger: {
    trigger: ".info-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true // 滾動同步動畫
  }
});