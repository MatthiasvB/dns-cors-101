import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-lib-api',
  templateUrl: './lib-api.component.html',
  styleUrls: ['./lib-api.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LibApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly code = `import { buildRoutes } from 'that-routing-lib';

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
const routeToLembas = ROUTES.topics.cooking.lembas(); // 💚 topics/cooking/lembas`;

  public attachEventListeners() {
    setTimeout(() => {
      const code = document.querySelectorAll("code");
      console.log("Attaching listeners to", code);
      code.forEach(element => element.addEventListener('click', (event) => {
        console.log("Removing blur from", event.currentTarget);
        // (event.currentTarget as HTMLElement).style.filter = "none";
        (event.currentTarget as HTMLElement).classList.toggle("no-blur");
        console.log((event.currentTarget as HTMLElement).style.filter)
      }));
    }, 500);
  }

}
