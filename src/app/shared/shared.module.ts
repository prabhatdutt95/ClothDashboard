import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CustomComponentsModule } from '../library/custom-components/custom-components.module';
import { CustomControlsModule } from '../library/custom-controls/custom-controls.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CatalogueService } from './services/catalogue.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule, FormsModule, FontAwesomeModule],
  exports: [CommonModule, FormsModule, FontAwesomeModule],
  providers: [CatalogueService],
})
export class SharedModule {}
