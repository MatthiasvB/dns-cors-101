import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configure-for-everybody-package-json',
  templateUrl: './configure-for-everybody-package-json.component.html',
  styleUrls: ['./configure-for-everybody-package-json.component.scss']
})
export class ConfigureForEverybodyPackageJsonComponent {

  code = `{
  "scripts": {
    "clean": "rm -rf ./lib",
    "build": "npm run clean && npm run build:esm && npm run build:cjs",
    "build:esm": "tsc -p ./tsconfig.esm.json && mv lib/esm/index.js lib/esm/index.mjs",
    "build:cjs": "tsc -p ./tsconfig.cjs.json",
    "prepack": "npm run build",
  },
  "files": ["lib/**/*"],
  "exports": {
    ".": {
      "import": {
        "types": "./lib/esm/types/index.d.ts",
        "default": "./lib/esm/index.mjs"
      },
      "require": {
        "types": "./lib/cjs/types/index.d.ts",
        "default": "./lib/cjs/index.js"
      }
    }
  },
  "types": "./lib/cjs/types/index.d.ts",
  "main": "./lib/cjs/index.js",
  "module": "./lib/esm/index.mjs",
}`

}
