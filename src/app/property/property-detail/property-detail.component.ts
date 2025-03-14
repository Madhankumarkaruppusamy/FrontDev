import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent {
  public propertyId: number = 0;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['Id'];

    this.route.params.subscribe((params) => {
      this.propertyId = +params['Id'];
    });
  }
  onSelectNext() {
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
