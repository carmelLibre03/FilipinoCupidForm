const form= document.querySelector("form"),
       submitBtn=form.querySelector("submitBtn"),
      allInput=form.querySelectorAll(".first input");
      
submitBtn.addEventListener("click", ()=> {
  allInput.forEach(input => {
    if(input.value !=""){
      form.classlist.add('secActive');
    }else{
      form.classlist.remove('secActive');
      
      
  })
})
