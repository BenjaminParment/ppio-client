import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    clicked = false;

    constructor() {}

    onClick = () => {
        this.clicked = true;
    };

    ngOnInit(): void {}
}
