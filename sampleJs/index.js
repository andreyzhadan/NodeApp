/**
 * Created by azhadan on 12/10/13.
 */
var arr = [1, 2, 3];
document.writeln(arr.toString());
for (var i = 0; i <= 10; i++) {
    document.write(i.toString());
}
console.log("console.log".toString());

function getIt() {
    return this.x;
}
var obj1 = {get: getIt, x: 1}
var obj2 = {get: getIt, x: 2}

document.writeln(obj1.get() + " / " + obj2.get())


var average = function () {
    var sum = 0;
    var size = arguments.length;
    for (var i = 0; i < size; i++) {
        sum += arguments[i];
    }
    return sum / size;
}

document.writeln("Average is " + average(10, 20, 30))