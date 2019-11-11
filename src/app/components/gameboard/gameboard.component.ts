import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss'],
})
export class GameboardComponent implements OnInit {

  player: string;
  winner: string;
  squares: string[];
  @Output() playerEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  handleMove(position: number) {
    if (!this.winner && !this.squares[position]) {
      this.squares[position] = this.player;
      if (this.winningMove()) {
        this.winner = this.player;
      }
      this.player = (this.player === 'X') ? 'O' : 'X';
      this.playerEvent.emit(this.player);
    }
  }

  winningMove() {
    const conditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (const condition of conditions) {
      if (
        this.squares[condition[0]] &&
        this.squares[condition[0]] === this.squares[condition[1]] &&
        this.squares[condition[1]] === this.squares[condition[2]]
      ) {
        return true;
      }
    }
    return false;
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.player = 'X';
    this.winner = null;
    this.playerEvent.emit(this.player);
  }
}
