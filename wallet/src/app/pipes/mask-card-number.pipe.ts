import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskCardNumber'
})
export class MaskCardNumberPipe implements PipeTransform {
  transform(value: string | number): string {
    const cardNumberStr = value.toString();

    if (cardNumberStr.length <= 4) {
      return cardNumberStr; 
    }

    const lastFourDigits = cardNumberStr.slice(-4);

    const maskedDigits = '*'.repeat(cardNumberStr.length - 4);

    return maskedDigits + lastFourDigits;
  }

}
