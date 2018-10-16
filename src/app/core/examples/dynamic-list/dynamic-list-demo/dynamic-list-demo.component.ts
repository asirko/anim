import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dynamic-list-demo',
  templateUrl: './dynamic-list-demo.component.html',
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0, maxHeight: '0'})),
      state('*', style({opacity: 1, maxHeight: '30px'})),
      transition('* => void', animate(1000)),
      transition('void => *', animate(1000)),
    ])
  ]
})
export class DynamicListDemoComponent implements OnInit {

  test: string[] = [];

  constructor() { }

  ngOnInit() {
    interval(1000).subscribe(compteur => {
      this.test.push(`valeur ${compteur}`);
      if (this.test.length > 4) {
        this.test.splice(0, 1);
      }
    });
  }

}
