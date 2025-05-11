import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly code = `// 🤓 mehr gibt's auf
ROUTES.github.$username("MatthiasvB").$reponame("that-routing-lib");
ROUTES.npm.package.$packagename("that-routing-lib");`;

}
