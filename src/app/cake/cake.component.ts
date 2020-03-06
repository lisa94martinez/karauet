import { Component, OnInit } from '@angular/core';
import { cakeSizes } from '../cakeSizes';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {
  cakeSizes = cakeSizes;
  shapes: string[];

  constructor() { }

  ngOnInit() {
  }

  showSelected() {
    console.log(this.shapes)
  }

}
