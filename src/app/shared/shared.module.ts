import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [LoaderComponent, ErrorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [LoaderComponent, ErrorComponent],
  providers: [HttpService]
})
export class SharedModule { }
