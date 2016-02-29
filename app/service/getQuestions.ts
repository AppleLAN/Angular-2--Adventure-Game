import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class GetQuestionsService {

  constructor(private http: Http) { }

  // Uses http.get() to load a single JSON file
  getQuestionsYes() {
    return this.http.get("/app/json/questionsYes.json").map((res: Response) => res.json());
  };
  getQuestionsNo() {
    return this.http.get("/app/json/questionsNo.json").map((res: Response) => res.json());
  }
}
