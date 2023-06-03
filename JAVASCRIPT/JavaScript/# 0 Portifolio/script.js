// dia e noite
const toggle = document.querySelector('.toggle-input');
const initialState = localStorage.getItem('toggleState') == 'true';
toggle.checked = initialState;

toggle.addEventListener('change', function() {
  localStorage.setItem('toggleState', toggle.checked);
});

const check= document.getElementById("check");

check.addEventListener("change",()=>{
 document.body.classList.toggle("dark")
})

const check2= document.getElementById("check");

check2.addEventListener("change",()=>{
 document.body.classList.toggle("lith")
})