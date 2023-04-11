let supers=['Superman','batman','Flash','Aquaman'];
// console.log(supers.length);
//to find the lastelement
console.log(supers[supers.length-1]);
//the length property is mutable
// supers.length =2;
// console.log(supers.length)
//indexOf
//is used to find if an array contain a particular number of value if it does it  returns the index at which the value is placed if not then the index returned is minus one
// console.log(supers.indexOf('Flash'))
//if you something that does not exist in your string it will return negative 1
console.log(supers.indexOf('Green Lantern'))
//includes methods return a Boolen value so true or false
let supe=['Superman','batman','Flash','Aquaman'];
console.log(supe.includes('batman'))
//pop and push methods are used to add and remove elements from an array we can pop 
//items in an array or push items in an array
//pop remove the last item from an arry
let sup=['Superman','batman','Flash','Aquaman'];
console.log(sup.pop());
console.log(sup);
//shift removes the first item in an array
let su=['Superman','batman','Flash','Aquaman'];
console.log(sup.shift());
//push and unshift
//push add a new value at the end of an array
//unshift add a new element at the beginning of our an array
let sun=['Superman','batman','Flash','Aquaman'];
sun.push('spinderman');
console.log(sun)
//unshift
let supper=['Superman','batman','Flash','Aquaman'];
supper.unshift('sokko');
console.log(supper)
//conca method used to merge an array with another array.
let son=['Superman','batman','Flash','Aquaman'];
let newson=son.concat(['Wolverine','Cyclones','Professor'])
console.log(son);
console.log(newson);
//create a new arry combine with the array that was their before
//join methond
//it is used to turn the array into a string with all the values separated by a comma
//it takes an array and turn it to a string
let newso=son.concat(['Wolverine','Cyclones','Professor']);
console.log(newso.join());
//split
//it takes a string and turn it to an array
let suppers="Superman,Batman,Flash";
let suppersArray=suppers.split(', ')

console.log(suppersArray);
//slice method creates a sub array in other words it cuts out
//it cuts out or slices out array from one position to another
let opper=['superman','batman','Flash','Aquaman','Thuor']

console.log(opper)
let xmen = opper.slice(6,9)

console.log(xmen);
console.log(opper);
//splice method removes items from an array and then replaces them with new ones
//it is destructive
//eitheir to remove or add
let oppe=['superman','batman','Flash','Aquaman','Thuor']
oppe.splice(5,1,'Green Lantern');
console.log(oppe)

//reverse method
//reverse the order of an array
let opera=['sugar','water','hunti'];

opera.reverse();
console.log(opera);

//sort method
//solve our arrays arphabetically
let opra=['sugar','water','hunti'];

opra.sort();
console.log(opra);



