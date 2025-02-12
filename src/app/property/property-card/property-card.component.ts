import { Component } from '@angular/core';

@Component({
    selector: 'app-property-card',
    // template: ``,
    templateUrl: './property-card.component.html',
    // styles: [],
    styleUrls: ['./property-card.component.css']
})

export class PropertyCardComponent{

    property:any={
        "id":1,
        "Name":"Aradhana",
        "Type":"House",
        "Price":20000,
    }
}