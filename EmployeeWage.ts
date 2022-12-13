//UC4-Calculate Wages using switch case

enum EmpTimeDetail {
  IS_FULL_TIME = 1,
  IS_PART_TIME = 2,
  PART_TIME_HOURS = 4,
  FULL_TIME_HOUR = 8,
  WAGE_PER_HOUR = 20
}

let empHrs: number = 0;
let empCheck: number = Math.floor(Math.random() * 10) % 3;

switch (empCheck) {
  case EmpTimeDetail.IS_PART_TIME:
    empHrs = EmpTimeDetail.PART_TIME_HOURS;
    break;
  case EmpTimeDetail.IS_FULL_TIME:
    empHrs = EmpTimeDetail.FULL_TIME_HOUR;
    break;
  default:
    empHrs = 0;
}

let empWage: number = empHrs * EmpTimeDetail.WAGE_PER_HOUR;
console.log("Employee Wage is : " + empWage);