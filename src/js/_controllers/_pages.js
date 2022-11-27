import HomeVisual from '../_modules/_home/_visual';
import Slide from '../_modules/_about/_slide';

export default class {
    constructor(){}
    init(){
        if (APP.checkPage.check('home')) {
            this.visual = new HomeVisual();
            this.visual.init();
        }

        if (APP.checkPage.check('about')) {
            this.slide = new Slide();
            this.slide.init();
        }
    }
}