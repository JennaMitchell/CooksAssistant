import { Component } from '@angular/core';
import { MediaQueryService } from 'src/app/utilities/media-queries-service/media-queries.service';

@Component({
  selector: 'homepage-learning-section',
  templateUrl: './homepage-learning-section.component.html',
  styleUrls: ['./homepage-learning-section.component.css'],
  providers: [MediaQueryService],
})
export class HomepageLearningSectionComponent {
  constructor(private mediaQueryService: MediaQueryService) {}
  value: any;
  sectionData = [
    {
      title: 'Baking',
      sectionId: 'homepage-learning-content-container-bake',
      buttonData: [
        {
          buttonImgUrl: '../../../../assets/images/food/apple-pie.png',
          buttonImgAltText: 'apple pie',
          buttonLink: 'https://www.kingarthurbaking.com/',
          buttonTitle: 'King Arthur Flour',
        },
        {
          buttonImgUrl: '../../../../assets/images/food/french-crepes.png',
          buttonImgAltText: 'crepes',
          buttonLink: 'www.craftsy.com/',
          buttonTitle: 'Craftsy',
        },
      ],
    },
    {
      title: 'Home Cooking',
      sectionId: 'homepage-learning-content-container-home',
      buttonData: [
        {
          buttonImgUrl: '../../../../assets/images/food/orange-chicken.png',
          buttonLink: 'https://www.americastestkitchen.com/',
          buttonImgAltText: 'orange chicken',
          buttonTitle: 'Americas Test Kitchen',
        },
        {
          buttonImgUrl: '../../../../assets/images/food/onion-soup.png',
          buttonImgAltText: 'onion soup',
          buttonLink: 'https://www.surlatable.com/',
          buttonTitle: 'Sur la Table',
        },
      ],
    },
    {
      title: 'Grilling',
      sectionId: 'homepage-learning-content-container-grilling',
      buttonData: [
        {
          buttonImgUrl: '../../../../assets/images/food/meat-plater.jpg',
          buttonImgAltText: 'meat platter',
          buttonLink: 'https://bbqchamps.com/',
          buttonTitle: 'BBQ Champs',
        },
        {
          buttonImgUrl:
            '../../../../assets/images/food/korean-spicy-marinated-pork.png',
          buttonImgAltText: 'korean bbq',
          buttonLink:
            'https://bbqbeat.com/competition-bbq-cooking-classes/korean-spicy-marinated-pork.png',
          buttonTitle: 'BBQ Beat',
        },
      ],
    },
  ];

  absolutePositionObjectArray: { [key: string]: string[] } = {
    bake: ['center', 'left', 'right'],
    home: ['left', 'center', 'right'],
    grilling: ['right', 'left', 'center'],
  };

  mobileActiveSection = 'bake';
  windowWidth810Pixels = false;
  homepageLearningSectionWindowResizeHandler() {
    this.windowWidth810Pixels = window.matchMedia('(max-width: 810px)').matches;
  }

  updateActiveSection(clickedSection: string) {
    this.mobileActiveSection = clickedSection;
  }

  ngOnInit() {
    this.homepageLearningSectionWindowResizeHandler();
    window.addEventListener('resize', () => {
      this.homepageLearningSectionWindowResizeHandler();
    });
    this.mediaQueryService.moduleTopContainer100PercentWidthUpdate(
      'homepage-learning-main-container'
    );
  }
}
