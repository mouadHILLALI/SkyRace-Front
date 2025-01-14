import {
    trigger,
    transition,
    style,
    animate,
    query,
    group,
  } from '@angular/animations';
  

  export const globalRouteAnimations = trigger('globalRouteAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          opacity: 0,
        }),
      ], { optional: true }),
      query(':enter', [style({ opacity: 0 })], { optional: true }), 
      group([
        query(':leave', [animate('300ms ease-out', style({ opacity: 0 }))], { optional: true }), 
        query(':enter', [animate('300ms ease-out', style({ opacity: 1 }))], { optional: true }), 
      ]),
    ]),
  ]);
  
  