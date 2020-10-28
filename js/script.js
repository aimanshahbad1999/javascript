
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




//synchronous

function num1(){
    console.log("1");

}
function num2(){
    console.log("2");

}
num1();
num2();


/*Asynchronous
here the num4 execute first bcz it require less time as comapred to num3*/


// function num3(){
//     setTimeout(() => {          
//         console.log("3");
//     }, 4000);
    
// }
// function num4(){
//     setTimeout(() => {
//         console.log("4");
//     }, 1000);
// }
// num3();
// num4();

/*callback

when function is passed as an argument to the another function
if you want to execute num3 first then passed num4 as an arugument (callback) to num3 

*/

// function num_3(num_4){
//     setTimeout(() => {          
//         console.log("3");
//         num_4();
//     }, 4000);
    
  
    
// }
// function num_4(){
//     setTimeout(() => {
//         console.log("4");
//     }, 1000);
// }
// num_3(num_4);


/*callback hell
1) after 2 sec access name of employee
2)after 3 sec access post of employee
3)after 2 sec access the language that the employee know

*/

// console.log("callbackhell");

// function callbackhell(){
//     const newemployee={
//         name:"Aiman",
//         post:"Trainee",
//         language:["C","C++","Python"]
//     };
//     setTimeout((name) => {
//         this.name=`The Employee Name is ${name}`;
//         console.log(this.name);
//         setTimeout((post) => {
//             this.post=`Employee Post:${post}`;
//             console.log(this.post);
//             setTimeout((language) => {
//                 this.language=`The fav language:${language}`;
//                 console.log(this.language);
//             }, 2000,newemployee.language[2]);
            
//         }, 3000,newemployee.post);

//     }, 2000,newemployee.name);
// }



// callbackhell();


/*promises
1) after 2 sec access name of employee
2)after 3 sec access post of employee
3)after 2 sec access fav the language that the employee know
*/

console.log("Promise");
function getEmployee(emp){
    return new Promise(function(resolveName,rejectName){
        setTimeout((emp) => {
            if(emp.name==="Aiman Shahbad"){
                const empname=`Name of Employee:${emp.name}`;
                console.log(empname);
                resolveName();
            }
            else{
                rejectName();
            }            
        }, 2000,emp);

    })

}

const newEmp={
    name:"Aiman Shahbad",
    post:"Trainee",
    langauge:["C","C++","Python","Javascript"]
}

function getName(){
    console.log("Succesfully Name Accessed");
}

function noName(){
    console.log("Employee Name not fetched");
}

getEmployee(newEmp).then(getName).catch(noName);


//Event
let count=0;
const plus=document.getElementById("plus");
plus.addEventListener("click",()=>{
    count=count+1;
    const element=document.querySelector("ul");
    const newElement=document.createElement("li");
    newElement.textContent=count;
    element.append(newElement);

});

const colors=["red","green","blue","pink","yellow","black"];

const btn=document.getElementById("color");
btn.addEventListener("click",()=>{
    const body=document.querySelector("body");
    let chgcolor=Math.random()*colors.length;
    chgcolor=Math.round(chgcolor);
    body.style.background=colors[chgcolor];

    
});





