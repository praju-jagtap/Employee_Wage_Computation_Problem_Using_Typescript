//UC1-Emplooyee is Present or Absent
var IS_ABSENT = 0;
var empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
}
else {
    console.log("Employee is Present");
}
