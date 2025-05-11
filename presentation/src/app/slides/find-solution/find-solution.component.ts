import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-find-solution',
  templateUrl: './find-solution.component.html',
  styleUrls: ['./find-solution.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FindSolutionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly code = `const ROUTES = {
  home: () => '/home',
  topics: () => '/topics'
};

ROUTES.topics.travel = () => ROUTES.topics() + '/travel';
ROUTES.topics.travel.spain = () => ROUTES.topics.travel() + '/spain';
ROUTES.topics.travel.england= () => ROUTES.topics.travel() + '/england';

ROUTES.topics.cooking = () => ROUTES.topics() + '/cooking';
ROUTES.topics.cooking.lembas = () => ROUTES.topics.cooking() + '/lembas';

const routeToCooking = ROUTES.topics.cooking();        // /topics/cooking
const routeToLembas =  ROUTES.topics.cooking.lembas(); // /topics/cooking/lembas`;

  public attachEventListeners() {
    setTimeout(() => {
      const codeLines = document.querySelectorAll("tr");
      console.log("Attaching listeners to", codeLines);
      codeLines.forEach(element => element.addEventListener('click', (event) => {
        console.log("Removing blur from", event.currentTarget);
        // (event.currentTarget as HTMLElement).style.filter = "none";
        (event.currentTarget as HTMLElement).classList.toggle("no-blur");
        console.log((event.currentTarget as HTMLElement).style.filter)
      }));
    }, 500);
  }
}
