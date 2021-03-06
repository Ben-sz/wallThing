import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCoreComponent } from './app-core/app-core.component';
import { ImageBrowserUnsplashComponent } from './image-browser-unsplash/image-browser-unsplash.component';
import { HttpClientModule} from '@angular/common/http';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { BorderPickerComponent } from './border-picker/border-picker.component'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './header/header.component';
import { ImageBrowserARTSYComponent } from './image-browser-artsy/image-browser-artsy.component'
import {MatButtonModule} from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import {MatRadioModule} from '@angular/material/radio'; 


@NgModule({
  declarations: [
    AppComponent,
    AppCoreComponent,
    ImageBrowserUnsplashComponent,
    ImageUploadComponent,
    BorderPickerComponent,
    HeaderComponent,
    ImageBrowserARTSYComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
