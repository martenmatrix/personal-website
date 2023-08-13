// GIF
import fifoCalcGIF from '../img/fifo-calc.gif';
import calculatorGIF from '../img/calculator.gif';
import weatherAppGIF from '../img/weather-app.gif';
import ticTacToeGIF from '../img/tic-tac-toe.gif';
import shoppingCartGIF from '../img/shopping-cart.gif';
import todoListGIF from '../img/todo-list.gif';
import battleshipGIF from '../img/battleship.gif';
import cocktailMixerGIF from '../img/cocktail-mixer.gif';
import CVGeneratorGIF from '../img/cv-generator.gif';
import MobileMenuGIF from '../img/mobile-menu.gif';
import MemoryCardGIF from '../img/memory-card.gif';
import matrixaccsFrontendGIF from '../img/matrixaccs-frontend.gif';
import personalWebsiteGIF from '../img/personal-website.gif';
import tikTokCloneGIF from '../img/tiktok-clone.gif';

// PNG
import fifoCalcPNG from '../img/fifo-calc.png';
import calculatorPNG from '../img/calculator.png';
import weatherAppPNG from '../img/weather-app.png';
import ticTacToePNG from '../img/tic-tac-toe.png';
import shoppingCartPNG from '../img/shopping-cart.png';
import todoListPNG from '../img/todo-list.png';
import battleshipPNG from '../img/battleship.png';
import cocktailMixerPNG from '../img/cocktail-mixer.png';
import CVGeneratorPNG from '../img/cv-generator.png';
import MobileMenuPNG from '../img/mobile-menu.png';
import MemoryCardPNG from '../img/memory-card.png';
import matrixaccsFrontendPNG from '../img/matrixaccs-frontend.png';
import personalWebsitePNG from '../img/personal-website.png';
import tikTokClonePNG from '../img/tiktok-clone.png';

const projects = [
    {
        order: 4,
        title: 'Capital Gains Calculator',
        description: "Calculate your capital gains with the FiFo method with CSV's from Trading212 or Revolut.",
        id: 'fifo-calc',
        titleImage: fifoCalcPNG,
        overviewImage: fifoCalcGIF,
        deploy: 'https://trading-csv-fifo-calculator.web.app/',
        git: 'https://github.com/martenmatrix/capital-gains-trading-calculator',
        readme: 'https://raw.githubusercontent.com/martenmatrix/capital-gains-trading-calculator/master/README.md',
    },
    {
        order: 10,
        title: 'Calculator',
        description: 'Simple calculator, which calculates results without the dangerous eval() function.',
        id: 'calculator',
        titleImage: calculatorPNG,
        overviewImage: calculatorGIF,
        deploy: 'https://martenmatrix.github.io/calculator/',
        git: 'https://github.com/martenmatrix/calculator/',
        readme: 'https://raw.githubusercontent.com/martenmatrix/calculator/main/README.md',
        hide: true,
    },
    {
        order: 3,
        title: 'Weather App',
        description: 'Uses the OpenWeatherMap API to display the current weather for an entered location.',
        id: 'weather-app',
        titleImage: weatherAppPNG,
        overviewImage: weatherAppGIF,
        deploy: 'https://martenmatrix.github.io/weather-app/',
        git: 'https://github.com/martenmatrix/weather-app/',
        readme: 'https://raw.githubusercontent.com/martenmatrix/weather-app/main/README.md',
    },
    {
        order: 5,
        title: 'Tic Tac Toe',
        description: "Play TicTacToe against a friend or an AI, which uses a backtracking algorithm. Try to beat the AI, you won't.",
        id: 'tic-tac-toe',
        titleImage: ticTacToePNG,
        overviewImage: ticTacToeGIF,
        deploy: 'https://martenmatrix.github.io/tic-tac-toe/',
        git: 'https://github.com/martenmatrix/tic-tac-toe',
        readme: 'https://raw.githubusercontent.com/martenmatrix/tic-tac-toe/main/README.md',
        hide: true,
    },
    {
        order: 3,
        title: 'Shopping Cart',
        description: 'Visit a fake online-store, where the exact state of the page is saved in the URL.',
        id: 'shopping-cart',
        titleImage: shoppingCartPNG,
        overviewImage: shoppingCartGIF,
        deploy: 'https://martenmatrix.github.io/shopping-cart/',
        git: 'https://github.com/martenmatrix/shopping-cart',
        readme: 'https://raw.githubusercontent.com/martenmatrix/shopping-cart/main/README.md',
    },
    {
        order: 11,
        title: 'CV Generator',
        description: 'Generate your own Curriculum Vitae.',
        id: 'cv-generator',
        titleImage: CVGeneratorPNG,
        overviewImage: CVGeneratorGIF,
        deploy: 'https://martenmatrix.github.io/cv-generator/',
        git: 'https://github.com/martenmatrix/cv-generator',
        readme: 'https://raw.githubusercontent.com/martenmatrix/cv-generator/main/README.md',
        hide: true,
    },
    {
        order: 1,
        title: 'Cocktail Mixer',
        description: 'This is the frontend and backend code for a physical Cocktail Mixer machine. A vague build guide is also included.',
        id: 'cocktail-mixer',
        titleImage: cocktailMixerPNG,
        overviewImage: cocktailMixerGIF,
        deploy: '#',
        git: 'https://github.com/martenmatrix/cocktail-mixer',
        readme: 'https://raw.githubusercontent.com/martenmatrix/cocktail-mixer/main/README.md',
    },
    {
        order: 7,
        title: 'Battleship',
        description: 'Play the classic Battleship Game against against a computer, which uses a bit of AI.',
        id: 'battleship',
        titleImage: battleshipPNG,
        overviewImage: battleshipGIF,
        deploy: 'https://martenmatrix.github.io/odin-battleship/',
        git: 'https://github.com/martenmatrix/odin-battleship',
        readme: 'https://raw.githubusercontent.com/martenmatrix/battleship/main/README.md',
        hide: true,
    },
    {
        order: 8,
        title: 'Memory Card Game',
        description: "This application puts your memory to the test. You'll have to click each image only one time.",
        id: 'memory-card',
        titleImage: MemoryCardPNG,
        overviewImage: MemoryCardGIF,
        deploy: 'https://martenmatrix.github.io/memory-card/',
        git: 'https://github.com/martenmatrix/odin-memory-card',
        readme: 'https://raw.githubusercontent.com/martenmatrix/memory-card/main/README.md',
    },
    {
        id: 'javascript-form',
        deploy: 'https://martenmatrix.github.io/odin-javascript-form/',
        git: 'https://github.com/martenmatrix/odin-javascript-form',
        hide: true
    },
    {
        id: 'restaurant-page',
        deploy: 'https://martenmatrix.github.io/restaurant-page/',
        git: 'https://github.com/martenmatrix/restaurant-page',
        hide: true
    },
    {
        order: 9,
        title: 'ToDo List',
        description: "Create ToDo's, assign them with a priority, date and description or group them.",
        id: 'todo-list',
        titleImage: todoListPNG,
        overviewImage: todoListGIF,
        deploy: 'https://martenmatrix.github.io/todo-list/',
        git: 'https://github.com/martenmatrix/todo-list',
        readme: 'https://raw.githubusercontent.com/martenmatrix/todo-list/main/README.md',
        hide: true,
    },
    {
        order: 12,
        title: 'Mobile Menu',
        description: 'Lightweight and customizable mobile menu for the web.',
        id: 'mobile-menu',
        titleImage: MobileMenuPNG,
        overviewImage: MobileMenuGIF,
        deploy: 'https://martenmatrix.github.io/mobile-menu/',
        git: 'https://github.com/martenmatrix/mobile-menu',
        readme: 'https://raw.githubusercontent.com/martenmatrix/mobile-menu/main/README.md',
        hide: true,
    },
    {
        order: 6,
        title: 'Landing Page for matrixaccs',
        description: 'Landing Page for a business, which sells utilities to help customers secure limited products.',
        id: 'matrixaccs-frontend',
        titleImage: matrixaccsFrontendPNG,
        overviewImage: matrixaccsFrontendGIF,
        deploy: 'https://www.matrixaccs.com',
        git: 'https://github.com/martenmatrix/matrixaccs-frontend-public',
        readme: 'https://raw.githubusercontent.com/martenmatrix/matrixaccs-frontend-public/master/README.md',
    },
    {
        order: 2,
        title: 'Personal Website',
        description: 'Template for a slick and lightweight Personal Website, which can easily be customized.',
        id: 'personal-website',
        titleImage: personalWebsitePNG,
        overviewImage: personalWebsiteGIF,
        deploy: 'https://marten.codes',
        git: 'https://github.com/martenmatrix/personal-website',
        readme: 'https://raw.githubusercontent.com/martenmatrix/personal-website/master/README.md',
    },
    {
        order: 2,
        title: 'TikTok Clone',
        description: 'Replicates the functionality of a social media platform named TikTok',
        id: 'tiktok-clone',
        titleImage: tikTokClonePNG,
        overviewImage: tikTokCloneGIF,
        deploy: 'https://tiktok-clone-123456789.web.app/',
        git: 'https://github.com/martenmatrix/tiktok-clone',
        readme: 'https://raw.githubusercontent.com/martenmatrix/tiktok-clone/main/README.md',
    }
    // maybe python codebases, however there is some confidential information in it, make sure to delete the file from the complete history
]

export default projects;