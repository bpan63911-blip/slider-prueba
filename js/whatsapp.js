// Simple contact handler + slider logic
document.addEventListener('DOMContentLoaded', function(){
  // Contact form (simulated send)
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('contactMessage');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    msg.textContent = 'Enviando mensaje...';
    setTimeout(()=>{
      msg.textContent = 'Mensaje enviado. Gracias!';
      form.reset();
    },1000);
  });

  // Slider
  const slidesEl = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let index = 0;
  const total = slides.length;

  function showIndex(i){
    if(i<0) i = total-1;
    if(i>=total) i = 0;
    index = i;
    slidesEl.style.transform = `translateX(${ -index * 100 }%)`;
  }

  prev.addEventListener('click', ()=> showIndex(index-1));
  next.addEventListener('click', ()=> showIndex(index+1));

  // auto-play
  setInterval(()=> showIndex(index+1), 4000);
});
