import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configure-for-everybody',
  templateUrl: './configure-for-everybody.component.html',
  styleUrls: ['./configure-for-everybody.component.scss']
})
export class ConfigureForEverybodyComponent {

  tsconfigCjs = `{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "lib": ["ES6", "DOM"],
    "target": "ES6",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "outDir": "./lib/cjs",
    "declaration": true,
    "declarationDir": "./lib/cjs/types"
  }
}`;

  tsconfigEsm = `{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "lib": ["ES2022", "DOM"],
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "NodeNext",
    "outDir": "./lib/esm",
    "declaration": true,
    "declarationDir": "./lib/esm/types"
  }
}`;

}
