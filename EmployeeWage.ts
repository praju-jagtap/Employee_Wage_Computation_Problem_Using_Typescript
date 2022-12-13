//UC1-Emplooyee is Present or Absent

const IS_ABSENT:number = 0 

let empCheck:number = Math.floor(Math.random() * 10) % 2;
if(empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is Present");
}