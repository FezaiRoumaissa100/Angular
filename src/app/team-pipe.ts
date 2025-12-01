import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'team',
})
export class TeamPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
