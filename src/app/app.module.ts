import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.components';
import { PanelASection } from './components/section/panela/panela';
import { PanelBSection } from './components/section/panelb/panelb';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PanelASection,
    PanelBSection
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
