var length2 = 8
var length1 = 7
var length3 = 9
var perimeter = (length1 + length2 + length3)/2;
var area = Math.sqrt(perimeter*((perimeter-length1)*(perimeter-length2)*(perimeter-length3)));
console.log(area);
