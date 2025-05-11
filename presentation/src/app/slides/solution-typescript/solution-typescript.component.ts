import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution-typescript',
  templateUrl: './solution-typescript.component.html',
  styleUrls: ['./solution-typescript.component.scss']
})
export class SolutionTypescriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly code = `export const ROUTES = {
  travel: Object.assign(
    () => '/travel',
    {
      spain: () => ROUTES.travel() + '/spain',
      england: () => ROUTES.travel() + '/england'
    }
  ),
  topics: Object.assign(
    () => '/topics',
    {
      cooking: Object.assign(
        () => ROUTES.topics() + '/cooking',
        {
          lembas: () => ROUTES.topics.cooking() + '/lembas'
        }
      ),
    }
  )
};`;

}
