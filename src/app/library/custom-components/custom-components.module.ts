import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TopNavComponent],
  imports: [CommonModule, SharedModule],
  exports: [TopNavComponent],
})
export class CustomComponentsModule {}
