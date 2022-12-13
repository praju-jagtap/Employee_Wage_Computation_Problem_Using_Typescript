//UC6-Calculate Wage till No of working days is reached

enum EmpTimeDetail {
  IS_FULL_TIME = 1,
  IS_PART_TIME = 2,
  PART_TIME_HOURS = 4,
  FULL_TIME_HOUR = 8,
  WAGE_PER_HOUR = 20,
  NUM_OF_WORKING_DAYS = 20,
  MAX_HRS_IN_MONTH = 100
}

let empHrs: number = 0;
let totalEmployeeWage: number = 0;
let empWage: number = 0;
let totalEmpHour: number = 0;
let totalWorkingDays: number = 0;

while (totalEmpHour <= EmpTimeDetail.MAX_HRS_IN_MONTH && totalWorkingDays < EmpTimeDetail.NUM_OF_WORKING_DAYS) {
  totalWorkingDays++;
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
  empWage = empHrs * EmpTimeDetail.WAGE_PER_HOUR;
  totalEmployeeWage += empWage;
}
console.log("Total Days : " + totalWorkingDays + "\t\tTotal Employee Wage: " + empWage);