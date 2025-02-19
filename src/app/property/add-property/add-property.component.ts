import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  @ViewChild('Form') addPropertyForm:NgForm | undefined;
  constructor(private router:Router){

  }
  ngOnInit() {
 

  }
  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    // console.log("NgForm:",Form);
    console.log("addPropertyForm" , this.addPropertyForm)
  }

}
