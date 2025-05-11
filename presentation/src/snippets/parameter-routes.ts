import { buildRoutes, buildRoutesForAngularRouter, getParameterExtractor } from 'that-routing-lib';

const routesInput = {
  data: {
    segmentName: '/data', // overwrite string for leading '/'
    subRoutes: {
      byId: {
        segmentName: 'by-id', // 💝 avoid ROUTES.data["by-id"].$id('4');
        subRoutes: {
          $id: {
            subRoutes: {
              name: {}
            }
          }
        }
      }
    }
  },
  post: {
    segmentName: '/post', // overwrite string for leading '/'
    subRoutes: {
      user: {
        subRoutes: {
          $userId: {}
        }
      }
    }
  }
}

const ROUTES = buildRoutes(routesInput);
const routeToAllData = ROUTES.data();                      // 💚 "/data"
const routeToMyData  = ROUTES.data.byId.$id('4')();        // 💚 "/data/by-id/4"
const routeToMyName  = ROUTES.data.byId.$id('4').name();   // 💚 "/data/by-id/4/name"
const routeToMyPost  = ROUTES.post.user.$userId('eyzq')(); // 💚 "/post/user/eyzq"
const routeNoExists  = ROUTES.wrong.route();               // ❤️‍🔥 TS error

const ROUTE_DEFINITIONS = buildRoutesForAngularRouter(routesInput);
// 💚 "data/by-id/:id/name"
const routeDefForMyDataName = ROUTE_DEFINITIONS.data.byId.$id.name();

const PARAMETERS = getParameterExtractor().extract(routesInput);
const id = PARAMETERS.$id;           // 💚 "id"
const userId = PARAMETERS.$userId;   // 💚 "userId"
const noExist = PARAMETERS.$noExist; // ❤️‍🔥 TS error
