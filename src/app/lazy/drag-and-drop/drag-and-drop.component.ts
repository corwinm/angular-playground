import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pg-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  board = [
    [
      {
        label: 'Rook',
        icon: '♜',
        color: 'black'
      },
      {
        label: 'Knight',
        icon: '♞',
        color: 'black'
      },
      {
        label: 'Bishop',
        icon: '♝',
        color: 'black'
      },
      {
        label: 'Queen',
        icon: '♕',
        color: 'black'
      },
      {
        label: 'King',
        icon: '♚',
        color: 'black'
      },
      {
        label: 'Bishop',
        icon: '♝',
        color: 'black'
      },
      {
        label: 'Knight',
        icon: '♞',
        color: 'black'
      },
      {
        label: 'Rook',
        icon: '♜',
        color: 'black'
      }
    ],
    Array(8).fill({
      label: 'Pawn',
      icon: '♟',
      color: 'black'
    }),
    Array(8),
    Array(8),
    Array(8),
    Array(8),
    Array(8).fill({
      label: 'Pawn',
      icon: '♟',
      color: 'white'
    }),
    [
      {
        label: 'Rook',
        icon: '♜',
        color: 'white'
      },
      {
        label: 'Knight',
        icon: '♞',
        color: 'white'
      },
      {
        label: 'Bishop',
        icon: '♝',
        color: 'white'
      },
      {
        label: 'Queen',
        icon: '♕',
        color: 'white'
      },
      {
        label: 'King',
        icon: '♚',
        color: 'white'
      },
      {
        label: 'Bishop',
        icon: '♝',
        color: 'white'
      },
      {
        label: 'Knight',
        icon: '♞',
        color: 'white'
      },
      {
        label: 'Rook',
        icon: '♜',
        color: 'white'
      }
    ]
  ];

  // Manually moving a peice and mobile support
  selectedPeice = undefined;

  constructor() { }

  ngOnInit() {
  }

  dragStart(event, row, col) {
    console.log(event);
    if (this.board[row][col]) {
      event.dataTransfer.setData('row', row);
      event.dataTransfer.setData('col', col);
    } else {
      event.preventDefault();
    }
  }

  allowDrop(event, row, col) {
    event.preventDefault();
  }

  drop(event, row, col) {
    console.log(event);
    event.preventDefault();
    const fromRow = event.dataTransfer.getData('row');
    const fromCol = event.dataTransfer.getData('col');
    const gamePeice = this.board[fromRow][fromCol];
    this.board[fromRow][fromCol] = undefined;
    this.board[row][col] = gamePeice;
    this.selectedPeice = undefined;
  }

  manual(event, row, col) {
    if (this.selectedPeice) {
      // Setting down
      const fromRow = this.selectedPeice.row;
      const fromCol = this.selectedPeice.col;
      const gamePeice = this.board[fromRow][fromCol];
      this.board[fromRow][fromCol] = undefined;
      this.board[row][col] = gamePeice;
      this.selectedPeice = undefined;
    } else if (this.board[row][col]) {
      // Picking up
      this.selectedPeice = {row, col};
    }
  }

  debug(event, row, col) {
    console.log(event.type);
    // event.preventDefault();
  }
}
