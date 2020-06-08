import { initMixin } from './init';
import { lifecycleMixin } from './lifecycle';
import { routerMixin } from './router';
import { renderMixin } from './render';
import { fetchMixin } from './fetch';
import { eventMixin } from './event';
import initGlobalAPI from './global-api';

export class Docsify extends initMixin(
  lifecycleMixin(routerMixin(renderMixin(fetchMixin(eventMixin()))))
) {
  constructor() {
    super();
    this._init();
  }
}

/**
 * Global API
 */
initGlobalAPI();