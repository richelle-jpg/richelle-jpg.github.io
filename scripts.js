// toggle icon navbar


// scroll sections
window.onscroll = () => {
   // sticky header
   let header = docoment.querySelector('header');

   header.classList.toggle('sticky', window.scrollY > 100);
}

// remove toggle icon and navbar when click navbar links (scroll)
// animation footer on scroll