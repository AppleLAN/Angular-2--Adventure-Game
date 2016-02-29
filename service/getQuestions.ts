import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class getQuestionsService {
  constructor (private _htpp: Http) {}
  getQuestionsYes(){
    return this._http.get('../json/questionsYes.json').map(res => res.json());
  }
  getQuestionsNo(){
    return this._http.get('../json/questionsNo.json').map(res => res.json());
  }
}
