import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const expandOrCollapse = trigger('expandOrCollapse', [
  state(
    'collapsed',
    style({
      height: '0px',
    })
  ),
  state(
    'expanded',
    style({
      height: 'fit-content',
    })
  ),
  transition('collapsed <=> expanded', animate(900)),
]);

export const myAnimations = [expandOrCollapse];
