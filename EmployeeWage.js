//UC4-Calculate Wages using switch case
var EmpTimeDetail;
(function (EmpTimeDetail) {
    EmpTimeDetail[EmpTimeDetail["IS_FULL_TIME"] = 1] = "IS_FULL_TIME";
    EmpTimeDetail[EmpTimeDetail["IS_PART_TIME"] = 2] = "IS_PART_TIME";
    EmpTimeDetail[EmpTimeDetail["PART_TIME_HOURS"] = 4] = "PART_TIME_HOURS";
    EmpTimeDetail[EmpTimeDetail["FULL_TIME_HOUR"] = 8] = "FULL_TIME_HOUR";
    EmpTimeDetail[EmpTimeDetail["WAGE_PER_HOUR"] = 20] = "WAGE_PER_HOUR";
})(EmpTimeDetail || (EmpTimeDetail = {}));
var empHrs = 0;
var empCheck = Math.floor(Math.random() * 10) % 3;
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
var empWage = empHrs * EmpTimeDetail.WAGE_PER_HOUR;
console.log("Employee Wage is : " + empWage);
