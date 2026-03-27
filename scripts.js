function openModal(videoUrl) {
  const modal = document.getElementById("modal");
  const frame = document.getElementById("videoFrame");

  frame.src = videoUrl + "?autoplay=1";
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  const frame = document.getElementById("videoFrame");

  frame.src = "";
  modal.style.display = "none";
}
