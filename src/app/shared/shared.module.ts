import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyLoadingComponent } from './components/lazyLoading/lazyLoading.component';


@NgModule({
  declarations: [
    SidebarComponent,
    LazyLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LazyLoadingComponent
  ]
})
export class SharedModule { }
