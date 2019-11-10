import { Component, OnInit } from '@angular/core';
import { GameboardComponent } from '../../components/gameboard/gameboard.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  squares = Array(9).fill(null);
  player = 'X';
  winner = null;

  constructor() { }

  ngOnInit() {
  }

  restartGame() {
    this.squares = Array(9).fill(null);
    this.player = 'X';
    this.winner = null;
  }
}
