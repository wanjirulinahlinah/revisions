//Q1 Find the length of the following string.
// let supers=['Superman','batman','Flash','Aquaman'];
let supers=['Superman','batman','Flash','Aquaman'];
console.log(supers.length);





//Q2 Find the lastelement of the following ;
//let document=['Superman','Batman','Flash','Aquaman']
let document=['documental','files','Flash','Aquaman']
console.log(document[document.length-1]);





//Q3Solve the following to find the indexOf of Green lantern.
//let string=['Green Lantern','School','Colourful','Local']
//indexOf
//is used to find if an array contain a particular number of value if it does it  returns the index at which the value is placed if not then the index returned is minus one
// console.log(supers.indexOf('Flash'))
//if something that does not exist in your string it will return negative 1
let string=['Green Lantern','School','Colourful','Local']
console.log(string.indexOf('Green Lantern'))




//Q4Identify which elements exists in a string.
//includes methods return a Boolen value so true or false
let supe=['man','bat','Flash','quaman'];
console.log(supe.includes('batman'))




//Q5 using the given string remove the lastelement
//let sup=['Superman','batman','Flash','Aquaman'];
//pop and push methods are used to add and remove elements from an array we can pop 
//items in an array or push items in an array
//pop remove the last item from an arry
let sup=['local','weavil','eagle','dove'];
console.log(sup.pop());
console.log(sup);





//Q6 using  the string above remove the first item of the element given
//shift removes the first item in an array
let animals=['butter','batman','gees','doves'];
console.log(animals.shift())



//Q7 Add an element to the following string
//push and unshift
//push add a new value at the end of an array
//unshift add a new element at the beginning of our an array
let sun=['Superman','batman','Flash','Aquaman'];
sun.push('spinderman');
console.log(sun)



//Q8Add an element to the folllowing string
//unshift
let story=['Superman','batman','Flash','Aquaman'];
story.unshift('sokko');
console.log(story)



//Q9 Use the concatenation method to solve the following string
//conca method used to merge an array with another array.
//create a new arry combine with the array that was their before
//join methond
//it is used to turn the array into a string with all the values separated by a comma
//it takes an array and turn it to a string
let newso=son.concat(['Wolverine','Cyclones','Professor']);
let son=
console.log(newso.join());
console.log(newson);




//Q12 Turn the following string to an array
//let suppers="Superman,Batman,Flash";
//split
//it takes a string and turn it to an array
let suppers="Superman,Batman,Flash";
let suppersArray=suppers.split(', ')
console.log(suppersArray);




//Q13 Solve the following array using slice method.
//slice method creates a sub array in other words it cuts out
//it cuts out or slices out array from one position to another
//let opper=['superman','batman','Flash','Aquaman','Thuor']
let opper=['superman','batman','Flash','Aquaman','Thuor']
console.log(opper)
let xmen = opper.slice(6,9)
console.log(xmen);
console.log(opper);




//splice method removes items from an array and then replaces them with new ones
//it is destructive
//eitheir to remove or add
let fun=['super','man','Flash','Aquaman','Thuor']
fun.splice(5,1,'Green Lantern');
console.log(fun)




//Q14Use the reverse method to slve the following array
//let opera=['fence','garden','allowance'];
//reverse method
//reverse the order of an array
let opera=['fence','garden','allowance'];
opera.reverse();
console.log(opera);




//Q15 Use the sort method to solve the following array
//let opra=['sugar','water','hunti'];
//sort method
//solve our arrays arphabetically
let restless=['sugar','water','hunti'];
restless.sort();
console.log(restless);



