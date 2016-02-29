System.register(["angular2/core", "angular2/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http) {
                    this.http = http;
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
                    this.http.get("/json/questionsYes.json")
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.questionArrayYes = data;
                        _this.question = _this.questionArrayYes[0];
                    });
                };
                ;
                AppComponent.prototype.getQuestionsNo = function () {
                    var _this = this;
                    this.http.get("/json/questionsNo.json")
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { _this.questionArrayNo = data; }, function (err) { return console.error(err); });
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
                        else if (this.userAnswer === "no") {
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
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map