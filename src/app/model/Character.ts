import {Episode} from './Episode';
import {Photo} from './Photo';

export class Character {
  id:                       number;
  name:                     string;
  birthYear:                number;
  faith:                    string;
  organization:             string;
  firstEpisode:             Episode;
  lastEpisode:              Episode;
  photo:                    Photo;
}
