System.register(["angular2/platform/browser", "angular2/http", "rxjs/add/operator/map", "./app.component", "./service/getQuestions"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, http_1, app_component_1, getQuestions_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (getQuestions_1_1) {
                getQuestions_1 = getQuestions_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, getQuestions_1.GetQuestionsService]);
        }
    }
});
//# sourceMappingURL=main.js.map