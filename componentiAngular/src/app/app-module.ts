// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// 1. VERIFICA CHE CI SIA QUESTO IMPORT
import { Esercizio1 } from './esercizio1/esercizio1.component'; 

@NgModule({
  declarations: [
    AppComponent,
    // 2. VERIFICA CHE SIA STATO AGGIUNTO QUI
    Esercizio1 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }