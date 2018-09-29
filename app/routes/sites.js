import Route from '@ember/routing/route';

export default class SitesRoute extends Route {
  model () {
    return [
      {
        id: 1,
        name: 'Worksite 1'
      },
      {
        id: 2,
        name: 'Worksite 2'
      }
    ]
  }
}
