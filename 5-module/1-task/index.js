function hideSelf() {
  let btn = document.querySelector('.hide-self-button');

    function addHidden(){
      btn.setAttribute("hidden","true");
    }

 btn.addEventListener('click', addHidden)
}



