{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const projects = document.querySelectorAll(".project");\
const modal = document.getElementById("modal");\
const modalVideo = document.getElementById("modalVideo");\
const closeModal = document.getElementById("closeModal");\
\
projects.forEach((project) => \{\
  project.addEventListener("click", () => \{\
    const videoUrl = project.dataset.vimeo;\
    modalVideo.src = `$\{videoUrl\}&autoplay=1`;\
    modal.classList.add("is-open");\
  \});\
\});\
\
function closeVideoModal() \{\
  modal.classList.remove("is-open");\
  modalVideo.src = "";\
\}\
\
closeModal.addEventListener("click", closeVideoModal);\
\
modal.addEventListener("click", (event) => \{\
  if (event.target === modal) \{\
    closeVideoModal();\
  \}\
\});\
\
document.addEventListener("keydown", (event) => \{\
  if (event.key === "Escape") \{\
    closeVideoModal();\
  \}\
\});}
