function toggleText() {
  
  let btn = document.querySelector(".toggle-text-button");
  let elText = document.getElementById("text");
  
  btn.addEventListener ('click', function(){
    if (elText.hasAttribute('hidden')){
      elText.removeAttribute("hidden")
    } else {
      
      elText.setAttribute("hidden", "true");
    }
  })

}
