import { Component, Input } from '@angular/core';
import { IProperty } from '../IProperty.interface';

@Component({
    selector: 'app-property-card',
    // template: ``,
    templateUrl: './property-card.component.html',
    // styles: [],
    styleUrls: ['./property-card.component.css']
})

export class PropertyCardComponent{
    @Input()
    property!: IProperty;
}