export class CookingTimeStringConverterService {
  cookingTimeStringConverter(cookingTimeConvertedToNumber: number) {
    let returnedString = '';
    if (cookingTimeConvertedToNumber >= 60) {
      let numberOfHours = Math.floor(cookingTimeConvertedToNumber / 60);

      if (numberOfHours >= 24) {
        const numberOfDays = Math.floor(
          cookingTimeConvertedToNumber / (60 * 24)
        );

        const remainingMinutesAfterDays =
          cookingTimeConvertedToNumber - numberOfDays * (60 * 24);

        if (remainingMinutesAfterDays >= 60) {
          const numberOfHoursAfterDays = Math.floor(
            remainingMinutesAfterDays / 60
          );
          const remainingMinutesAfterDaysAndHours =
            remainingMinutesAfterDays - numberOfHoursAfterDays * 60;

          if (remainingMinutesAfterDaysAndHours === 0) {
            returnedString = `${numberOfDays}days ${numberOfHoursAfterDays}hrs`;
          } else {
            returnedString = `${numberOfDays}days ${numberOfHoursAfterDays}hrs ${remainingMinutesAfterDaysAndHours}min`;
          }
        } else {
          const remainingMinutesAfterDays =
            cookingTimeConvertedToNumber - numberOfDays * (60 * 24);

          if (remainingMinutesAfterDays === 0) {
            returnedString = `${numberOfDays}days`;
          } else {
            returnedString = `${numberOfDays}days  ${remainingMinutesAfterDays}min`;
          }
        }
      } else {
        const remainingMinutes =
          cookingTimeConvertedToNumber - numberOfHours * 60;
        if (remainingMinutes === 0) {
          returnedString = `${numberOfHours}hrs`;
        } else {
          returnedString = `${numberOfHours}hrs ${remainingMinutes}min`;
        }
      }
    } else {
      returnedString = `${cookingTimeConvertedToNumber}min`;
    }
    return returnedString;
  }
}
