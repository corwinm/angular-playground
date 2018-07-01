import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pg-picture-grid',
  templateUrl: './picture-grid.component.html',
  styleUrls: ['./picture-grid.component.scss']
})
export class PictureGridComponent implements OnInit {
  tags = [
    'hat',
    'cute',
    'box',
    'jump',
    'smile',
    'eyes'
  ];

  constructor() { }

  ngOnInit() {
  }

  catClicked() {
    console.log('Cat Clicked');
  }
}
