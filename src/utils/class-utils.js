import css from 'components/Statistics/Statistics.module.css';

export function setColorClass(percentage) {
  const classes = [
    css.item_0,
    css.item_20,
    css.item_40,
    css.item_60,
    css.item_80,
  ];
  let index = Math.floor(percentage / 20);
  index = index >= 0 && index <= 5 ? index : 0; 
  return classes[index];
}
