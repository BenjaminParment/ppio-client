import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NetworkService } from 'app/core/services/network.service';
import { Player } from './player/player';

@Component({
    selector: 'app-player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent implements OnInit {
    playerForm: FormGroup;
    networkTest: NetworkService<Player>;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.playerForm = this.fb.group({
            first_name: '',
            last_name: '',
            email: '',
        });
    }

    onSubmit = () => {
        console.log(this.playerForm.value);
        this.networkTest.post('/players', this.playerForm.value as Player);
    };
}
