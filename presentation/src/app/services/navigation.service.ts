import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {Location} from '@angular/common';
import {slideRoutes} from '../app-routing.module';
import {debounceTime, filter, map, shareReplay, startWith, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: "root" })
export class NavigationService {

  private readonly keyDown$$ = new Subject<KeyboardEvent>();

  private readonly RELEVANT_KEYS = [
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown"
  ];

  public readonly numberOfPages = slideRoutes.length;
  public readonly currentPageIndex$ = this.keyDown$$.pipe(
    filter(event => this.RELEVANT_KEYS.includes(event.code)),
    tap(event => event.stopPropagation()),
    map(event => [event, slideRoutes.findIndex(route => route.path === this.stripSlashes(this.location.path()))] as const),
    tap(([, index]) => { if (index === -1) console.warn("Currently on an unknown route. Don't know what to do") }),
    filter(([, index]) => index !== -1),
    map(([event, index]) => {
      switch (event.key) {
        case "ArrowRight":
          if (index < slideRoutes.length - 1) return index + 1;
          console.log("wrapping at index", index, "of", slideRoutes.length);
          return 0;
        case "ArrowLeft":
          if (index > 0) return index -1;
          return slideRoutes.length - 1;
        default:
          return -1;
      }
    }),
    startWith(slideRoutes.findIndex(route => route.path === this.stripSlashes(this.location.path()))),
    filter(index => index !== -1),
    tap(index => console.log("Index:", index)),
  ).pipe( // max 9 args per pipe... so we start a new one
    shareReplay(1)
  );

  constructor(
    private readonly router: Router,
    private readonly location: Location,
  ) {
  this.activateKeyboardNavigationListeners();
  this.currentPageIndex$.subscribe(index => {
    console.log(`Current url:`, this.location.path());
    this.router.navigateByUrl(slideRoutes[index].path);
  });
  }


  private activateKeyboardNavigationListeners() {
    window.addEventListener("keydown", (event) => {
      // debug
      console.log(`User pressed key "${event.key}", which has code "${event.code}`);
      this.keyDown$$.next(event);

    })
  }

  private stripSlashes(url: string): string {
    if (url.startsWith("/")) {
      return this.stripSlashes(url.slice(1));
    }
    return url;
  }
}
