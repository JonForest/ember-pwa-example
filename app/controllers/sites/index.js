import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';

export default class SitesController extends Controller {
  @service router

  @action
  onResultClick (site) {
    this.router.transitionTo('sites.view', site)
  }
}
