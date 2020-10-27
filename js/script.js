
//    Regular Expression


const str = "Cuelogic Technologies Pune!!! I work at Cuelogic";
let regexp1 = /Cue/;
let regexp2 = /cue/i;
let regexp3 = /Cuelogic/g;


// exec( )
const result1 = regexp1.exec(str);
const result2 = regexp2.exec(str);
console.log(result1);               // it return null
console.log(result2);               //it return the object


// test()
console.log(regexp2.test(str));     //it return true


//match()
let m = str.match(regexp3);           //it return an array
console.log(m);


//search()
let s = str.search(regexp1);          //retrun the index of first match
console.log(s);


//replace()
let r = str.replace('Pune', 'Software - Development');
console.log(r);




//metacharacter

console.log("metacharacter");
let regexp4 = /^Cue/;
console.log(regexp4.test(str));
regexp4 = /Cuelogic$/;
console.log(regexp4.test(str));
regexp4 = /Cue.ogic/;
console.log(regexp4.test(str));
regexp4 = /Cue*/;
console.log(regexp4.test(str));
regexp4 = /Cue?logic/;
console.log(regexp4.test(str));


//characterset
console.log("characterset");
let regexp5 = /Cue[a-z]ogic/;
console.log(regexp5.test(str));
regexp5 = /Cue[lL]ogic/;
console.log(regexp5.test(str));

//quantifiers
console.log("quatifiers");
let regexp6 = /C{1}ue/;
console.log(regexp6.test(str));


//grouping
console.log("quatifiers");
let regexp7 = /Cue{1}logic/;
console.log(regexp7.test(str));

//Character Classes
console.log("Character Classes");
let regexp8 = /\w+logic/;
console.log(regexp8.test(str));



//Object literals
console.log("Object Literals");

const emp1 = {
    Name: "Aiman Shahbad",
    Post: "Trainee",
    Language: ["C", "C++", "Python", "javascript"],
    intro: function () {
        console.log("Hey Hiiii");
    }
}

console.log(emp1.Name);
console.log(emp1.intro);        //return function defination
console.log(emp1.intro());      //retrun hiii
console.log(Object.keys(emp1));
console.log(Object.values(emp1));






function employee(name, post, language, intro) {
    this.name=name;
    this.post=post;
    this.language=language;
    this.intro=intro;

}

const e1 = new employee("Aiman Shahbad", "Trainee", ["C", "C++", "Python", "javascript"], function () {
    console.log("Hey Hiiii");
});

console.log(e1.name);
e1.hobbie="Cooking";
console.log(e1.hobbie);

const e2=e1;


//Comparing Object
console.log(Object.is(e1,e2));








/* closure

whenever the function is craeted the closure created
inner function have access to the outer function

*/

function sayHii(){
    let name="Aiman"
    console.log("Hii "+name);
    function sayHello(){
        console.log("Hello "+name);
    }

    return sayHello;

}

let call1=sayHii();             //print Hii Aiman return the refernce of sayHello
call1();                        //print Hello Aiman and it access the variable which is in outer scope due to closure
                            



//call by value and call by reference

function addNum(a,b){
    return a+b;
}

const addition=addNum(20,20);       //call by value
console.log(addition);  


function details(student){
    return student.name="lemon";

}

const studObj={
    name:"Aiman"
}

let studName=details(studObj);      //call by reference
console.log(studName);              //return lemon here 




/* JSON 
    stringify(): used to convert JSON object to string
    parse():used to convert string to JSON object
*/

const jsonObj={
    name:"Aiman",
    post:"Trainee"

}
let jsonstr=JSON.stringify(jsonObj);
console.log(jsonstr)            //return string
let newjsonobj=JSON.parse(jsonstr);
console.log(newjsonobj);        //return object


//eval()
let a=20
console.log(eval('2+2'));           //4
console.log(eval('2*2'));           //4
console.log(eval('a*2'));           //40






/*hoisting

in hoisting
the function declaration are scan and they made avaliable
the variable are sacn and they made undefined

*/

let name;

function sayHello(){

    console.log(name);
    
}

sayHello();             //return undefined
name="Aiman Shahbad";  
sayHello();             //return name                  
