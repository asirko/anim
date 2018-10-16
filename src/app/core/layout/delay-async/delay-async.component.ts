import { Component, OnDestroy } from '@angular/core';
import { interval, Subject, timer } from 'rxjs';
import { delayWhen, map, startWith, tap } from 'rxjs/operators';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';

const QUESTIONS = [
  '1. Une première question pour la forme',
  '2. Une autre question pour la route',
  '3. Avec une troisième c\'est mieux',
];

@Component({
  selector: 'app-about',
  templateUrl: './delay-async.component.html',
  animations: [
    trigger('transition', [
      state('in', style({opacity: 1})),
      state('out', style({opacity: 0})),
      transition('in <=> out', animate(500))
    ])
  ]
})
export class DelayAsyncComponent implements OnDestroy {
  state;
  canShowNext$ = new Subject();

  /**
   * Données de mon service qui bouge au cours du temps
   */
  question$ = interval(2000).pipe(
    map(index => index + 1), // décale les valeurs avant le startWith
    startWith(0), // pour avoir une valeur immédiatement
    map(index => QUESTIONS[index % QUESTIONS.length]),
  );

  questionForAnimation$ = this.question$.pipe(
    tap(() => this.state = !this.state ? 'in' : 'out'), // initiallement l'afficher in sans transition
    delayWhen(() => this.state === 'in' ? timer(0) : this.canShowNext$),
  );

  constructor() {}

  ngOnDestroy(): void {
    this.canShowNext$.complete();
  }

  animationEnded(e: AnimationEvent /* de @angular/animations */): void {
    if (e.toState === 'out') {
      this.state = 'in';
      this.canShowNext$.next();
    }
  }

  getComponentText(): string {
    return `
\`\`\`typescript
import { Component, OnDestroy } from '@angular/core';
import { interval, Subject, timer } from 'rxjs';
import { delayWhen, map, startWith, tap } from 'rxjs/operators';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';

const QUESTIONS = [
  '1. Une première question pour la forme',
  '2. Une autre question pour la route',
  '3. Avec une troisième c\\'est mieux',
];

@Component({
  selector: 'app-about',
  templateUrl: './delay-async.component.html',
  animations: [
    trigger('transition', [
      state('in', style({opacity: 1})),
      state('out', style({opacity: 0})),
      transition('in <=> out', animate(500))
    ])
  ]
})
export class DelayAsyncComponent implements OnDestroy {
  state;
  canShowNext$ = new Subject();

  /**
   * Données de mon service qui bouge au cours du temps
   */
  question$ = interval(2000).pipe(
    map(index => index + 1), // décale les valeurs avant le startWith
    startWith(0), // pour avoir une valeur immédiatement
    map(index => QUESTIONS[index % QUESTIONS.length]),
  );

  questionForAnimation$ = this.question$.pipe(
    tap(() => this.state = !this.state ? 'in' : 'out'), // initiallement l'afficher in sans transition
    delayWhen(() => this.state === 'in' ? timer(0) : this.canShowNext$),
  );

  constructor() {}

  ngOnDestroy(): void {
    this.canShowNext$.complete();
  }

  animationEnded(e: AnimationEvent /* de @angular/animations */): void {
    if (e.toState === 'out') {
      this.state = 'in';
      this.canShowNext$.next();
    }
  }

}
\`\`\`
`;
  }



}
