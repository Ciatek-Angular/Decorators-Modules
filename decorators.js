var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Example 1
function course(target) {
    Object.defineProperty(target.prototype, 'course', { value: function () { return "Angular"; } });
}
var Semester = /** @class */ (function () {
    function Semester() {
        this.level = '1st Semester';
    }
    Semester = __decorate([
        course
    ], Semester);
    return Semester;
}());
var fall = new Semester();
console.log(fall.course());
// Example 2
function Student(config) {
    return function (target) {
        console.log(config.name);
    };
}
var University = /** @class */ (function () {
    function University() {
    }
    University = __decorate([
        Student({
            name: 'Sami'
        })
    ], University);
    return University;
}());
