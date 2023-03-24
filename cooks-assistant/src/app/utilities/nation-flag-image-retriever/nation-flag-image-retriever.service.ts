export class NationFlagImageRetrieverService {
  nationFlagImageRetriever(nation: string) {
    let returnedImageLocation = '';
    switch (nation) {
      case 'France':
        returnedImageLocation = 'assets/images/icons/flags/france-flag.png';
        break;
      case 'Chinese':
        returnedImageLocation = 'assets/images/icons/flags/chinese-flag.png';
        break;
      case 'India':
        returnedImageLocation = 'assets/images/icons/flags/india-flag.png';
        break;
      case 'Japan':
        returnedImageLocation = 'assets/images/icons/flags/japan-flag.png';
        break;
      case 'Mexico':
        returnedImageLocation = 'assets/images/icons/flags/mexico-flag.png';
        break;
      case 'Russia':
        returnedImageLocation = 'assets/images/icons/flags/russia-flag.png';
        break;
      case 'South Korea':
        returnedImageLocation =
          'assets/images/icons/flags/south-korea-flag.png';
        break;
      case 'USA':
        returnedImageLocation = 'assets/images/icons/flags/usa-flag.png';
        break;

      default:
        break;
    }
    return returnedImageLocation;
  }
}
