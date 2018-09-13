import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

const defaultValues = { params: {
  width: 0,
  height: 0,
  translateX: 0,
  direction: 1,
}};
export const navigationTransition = trigger('navigationTransition', [
  state('*', style({ width: '{{width}}px', height: '{{height}}px', transform: 'translateX({{translateX}}px)' }), defaultValues),
  transition('* => *', animate('.3s ease-in-out')),
]);

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateX(calc({{direction}} * 100%))' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(calc({{direction}} * -100%))' }))
      ], { optional: true }),
    ])
  ])
]);
