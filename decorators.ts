// Example 1
function course(target){
    Object.defineProperty(target.prototype, 'course', { value: () => "Angular"})
}

@course
class Semester{
    level = '1st Semester'
}

let fall = new Semester()
console.log(fall.course())


// Example 2
function Student (config){
    return function(target){
        console.log(config.name)
    }
}

@Student({
    name: 'Sami'
})
class University {
    name: 'Harvard'
}
