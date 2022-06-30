import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { faCoffee, faCartShopping } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee, faCartShopping } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee, faCartShopping } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styles: [],
})
export class TopNavComponent implements OnInit {
  @Input() addedCatalogueItems: any;
  faCoffee = faCoffee;
  faCartShopping = faCartShopping;

  constructor() {}

  ngOnInit(): void {
    console.log(this.addedCatalogueItems);
  }
}
