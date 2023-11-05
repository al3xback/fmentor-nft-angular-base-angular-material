import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './main/card/card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MainComponent,
		CardComponent,
		FooterComponent
	],
	imports: [BrowserModule, MatButtonModule, MatCardModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
