import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../model/movie';

@Pipe({
  name: 'movieFilter',
  standalone: true,
})
export class MovieFilterPipe implements PipeTransform {
  transform(
    value: Movie[],
    title: string,
    releaseYear: number | undefined
  ): Movie[] {

    if (!title && !releaseYear) {
      return value;
    }

    const tempValue = [...value];
    let filteredValue: Movie[] = [];


    if (title && releaseYear) {
      filteredValue = tempValue.filter((val) => {
        return (
          val.title.toLowerCase().includes(title.toLowerCase()) &&
          val.release_date.includes(String(releaseYear))
        );
      });
      return filteredValue;
    }

    if (title) {
      filteredValue = tempValue.filter((val) => {
        return val.title.toLowerCase().includes(title.toLowerCase());
      });
    }
    if (releaseYear) {
      filteredValue = tempValue.filter((val) => {
        return val.release_date.includes(String(releaseYear));
      });
    }
    return filteredValue;
  }
}
