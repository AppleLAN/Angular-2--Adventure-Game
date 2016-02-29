import {View, Component} from "angular2/core";
import {GetQuestionsService} from "./service/getQuestions";

@Component({
  selector: "my-app"
})

@View({
  templateUrl: "views/questions.html"
})

export class AppComponent {
  constructor(private _httpService: GetQuestionsService) { }
  answer: string[] = [];
  questionArrayYes: string[] = [];
  questionArrayNo: string[] = [];
  question: string;
  getQuestionsYes() {
    this._httpService.getQuestionsYes().subscribe(
      data => { this.questionArrayYes = data; this.question = data[0]; },
      err => console.error(err)
    );
  };
  getQuestionsNo() {
    this._httpService.getQuestionsNo().subscribe(
      data => { this.questionArrayNo = data; this.question = data[0]; },
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
          this.numberOfQuestion += 1;
          this.question = this.questionArrayYes[this.numberOfQuestion];
          if ( this.answer[this.numberOfQuestion - 1] === "yes" || this.answer.length === 0 ) {
            this.questionOld[this.numberOfQuestion - 1] = this.questionArrayYes[this.numberOfQuestion - 1];
          }
          else {
            this.questionOld[this.numberOfQuestion - 1] = this.questionArrayNo[this.numberOfQuestion - 1];
            if ( this.numberOfQuestion === 3 ) {
              this.finished = true;
              this.question = "END.";
            }
          }
          this.answer.push("yes");
          console.log(this.questionOld);
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
            this.numberOfQuestion += 1;
            this.question = this.questionArrayNo[this.numberOfQuestion];
            if ( this.answer[this.numberOfQuestion - 1] === "no" || this.answer.length === 0 ) {
              this.questionOld[this.numberOfQuestion - 1] = this.questionArrayNo[this.numberOfQuestion - 1];
            }
            else {
              this.questionOld[this.numberOfQuestion - 1] = this.questionArrayYes[this.numberOfQuestion - 1];
            }
            this.answer.push("no");
            this.answerOld[this.numberOfQuestion - 1] = this.answer[this.numberOfQuestion - 1];
            console.log(this.questionOld);
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
