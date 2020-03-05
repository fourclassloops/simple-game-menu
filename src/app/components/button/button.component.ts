import { Component, Input } from '@angular/core';

@Component({
    selector: 'fcl-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

    @Input() label = 'No Name';
    @Input() width = '250px';

    constructor() { }
}
