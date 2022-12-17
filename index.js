const themeToggler = document.querySelector('.theme-switch > input[type="checkbox"]');
const toggleText = document.querySelector('#toggle-icon>span')
const toggleIcon = document.querySelector('#toggle-icon>i')

const image1 = document.querySelector('#image1')
const image2 = document.querySelector('#image2')
const image3 = document.querySelector('#image3')


themeToggler.addEventListener('click',changeTheme)


function changeTheme(){
    if(themeToggler.checked){
        document.documentElement.setAttribute('data-theme','dark');
        toggleText.textContent = "Dark Mode";
        toggleIcon.className = 'fas fa-moon';
        image1.setAttribute('src',"./img/undraw_conceptual_idea_dark.svg");
        image2.setAttribute('src',"./img/undraw_proud_coder_dark.svg");
        image3.setAttribute('src',"./img/undraw_feeling_proud_dark.svg");
    }else{
        document.documentElement.removeAttribute('data-theme');
        toggleText.textContent = "Light Mode";
        toggleIcon.className = 'fas fa-sun';
        image1.setAttribute('src',"./img/undraw_conceptual_idea_light.svg")
        image2.setAttribute('src',"./img/undraw_proud_coder_light.svg")
        image3.setAttribute('src',"./img/undraw_feeling_proud_light.svg")
    }
}