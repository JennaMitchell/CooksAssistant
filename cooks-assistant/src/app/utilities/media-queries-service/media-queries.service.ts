export class MediaQueryService {
  moduleTopContainer100PercentWidthUpdate(classToGet: string) {
    const topElement = document.getElementsByClassName(classToGet)[0];
    const moduleNamePlate = topElement.parentElement as HTMLElement;
    moduleNamePlate.style.width = 'max(100%,100%)';
  }
  moduleTopContainer100PercentHeightUpdate(classToGet: string) {
    const topElement = document.getElementsByClassName(classToGet)[0];
    const moduleNamePlate = topElement.parentElement as HTMLElement;
    moduleNamePlate.style.height = 'max(100%,100%)';
  }
}
