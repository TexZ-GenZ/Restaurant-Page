import './styles.css';
import loadHomePage from './pages/home';
import loadMenuPage from './pages/menu';
import loadContactPage from './pages/contact';

const navBar = document.querySelector('nav');
const body = document.getElementById('content');

function createBtn(buttonName, loadFunction){
    const button = document.createElement('button');
    button.innerHTML = buttonName;
    button.classList.add(buttonName.toLowerCase() + 'btn');
    navBar.appendChild(button);

    button.addEventListener('click', () => {

        body.innerHTML = loadFunction();
        
    });
}

createBtn('Home', loadHomePage);
createBtn('Menu', loadMenuPage);
createBtn('Contact', loadContactPage);
