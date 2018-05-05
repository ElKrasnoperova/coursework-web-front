import {Language} from '../model/Language';
import {Episode} from '../model/Episode';
import {Location} from '../model/Location';
import {Word} from '../model/Word';

export class DataService {
  public language: Language;
  public season: Episode;

  public location: Location;

  public answers: Word[];
  public results: boolean[];
}
