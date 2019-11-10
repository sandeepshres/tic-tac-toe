import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss'],
})
export class GameboardComponent implements OnInit {

  @Input() squares: Array<string>;
  @Input() player: string;
  @Input() winner: string;

  constructor() { }

  ngOnInit() { }

  handleMove(position) {
    if (!this.winner && !this.squares[position]) {
      this.squares[position] = this.player;
      if (this.winnigMove()) {
        this.winner = this.player;
      } else if (!this.winnigMove()) {
      }
      this.player = this.player === 'X' ? 'O' : 'X';
    }
  }

  winnigMove() {
    const conditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let condition of conditions) {
      if (this.squares[condition[0]] && this.squares[condition[0]] === this.squares[condition[1]]
        && this.squares[condition[1]] === this.squares[condition[2]]) {
        return true;
      }
    }
    return false;
  }

}
