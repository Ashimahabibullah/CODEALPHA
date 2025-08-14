const imageSets = [
  [
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1016/400/300",
    "https://picsum.photos/id/1018/400/300",
    "https://picsum.photos/id/1021/400/300",
    "https://picsum.photos/id/1022/400/300",
    "https://picsum.photos/id/1031/400/300"
  ],
  [
    "https://picsum.photos/id/1043/400/300",
    "https://picsum.photos/id/1050/400/300",
    "https://picsum.photos/id/1062/400/300",
    "https://picsum.photos/id/1074/400/300",
    "https://picsum.photos/id/1084/400/300",
    "https://picsum.photos/id/109/400/300"
  ],
  [
    "https://picsum.photos/id/110/400/300",
    "https://picsum.photos/id/111/400/300",
    "https://picsum.photos/id/112/400/300",
    "https://picsum.photos/id/113/400/300",
    "https://picsum.photos/id/114/400/300",
    "https://picsum.photos/id/115/400/300"
  ]
];

let currentSet = 0;
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function loadGallery() {
  gallery.innerHTML = "";
  imageSets[currentSet].forEach(imgSrc => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "Gallery Image";
    img.onclick = () => openLightbox(img);
    gallery.appendChild(img);
  });
}

function nextSet() {
  currentSet = (currentSet + 1) % imageSets.length;
  loadGallery();
}

function prevSet() {
  currentSet = (currentSet - 1 + imageSets.length) % imageSets.length;
  loadGallery();
}

function openLightbox(img) {
  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

loadGallery();
