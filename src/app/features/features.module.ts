// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Modules
import { SharedModule } from '../shared/shared.module';
import { CustomComponentsModule } from '../library/custom-components/custom-components.module';
import { CustomControlsModule } from '../library/custom-controls/custom-controls.module';

// Custom Components
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomComponentsModule,
    CustomControlsModule,
  ],
  exports: [HomeComponent],
})
export class FeaturesModule {}
