import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoginInfoComponent } from './components/login-info/login-info.component';
import { FilteringBarComponent } from './components/filtering-bar/filtering-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchBarComponent, LoginInfoComponent, FilteringBarComponent, SearchResultsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
