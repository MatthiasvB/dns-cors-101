import {ElementRef} from '@angular/core';

export function addClassToElementForTime(element: ElementRef<HTMLElement>, clazz: string, durationMs: number) {
  element.nativeElement.classList.add(clazz);
  setTimeout(() => element.nativeElement.classList.remove(clazz), durationMs);
}

export function categoryColorScaleRainbow(int: number, rangeMax: number, saturation=75, lightness=50) {
  return `hsl(${Math.round(int / rangeMax * 360)}, ${saturation}%, ${lightness}%)`;
}
