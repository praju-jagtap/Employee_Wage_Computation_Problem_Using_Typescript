//UC5-Calculate Employee Wage For Month
var EmpTimeDetail;
(function (EmpTimeDetail) {
    EmpTimeDetail[EmpTimeDetail["IS_FULL_TIME"] = 1] = "IS_FULL_TIME";
    EmpTimeDetail[EmpTimeDetail["IS_PART_TIME"] = 2] = "IS_PART_TIME";
    EmpTimeDetail[EmpTimeDetail["PART_TIME_HOURS"] = 4] = "PART_TIME_HOURS";
    EmpTimeDetail[EmpTimeDetail["FULL_TIME_HOUR"] = 8] = "FULL_TIME_HOUR";
    EmpTimeDetail[EmpTimeDetail["WAGE_PER_HOUR"] = 20] = "WAGE_PER_HOUR";
    EmpTimeDetail[EmpTimeDetail["NUM_OF_WORKING_DAYS"] = 20] = "NUM_OF_WORKING_DAYS";
})(EmpTimeDetail || (EmpTimeDetail = {}));
var empHrs = 0;
var totalEmployeeWage = 0;
var empWage = 0;
for (var day = 0; day < EmpTimeDetail.NUM_OF_WORKING_DAYS; day++) {
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
    empWage = empHrs * EmpTimeDetail.WAGE_PER_HOUR;
    totalEmployeeWage += empWage;
    console.log("Employee Wage is: " + empWage);
}
console.log("Total Employee Wage of Month: " + totalEmployeeWage);
