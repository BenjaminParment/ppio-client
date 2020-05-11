import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { PlayerFormComponent } from './player-form/player-form.component';

@NgModule({
    declarations: [AppComponent, PlayerFormComponent],
    imports: [BrowserModule, HomeModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
