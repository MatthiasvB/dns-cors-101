import { buildRoutes } from 'that-routing-lib';

const routesInput = {
  travel: {
    subRoutes: {
      spain: {},
      england: {}
    }
  },
  topics: {
    subRoutes: {
      cooking: {
        subRoutes: {
          lembas: {}
        }
      }
    }
  }
};

const ROUTES = buildRoutes(routesInput);
const routeToLembas = ROUTES.topics.cooking.lembas(); // 💚 topics/cooking/lembas
