import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { RoutingModule } from './/routing.module';
import { MatModule } from './/mat.module';

@NgModule({
  declarations: [AppComponent, ContentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    FlexLayoutModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
