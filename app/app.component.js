System.register(["angular2/core", "./service/getQuestions"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, getQuestions_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (getQuestions_1_1) {
                getQuestions_1 = getQuestions_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_httpService) {
                    this._httpService = _httpService;
                    this.answer = [];
                    this.questionArrayYes = [];
                    this.questionArrayNo = [];
                    this.questionOld = [];
                    this.answerOld = [];
                    this.numberOfQuestion = 0;
                    this.finished = false;
                }
                AppComponent.prototype.getQuestionsYes = function () {
                    var _this = this;
                    this._httpService.getQuestionsYes().subscribe(function (data) { _this.questionArrayYes = data; _this.question = data[0]; }, function (err) { return console.error(err); });
                };
                ;
                AppComponent.prototype.getQuestionsNo = function () {
                    var _this = this;
                    this._httpService.getQuestionsNo().subscribe(function (data) { _this.questionArrayNo = data; _this.question = data[0]; }, function (err) { return console.error(err); });
                };
                ;
                AppComponent.prototype.ngOnInit = function () {
                    this.getQuestionsYes();
                    this.getQuestionsNo();
                };
                AppComponent.prototype.changeNumber = function (e) {
                    if (e.keyCode === 13 && this.userAnswer.length && !this.finished) {
                        if (this.userAnswer === "yes") {
                            if (this.numberOfQuestion !== 4) {
                                this.numberOfQuestion += 1;
                                this.question = this.questionArrayYes[this.numberOfQuestion];
                                if (this.answer[this.numberOfQuestion - 1] === "yes" || this.answer.length === 0) {
                                    this.questionOld[this.numberOfQuestion - 1] = this.questionArrayYes[this.numberOfQuestion - 1];
                                }
                                else {
                                    this.questionOld[this.numberOfQuestion - 1] = this.questionArrayNo[this.numberOfQuestion - 1];
                                    if (this.numberOfQuestion === 3) {
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
                        else if (this.userAnswer === "no") {
                            if ((this.numberOfQuestion !== 2 && this.numberOfQuestion !== 4) || (this.answer[this.numberOfQuestion - 1] === "yes" && this.numberOfQuestion !== 4)) {
                                this.numberOfQuestion += 1;
                                this.question = this.questionArrayNo[this.numberOfQuestion];
                                if (this.answer[this.numberOfQuestion - 1] === "no" || this.answer.length === 0) {
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
                    else if (e.keyCode === 13 && !this.finished)
                        alert("enter something!!");
                    else if (this.finished)
                        alert("END.");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app"
                    }),
                    core_1.View({
                        templateUrl: "views/questions.html"
                    }), 
                    __metadata('design:paramtypes', [getQuestions_1.GetQuestionsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map