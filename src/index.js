import { store, actionNextColor, actionPreviousColor } from './state';

const btnNextColor = document.querySelector('#next');
const btnPreviousColor = document.querySelector('#previous');

btnNextColor.addEventListener('click', () => {
  store.dispatch(actionNextColor);
});

btnPreviousColor.addEventListener('click', () => {
  store.dispatch(actionPreviousColor);
});

store.subscribe(() => {
  const globalState = store.getState();
  const { index, colors } = globalState;
  const color = document.querySelector('#value');
  color.innerHTML = colors[index];
});
