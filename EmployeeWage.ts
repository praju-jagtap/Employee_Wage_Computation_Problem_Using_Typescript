//UC3-Added Part Time Wages

enum EmpTimeDetail{
   IS_FULL_TIME = 1,
   IS_PART_TIME = 2,
   WAGE_PER_HOUR = 20
}

let empHrs:number = 0;
let empCheck:number = Math.floor(Math.random() * 10) % 3;

if(empCheck === EmpTimeDetail.IS_PART_TIME)
  empHrs = 4;
else if(empCheck === EmpTimeDetail.IS_FULL_TIME)
  empCheck = 8;
else
   empCheck = 0;
   
let empWage:number = empHrs * EmpTimeDetail.WAGE_PER_HOUR;
console.log("Employee Wage is : " +empWage);