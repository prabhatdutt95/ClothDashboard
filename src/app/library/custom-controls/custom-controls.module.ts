import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule, SharedModule],
  exports: [CounterComponent],
})
export class CustomControlsModule {}
