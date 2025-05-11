import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-parameters-routes',
  templateUrl: './parameters-routes.component.html',
  styleUrls: ['./parameters-routes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ParametersRoutesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly code = `import { buildRoutes, buildRoutesForAngularRouter, extractParameters } from 'that-routing-lib';

const routesInput = {
  data: {
    segmentName: '/data', // overwrite string for leading '/'
    subRoutes: {
      byId: {
        segmentName: 'by-id', // 💝 avoid ROUTES.data["by-id"].$id('4');
        subRoutes: {
          $id: {
            subRoutes: {
              uname: {
                segmentName: "name" // name is readonly function property
              }
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
const routeToMyName  = ROUTES.data.byId.$id('4').uname();   // 💚 "/data/by-id/4/name"
const routeToMyPost  = ROUTES.post.user.$userId('eyzq')(); // 💚 "/post/user/eyzq"
const routeNoExists  = ROUTES.wrong.route();               // ❤️‍🔥 TS error

const ROUTE_DEFINITIONS = buildRoutesForAngularRouter(routesInput);
// 💚 "data/by-id/:id/name"
const routeDefForMyDataName = ROUTE_DEFINITIONS.data.byId.$id.uname();

const PARAMETERS = getParameterExtractor().extract(routesInput);
const id = PARAMETERS.$id;           // 💚 "id"
const userId = PARAMETERS.$userId;   // 💚 "userId"
const noExist = PARAMETERS.$noExist; // ❤️‍🔥 TS error`;

  public attachEventListeners() {
    setTimeout(() => {
      const codeBlock = document.querySelector("code")
      const codeLines = document.querySelectorAll("tr");
      console.log("Attaching listeners to", codeLines);
      codeLines.forEach((element, index) => element.addEventListener('click', (event) => {
        console.log("Index is ", index);
        console.log("Removing blur from", event.currentTarget);
        // (event.currentTarget as HTMLElement).style.filter = "none";
        if (this.indexInRange(index, 30, 35)) {
          codeBlock?.classList.toggle("show-client-api");
        } else if (this.indexInRange(index, 37, 39)) {
          codeBlock?.classList.toggle("show-router-api");
        } else if (this.indexInRange(index, 41, 44)) {
          codeBlock?.classList.toggle("show-parameter-api");
        }
      }));
    }, 500);
  }

  private indexInRange(index: number, start: number, end: number) {
    return index >= start && index <= end;
  }
}
