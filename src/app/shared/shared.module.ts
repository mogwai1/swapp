import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';;
import { RouterModule } from '@angular/router';
    
import { SwButtonComponent } from './components/sw-button/sw-button.component';
import { SwSelectComponent } from './components/sw-select/sw-select.component';
import { SwTextBoxComponent } from './components/sw-textbox/sw-textbox.component';;

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule],
  declarations: [SwButtonComponent, SwTextBoxComponent, SwSelectComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, SwButtonComponent, SwTextBoxComponent, SwSelectComponent],
  providers: []
})
export class SharedModule {
  static forRoot() : ModuleWithProviders<SharedModule>{
    return {
      ngModule : SharedModule
    };
  }
}



