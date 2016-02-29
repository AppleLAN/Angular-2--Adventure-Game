import {View, Component, Input} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Rx";
@Component({
  selector: "my-app"
})

@View({
  templateUrl: "views/questions.html"
})

export class AppComponent {
  constructor(private http: Http) { }
  answer: string[] = [];
  questionArrayYes: string[] = [];
  questionArrayNo: string[] = [];
  question: string;
  getQuestionsYes() {
    this.http.get("/json/questionsYes.json")
      .map((res: Response) => res.json())
      .subscribe(
        data => {
          this.questionArrayYes = data;
          this.question = this.questionArrayYes[0];
        }
      );
  };
  getQuestionsNo() {
    this.http.get("/json/questionsNo.json")
      .map((res: Response) => res.json())
      .subscribe(
        data => { this.questionArrayNo = data; },
        err => console.error(err)
    );
  };
  ngOnInit() {
    this.getQuestionsYes();
    this.getQuestionsNo();
  }
  questionOld: string[] = [];
  answerOld: string[] = [];
  userAnswer: string;
  numberOfQuestion: number = 0;
  finished: boolean = false;
  changeNumber(e) {
    if (e.keyCode === 13 && this.userAnswer.length && !this.finished) {
      if (this.userAnswer === "yes") {
        if (this.numberOfQuestion !== 4) {
          this.answer.push("yes");
          this.numberOfQuestion += 1;
          console.log(this.questionArrayYes);
          this.question = this.questionArrayYes[this.numberOfQuestion];
          this.questionOld[this.numberOfQuestion - 1] = this.questionArrayYes[this.numberOfQuestion - 1];
          this.answerOld[this.numberOfQuestion - 1] = this.answer[this.numberOfQuestion - 1];
          this.userAnswer = "";
        }
        else {
          this.finished = true;
          this.question = "END.";
        }
      }
      else
        if (this.userAnswer === "no") {
          if ((this.numberOfQuestion !== 2 && this.numberOfQuestion !== 4) || (this.answer[this.numberOfQuestion - 1] === "yes" && this.numberOfQuestion !== 4)) {
            this.answer.push("no");
            this.numberOfQuestion += 1;
            this.question = this.questionArrayNo[this.numberOfQuestion];
            this.questionOld[this.numberOfQuestion - 1] = this.questionArrayNo[this.numberOfQuestion - 1];
            this.answerOld[this.numberOfQuestion - 1] = this.answer[this.numberOfQuestion - 1];
            this.userAnswer = "";
          }
          else {
            this.finished = true;
            this.question = "END.";
          }
        }
        else
          alert("enter yes or no");
      }
    else
      if (e.keyCode === 13 && !this.finished)
        alert("enter something!!");
      else
        if (this.finished)
          alert("END.");
  }
}
