import fifoCalc from '../img/fifo-calc.gif';
import calculator from '../img/calculator.gif';
import weatherApp from '../img/weather-app.gif';
import ticTacToe from '../img/tic-tac-toe.gif';
import shoppingCart from '../img/shopping-cart.gif';
import todoList from '../img/todo-list.gif';
import battleship from '../img/battleship.gif';
import cocktailMixer from '../img/cocktail-mixer.gif';
import CVGenerator from '../img/cv-generator.gif';
import MobileMenu from '../img/mobile-menu.gif';
import matrixaccsFrontend from '../img/matrixaccs-frontend.gif';

const projects = [
    {
        id: 'fifo-calc',
        titleImage: fifoCalc,
        //analytics?
        deploy: 'https://trading-csv-fifo-calculator.web.app/',
        github: 'https://github.com/martenmatrix/capital-gains-trading-calculator',
        readme: 'https://raw.githubusercontent.com/martenmatrix/capital-gains-trading-calculator/master/README.md',
    },
    {
        id: 'calculator',
        titleImage: calculator,
        deploy: 'https://martenmatrix.github.io/calculator/',
        github: 'https://github.com/martenmatrix/calculator/',
        readme: 'https://raw.githubusercontent.com/martenmatrix/calculator/main/README.md',
    },
    {
        id: 'weather-app',
        titleImage: weatherApp,
        deploy: 'https://martenmatrix.github.io/weather-app/',
        github: 'https://github.com/martenmatrix/weather-app/',
        readme: 'https://raw.githubusercontent.com/martenmatrix/weather-app/main/README.md',
    },
    {
        id: 'tic-tac-toe',
        titleImage: ticTacToe,
        deploy: 'https://martenmatrix.github.io/tic-tac-toe/',
        github: 'https://github.com/martenmatrix/tic-tac-toe',
        readme: 'https://raw.githubusercontent.com/martenmatrix/tic-tac-toe/main/README.md',
    },
    {
        id: 'shopping-cart',
        titleImage: shoppingCart,
        deploy: 'https://martenmatrix.github.io/shopping-cart/',
        github: 'https://github.com/martenmatrix/shopping-cart',
        readme: 'https://raw.githubusercontent.com/martenmatrix/shopping-cart/main/README.md',
    },
    {
        id: 'cv-generator',
        titleImage: CVGenerator,
        deploy: 'https://martenmatrix.github.io/cv-generator/',
        github: 'https://github.com/martenmatrix/cv-generator',
        readme: 'https://raw.githubusercontent.com/martenmatrix/cv-generator/main/README.md',
    },
    {
        id: 'cocktail-mixer',
        titleImage: cocktailMixer,
        deploy: '#',
        github: 'https://github.com/martenmatrix/cocktail-mixer',
        readme: 'https://raw.githubusercontent.com/martenmatrix/cocktail-mixer/main/README.md',
    },
    {
        id: 'battleship',
        titleImage: battleship,
        deploy: 'https://martenmatrix.github.io/odin-battleship/',
        github: 'https://github.com/martenmatrix/odin-battleship',
        readme: 'https://raw.githubusercontent.com/martenmatrix/battleship/main/README.md'
    },
    {
        id: 'memory-card',
        deploy: 'https://martenmatrix.github.io/memory-card/',
        github: 'https://github.com/martenmatrix/odin-memory-card',
        readme: 'https://raw.githubusercontent.com/martenmatrix/memory-card/main/README.md',
    },
    {
        id: 'javascript-form',
        deploy: 'https://martenmatrix.github.io/odin-javascript-form/',
        github: 'https://github.com/martenmatrix/odin-javascript-form',
        hide: true
    },
    {
        id: 'restaurant-page',
        deploy: 'https://martenmatrix.github.io/restaurant-page/',
        github: 'https://github.com/martenmatrix/restaurant-page',
        hide: true
    },
    {
        id: 'todo-list',
        titleImage: todoList,
        deploy: 'https://martenmatrix.github.io/todo-list/',
        github: 'https://github.com/martenmatrix/todo-list',
        readme: 'https://raw.githubusercontent.com/martenmatrix/todo-list/main/README.md',
    },
    {
        id: 'mobile-menu',
        titleImage: MobileMenu,
        deploy: 'https://martenmatrix.github.io/mobile-menu/',
        github: 'https://github.com/martenmatrix/mobile-menu',
        readme: 'https://raw.githubusercontent.com/martenmatrix/mobile-menu/main/README.md',
    },
    {
        id: 'matrixaccs-frontend',
        titleImage: matrixaccsFrontend,
        deploy: 'https://www.matrixaccs.com',
        github: 'https://github.com/martenmatrix/matrixaccs-frontend-public',
        readme: 'https://raw.githubusercontent.com/martenmatrix/matrixaccs-frontend-public/master/README.md'
        // hide imprint
    },
    {
        id: 'personal-website',
        deploy: 'https://marten.codes',
        github: 'https://github.com/martenmatrix/personal-website',
        readme: 'https://raw.githubusercontent.com/martenmatrix/personal-website/master/README.md',
    }
    // maybe python codebases, however there is some confidential information in it, make sure to delete the file from the complete history
]

export default projects;