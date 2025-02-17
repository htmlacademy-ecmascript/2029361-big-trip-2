import NewListSortView from '../view/new-list-sort-view.js';
import NewFilterView from '../view/new-filter-view.js';
import NewInfoTripView from '../view/new-info-trip-view.js';
import NewPointView from '../view/new-point-view.js';
import NewEditFormView from '../view/new-edit-form-view.js';
import NewContentListView from '../view/new-content-list-view.js';
import { RenderPosition } from '../render.js';
import { render } from '../render.js';

export default class BoardPresenter {
  constructor({headerContainer, mainContainer, contolsFilter: controlsFilter}){
    this.headerContainer = headerContainer;
    this.mainContainer = mainContainer;
    this.contolsFilter = controlsFilter;
  }

  init() {
    render(new NewInfoTripView(), this.headerContainer, RenderPosition.AFTERBEGIN);
    render(new NewFilterView(), this.contolsFilter, RenderPosition.BEFOREEND);

    render(new NewListSortView(), this.mainContainer, RenderPosition.BEFOREEND);

    // Создаем экземпляр ContentList (контейнер для списка точек маршрута) и отрисовываем его
    const contentList = new NewContentListView();
    render(contentList, this.mainContainer, RenderPosition.BEFOREEND);

    // Цикл для создания и отрисовки трех точек маршрута внутри контейнера списка
    for(let i = 0; i < 3; i++){
      // Создаем экземпляр PointView, отрисовываем его
      render(new NewPointView(), contentList.getElement(), RenderPosition.BEFOREEND);
    }

    render(new NewEditFormView(), contentList.getElement(), RenderPosition.AFTERBEGIN);
  }
}
