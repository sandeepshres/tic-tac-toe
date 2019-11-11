import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameboardComponent } from './gameboard.component';
import { CommonModule } from '@angular/common';

describe('GameboardComponent', () => {
  let component: GameboardComponent;
  let fixture: ComponentFixture<GameboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameboardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an initial value of player as x, winner as null, and all of grid cells as null', () => {
    expect(component.player).toBe('X');
    expect(component.winner).toBe(null);
    expect(component.squares.every((square) => square == null)).toBe(true);
  });

  it('should toggle player value between X and O when clicked on each different cell', () => {
    expect(component.player).toBe('X');
    component.handleMove(0);
    expect(component.player).toBe('O');
    component.handleMove(4);
    expect(component.player).toBe('X');
  });

  it('should not change player value when double clicked on same cell', () => {
    component.handleMove(0);
    expect(component.player).toBe('O');
    component.handleMove(0);
    expect(component.player).toBe('O');
  });

  it('should reset the player value to X, winner to null, and each cell of array to null when newgame button is clicked', () => {
    component.newGame();
    expect(component.player).toBe('X');
    expect(component.winner).toBe(null);
    expect(component.squares.every((square) => square == null)).toBe(true);
  });
});
