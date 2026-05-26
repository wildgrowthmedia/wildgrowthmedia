const projects = document.querySelectorAll(".project");
const modal = document.getElementById("modal");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");

projects.forEach((project) => {
  const iframe = project.querySelector("iframe");
  const player = new Vimeo.Player(iframe);
  let loopTimer;

  project.addEventListener("mouseenter", () => {
    player.setCurrentTime(0);
    player.play();

    loopTimer = setInterval(() => {
      player.setCurrentTime(0);
      player.play();
    }, 6000);
  });

  project.addEventListener("mouseleave", () => {
    clearInterval(loopTimer);
    player.pause();
    player.setCurrentTime(0);
  });

  project.addEventListener("click", () => {
    const videoUrl = project.dataset.vimeo;
    modalVideo.src = `${videoUrl}?autoplay=1`;
    modal.classList.add("is-open");
  });
});

function closeVideoModal() {
  modal.classList.remove("is-open");
  modalVideo.src = "";
}

closeModal.addEventListener("click", closeVideoModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeVideoModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeVideoModal();
  }
});
