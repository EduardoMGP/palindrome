import { App } from './app';
import {ApiController} from './controllers/api.controller';
import {PageController} from "./controllers/page.controller";

const apiController = new ApiController();
const pageController = new PageController();

const application = new App();
application.listen(3000);
const app = application.app();

// Rotas da API
app.get('/palindrome/:word', apiController.palindrome.bind(apiController));


// Rotas do site
app.get('/', pageController.index.bind(pageController));