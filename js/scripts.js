const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

toggleTheme.addEventListener("click", ( ) => {
    document.body.classList.toggle("dark");
    if(toggleIcon.src.includes("moon.svg")){
        toggleIcon.src="img/sun.svg";
        toggleText.textContent="Light Mode";
    }else{
        toggleIcon.src = "img/moon.svg";
        toggleText.textContent = "Dark Mode";

    }
})