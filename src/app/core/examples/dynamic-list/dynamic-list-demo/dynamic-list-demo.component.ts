import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
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
export class DynamicListDemoComponent implements OnInit, OnDestroy {

  dynamicArray: string[] = [];
  sub: Subscription;

  constructor() { }

  ngOnInit() {
    this.sub = interval(1000).subscribe(compteur => {
      this.dynamicArray.push(`valeur ${compteur}`);
      if (this.dynamicArray.length > 4) {
        this.dynamicArray.splice(0, 1);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
