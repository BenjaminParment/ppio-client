import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoSvg } from 'assets/svgs/logo/logo.component';
import { NgModule } from '@angular/core';
import { PlayerFormComponent } from 'app/player-form/player-form.component';

@NgModule({
    declarations: [HomeComponent, PlayerFormComponent, LogoSvg],
    imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
    providers: [],
    exports: [HomeComponent],
})
export class HomeModule {}
