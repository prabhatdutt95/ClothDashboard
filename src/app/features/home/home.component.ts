import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/shared/services/catalogue.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  catalogueItems: any[];
  addedCatalogueItems: any[];

  constructor(private catalogueService: CatalogueService) {
    this.catalogueItems = [];
    this.addedCatalogueItems = [];
  }

  ngOnInit(): void {
    this.catalogueService.getCatalogueList().subscribe((response) => {
      this.catalogueItems = response;
      this.addConfig();
    });
  }

  addConfig() {
    this.catalogueItems = this.catalogueItems.map((item) => {
      let quantityList = [...Array(item.quantity).keys()].map((x) => x + 1);
      item = {
        ...item,
        quantityList,
        selectedQuantity: 1,
        addedToCart: false,
      };
      return item;
    });
  }

  displayObject(catalogue: any) {
    // console.log(catalogue);
  }

  removeFromCart(indexPosition: any) {
    this.catalogueItems[indexPosition].addedToCart = false;
    this.catalogueItems[indexPosition].selectedQuantity = 1;
    this.filterAddedCatalogues();
  }

  filterAddedCatalogues() {
    // console.log('Modified Catalogue', this.catalogueItems);
    this.addedCatalogueItems = this.catalogueItems.filter(
      (item) => item.addedToCart
    );
    console.log('Modified Catalogue', this.addedCatalogueItems);
  }
}
