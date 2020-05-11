import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { PlayerFormComponent } from 'app/player-form/player-form.component';

@NgModule({
    imports: [CommonModule, PlayerFormComponent],
    declarations: [HomeComponent],
    exports: [HomeComponent],
})
export class HomeModule {}
