const mapContainers = document.querySelectorAll(".map__container");
const popups = document.querySelectorAll(".popup");

function togglePopup(evt) {
  const mapContainer = evt.currentTarget;
  const popupMapContainer = mapContainer.querySelector(".popup");
  const mapClickMapContainer = mapContainer.querySelector(".map__click");

  popupMapContainer.classList.toggle("popup_opened");
  mapClickMapContainer.classList.toggle("map__click_inactive");
}

function closePopups() {
  popups.forEach((popup) => {
    popup.classList.remove("popup_opened");
  });
}

document.addEventListener('mousedown', (evt) => {
  const isClickOutsidePopups = Array.from(popups).every((popup) => !popup.contains(evt.target));
  
  if (isClickOutsidePopups) {
    closePopups();
    mapContainers.forEach((mapContainer) => {
      const mapClickMapContainer = mapContainer.querySelector(".map__click");
      mapClickMapContainer.classList.remove("map__click_inactive");
    });
  }
});

mapContainers.forEach((mapContainer) => {
  mapContainer.addEventListener("click", togglePopup);
});