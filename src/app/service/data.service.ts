import {Language} from '../model/Language';
import {Episode} from '../model/Episode';
import {Location} from '../model/Location';
import {Word} from '../model/Word';
import {Character} from '../model/Character';
import {User} from '../model/User';

export class DataService {
  public language: Language;
  public season: Episode;

  public location: Location;

  public answers: Word[];
  public results: boolean[];

  public character: Character;

  public user: User;
}
