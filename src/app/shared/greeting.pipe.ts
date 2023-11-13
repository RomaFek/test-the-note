import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting',
})
export class GreetingPipe implements PipeTransform {
  transform(value: Date): string {
    const hours = value.getHours();

    let greeting: string;

    if (hours >= 5 && hours < 12) {
      greeting = 'Доброе утро';
    } else if (hours >= 12 && hours < 17) {
      greeting = 'Добрый день';
    } else if (hours >= 17 && hours < 22) {
      greeting = 'Добрый вечер';
    } else {
      greeting = 'Доброй ночи';
    }

    return greeting;
  }
}
