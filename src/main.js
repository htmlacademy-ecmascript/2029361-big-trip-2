import BoardPresenter from '../src/presenter/board-presenter.js';


const siteHeaderElement = document.querySelector('.trip-main');
const saitMainElement = document.querySelector('.trip-events');
const saitContorlsElement = siteHeaderElement.querySelector('.trip-controls__filters');

const boardPresenter = new BoardPresenter(
  {
    headerContainer: siteHeaderElement,
    mainContainer: saitMainElement,
    contolsFilter: saitContorlsElement
  }
);

boardPresenter.init();
