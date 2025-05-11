import {Component, OnInit} from '@angular/core';
import {categoryColorScaleRainbow} from '../../shared/utils';

@Component({
  selector: 'app-challenges-overview',
  templateUrl: './challenges-overview.component.html',
  styleUrls: ['./challenges-overview.component.scss']
})
export class ChallengesOverviewComponent {

  expectedColors: { [key in typeof this.expectedChallenges[number]]: string };

  realColors: { [key in typeof this.realChallenges[number]]: string };

  expectedIndex = 0;
  realIndex = 0;

  readonly expectedChallenges = [
    "Ein Problem finden",
    "Eine Lösung finden",
    "Die Lösung schön machen",
    "Die Lösung verallgemeinern",
    "Edge-Cases berücksichtigen",
    "Tests schreiben",
    "Einen Namen ausdenken",
    "Auf npm hochladen",
  ] as const;

  readonly realChallenges = [
    "Ein Problem finden",
    "Eine Lösung finden",
    "Einen Namen ausdenken",
    "Prüfen, ob der Name existiert, sonst neuer Name",
    "Auf npm hochladen",
    "Die Lösung schön machen",
    "Die Lösung verallgemeinern",
    "Edge-Cases berücksichtigen",
    "Tests schreiben",
    "Konfiguration anpassen um alles und jeden bedienen zu können",
    "Auf npm hochladen",
    "Für Bekanntheit sorgen (z.B. indem man Vorträge hält)",
    "Regelmäßig insignifikante Änderungen machen, damit es so aussieht, als würde die lib gepflegt?!",
  ] as const;

  constructor() {
    this.expectedColors = this.expectedChallenges
      .map((color, index) => [color, index] as const)
      .reduce((acc, curr) => {
        acc[curr[0]] = categoryColorScaleRainbow(curr[1], this.expectedChallenges.length, 75, 70);
        return acc;
      }, {} as typeof this.expectedColors);

    const realColors = this.realChallenges
      .map((color, index) => [color, index] as const)
      .reduce((acc, curr) => {
        acc[curr[0]] = categoryColorScaleRainbow(curr[1], this.realChallenges.length, 75, 70);
        return acc;
      }, {} as typeof this.realColors);

    this.realColors = {
      ...realColors,
      ...this.expectedColors
    }
  }

}
