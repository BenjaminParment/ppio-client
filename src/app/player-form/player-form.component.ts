import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NetworkService } from 'app/core/services/network.service';
import { Player } from './player/player';

@Component({
    selector: 'app-player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.scss'],
    providers: [NetworkService],
})
export class PlayerFormComponent implements OnInit {
    playerForm: FormGroup;

    constructor(private fb: FormBuilder, private networkTest: NetworkService<Player>) {}

    ngOnInit() {
        this.playerForm = this.fb.group({
            first_name: '',
            last_name: '',
            email: '',
        });
    }

    onSubmit = () => {
        console.log(this.playerForm.value);
        this.networkTest
            .post('players', {
                first_name: this.playerForm.value.first_name,
                last_name: this.playerForm.value.last_name,
                email: this.playerForm.value.email,
            })
            .subscribe((x) => console.log(x));
    };
}
