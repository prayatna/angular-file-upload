import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatIconModule],
  declarations: [AppComponent, HelloComponent, FileUploadComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
