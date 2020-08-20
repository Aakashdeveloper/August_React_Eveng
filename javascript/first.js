function add(a,b){
    return a+b
}

//es6
const add = (a,b) => { return a+b}



function test(){
    return 1,2
}


var a = 10
undefined
a>10?"hii":"bie"
"bie"
a==10?"hii":"bie"
"hii"
a>10?a+1:a-1
9
a==10?a+1:a-1
11


var a = [0,1,2,3]
a.map((data) => {return data*2})
(4) [0, 2, 4, 6]

a.filter((data) => {return data*2})
(3) [1, 2, 3]

var age = [4,5,3]
age.filter((data)=> {return age>3})


filter return only those value for which condition/output is true
output may or maynot be of same

map help to  iterate and apply the logic
in case of map output of array will be of same length as input array


var age = [4,5,3]
age.filter((data)=> {return age>3})
[]
var age = [4,5,3]
age.filter((data)=> {return data>3})
(2) [4, 5]
var age = [4,5,3]
age.map((data)=> {return data>3})
(3) [true, true, false]

var city = ["London","NewYork","Delhi","Amsterdam"]
city.indexOf('London')
0
city.indexOf('Delhi')
2
city.indexOf('Pune')
-1
city.indexOf('Venice')
-1