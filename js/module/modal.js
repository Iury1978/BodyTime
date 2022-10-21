
const heroBtn = document.querySelector(".hero__btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
try {
  setTimeout(() => {
     try {
       overlay.style.transitionDuration = "0.36s";
       modal.style.transitionDuration = "0.36s";
     } catch (error) {    
     } 
   }, 360);

  heroBtn.addEventListener("click", () => {
     try {
       overlay.classList.add("overlay_open");
       modal.classList.add("modal_open");

       // When the modal is shown, we want a fixed body
       document.body.style.position = "fixed";
       document.body.style.top = `-${window.scrollY}px`;
     } catch (error) {}
   });

   overlay.addEventListener("click", (event) => {
     const target = event.target;

     if (target === overlay || target.closest(".modal__close")) {
       overlay.classList.remove("overlay_open");
       modal.classList.remove("modal_open");

       // When the modal is hidden, we want to remain at the top of the scroll position
       const scrollY = document.body.style.top;
       document.body.style.position = "";
       document.body.style.top = "";
       window.scrollTo(0, parseInt(scrollY || "0") * -1);
     }
   });
} catch (error) {  
}

