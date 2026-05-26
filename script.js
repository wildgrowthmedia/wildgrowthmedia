const projects = document.querySelectorAll(".project");
const modal = document.getElementById("modal");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");

projects.forEach((project) => {
  project.addEventListener("click", () => {
    const videoUrl = project.dataset.vimeo;
    modalVideo.src = `${videoUrl}&autoplay=1`;
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
