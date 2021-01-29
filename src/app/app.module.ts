import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HoverDirective } from './directives/hover.directive';
import { RoundCornersDirective } from './directives/round-corners.directive';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GenericButtonComponent } from './components/generic-button/default-button.component';
import { FieldHeaderComponent } from './components/field-header/field-header.component';
import { CustomTextareaComponent } from './components/custom-textarea/custom-textarea.component';

// test
@NgModule({
  declarations: [
    AppComponent,
    GenericButtonComponent,
    HoverDirective,
    RoundCornersDirective,
    FieldHeaderComponent,
    CustomTextareaComponent,
  ],
  imports: [
    BrowserModule,
    MatTooltipModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
