import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [],
})
export class CounterComponent implements OnInit {
  @Input() catalogue: any;
  @Output() modifiedCatalogue = new EventEmitter<boolean>();
  faMinus = faMinus;
  faPlus = faPlus;

  constructor() {}

  ngOnInit(): void {}

  modifyCart() {
    this.catalogue.addedToCart = !this.catalogue.addedToCart;
    this.modifiedCatalogue.emit(true);
  }

  changeSelectedQuantity(toBeIncreased: boolean = true) {
    this.catalogue.selectedQuantity += toBeIncreased ? 1 : -1;
    if (this.catalogue.selectedQuantity < 1) {
      this.catalogue.selectedQuantity += 1;
      this.catalogue.addedToCart = false;
    } else if (
      this.catalogue.selectedQuantity >
      this.catalogue.quantityList[this.catalogue.quantityList.length - 1]
    ) {
      this.catalogue.selectedQuantity -= 1;
    }
  }
}
