import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

/**
 * Animation for a staggered entry of items in a list.
 */
export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({opacity: 0}), stagger('15ms', animate('150ms ease-out', style({opacity: 1})))],
      {optional: true}
    ),
    query(':leave',
      animate('100ms', style({opacity: 0})),
      {optional: true}
    )
  ])
]);
