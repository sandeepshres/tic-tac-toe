import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage {

  player = 'X';

  constructor() { }

  receivePlayer($event) {
    this.player = $event;
  }
}
