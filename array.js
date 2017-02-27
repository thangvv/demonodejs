/**
 * Created by keyboard on 23/02/2017.
 */
var cars = ["MCD","FRL","BMW"];
console.log(cars.valueOf());
console.log(cars[1]);
for(var i=0 ; i<cars.length ; i++)
{
    console.log(cars[i]);
}
console.log(cars.join("-"));
cars.push("honda");
console.log(cars.valueOf());