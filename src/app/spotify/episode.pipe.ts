import { Pipe, PipeTransform } from '@angular/core';
import { padStart } from 'lodash';

interface SeasonEpisode {
  number: number;
  season: number;
}

const defaultEpisode: SeasonEpisode = {
  number: 0,
  season: 0
}

@Pipe({
  name: 'episode'
})
export class EpisodePipe implements PipeTransform {

  transform(episode = defaultEpisode, uppercase = false): string {
    const season = padStart(episode.season.toString(), 2, '0');
    const number = padStart(episode.number.toString(), 2, '0');
    const result = `s${season}e${number}`;

    return uppercase ?  result.toUpperCase() : result;
  }

}
