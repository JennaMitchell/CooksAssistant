export class NationFlagImageRetrieverService {
  nationFlagImageRetriever(nation: string) {
    let returnedImageLocation = '';
    switch (nation) {
      case 'France':
        returnedImageLocation = 'assets/images/flags/france-flag.png';
        break;
      case 'Chinese':
        returnedImageLocation = 'assets/images/flags/chinese-flag.png';
        break;
      case 'India':
        returnedImageLocation = 'assets/images/flags/india-flag.png';
        break;
      case 'Japan':
        returnedImageLocation = 'assets/images/flags/japan-flag.png';
        break;
      case 'Mexico':
        returnedImageLocation = 'assets/images/flags/mexico-flag.png';
        break;
      case 'Russia':
        returnedImageLocation = 'assets/images/flags/russia-flag.png';
        break;
      case 'South Korea':
        returnedImageLocation = 'assets/images/flags/south-korea-flag.png';
        break;
      case 'USA':
        returnedImageLocation = 'assets/images/flags/usa-flag.png';
        break;

      default:
        break;
    }
    return returnedImageLocation;
  }
}
