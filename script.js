/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log

   arr.map( function(student){
    if(student.marks > 50){
      console.log(student);
    }
   });
 
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log

  arr.forEach(function(student){
    if(student.marks > 50 ){
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  
    let newStudent = {id:4,name:"susan",age:"20",marks:45};
    arr.push(newStudent);
    console.log(arr);
    // console.log(arr);
  // return arr;
}

function removeFailedStudent() {
  //Write your code here, just console.log
   arr = arr.filter(function(student){
    return student.marks > 50;
   });
   
    console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 11, name: "Ram", age: "38", marks: 99 },
    { id: 12, name: "Sita", age: "30", marks: 95 },
    { id: 13, name: "Laksman", age: "35", marks: 40 },
  ]
  arr = arr.concat(arr2);
  console.log(arr);
}
