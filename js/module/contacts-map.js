try {
   const map = L.map("map").setView([47.04977588340773, 28.86508037725735], 17);

   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

   L.marker([47.04977588340773, 28.86508037725735])
     .addTo(map)
     .bindPopup("BodyTime")
     .openPopup();
} catch (error) {  
}
  
