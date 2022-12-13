//UC2-Calculate Employee Daily Wage

enum EmpTimeDetail{
    IS_FULL_TIME = 1,
    WAGE_PER_HOUR = 20
}

let empHrs:number = 0;
let empCheck:number = Math.floor(Math.random() * 10) % 3;

if(empCheck == EmpTimeDetail.IS_FULL_TIME)
   empHrs = 8;
else
   empCheck = 0;
   
let empWage:number = empHrs * EmpTimeDetail.WAGE_PER_HOUR;
console.log("Employee Daily Wage is : " +empWage);