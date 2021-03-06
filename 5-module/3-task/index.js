function initCarousel() {
  let offset = 0; //смещение от левого края
  const corouselInner = document.querySelector('.carousel__inner');
  const corouselSlide = document.querySelector('.carousel__slide')
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselArrowRight = document.querySelector('.carousel__arrow_right')
  carouselArrowLeft.style.display = 'none';

  carouselArrowRight.addEventListener('click', function(){
    offset = offset + corouselSlide.offsetWidth;
    corouselInner.style.transform = `translateX(${-offset}px`;

   
   if (offset >= corouselSlide.offsetWidth && offset < corouselSlide.offsetWidth * 3){
     carouselArrowLeft.style.display = '';
     carouselArrowRight.style.display = '';

   } else if (offset >= corouselSlide.offsetWidth * 3) {
    carouselArrowRight.style.display = 'none';
     
   } else {
    carouselArrowLeft.style.display = 'none';
   }
 })

 carouselArrowLeft.addEventListener('click', function(){
  offset = offset - corouselSlide.offsetWidth;

  corouselInner.style.transform = `translateX(${-offset}px`;

  if (offset == 0){
    carouselArrowLeft.style.display = 'none';
  } else {
   carouselArrowRight.style.display = '';
  }
})

}
