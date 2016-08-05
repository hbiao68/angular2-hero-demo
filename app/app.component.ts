import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService } from './hero.service';
import './rxjs-extensions';


@Component({
    selector: 'my-app',
    templateUrl: 'app/template/app.component.html',
    styleUrls: ['app/style/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})

export class AppComponent {
    title = 'Tour of Heroes'
}