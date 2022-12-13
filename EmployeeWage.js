//UC6-Calculate Wage till No of working days is reached
var EmpTimeDetail;
(function (EmpTimeDetail) {
    EmpTimeDetail[EmpTimeDetail["IS_FULL_TIME"] = 1] = "IS_FULL_TIME";
    EmpTimeDetail[EmpTimeDetail["IS_PART_TIME"] = 2] = "IS_PART_TIME";
    EmpTimeDetail[EmpTimeDetail["PART_TIME_HOURS"] = 4] = "PART_TIME_HOURS";
    EmpTimeDetail[EmpTimeDetail["FULL_TIME_HOUR"] = 8] = "FULL_TIME_HOUR";
    EmpTimeDetail[EmpTimeDetail["WAGE_PER_HOUR"] = 20] = "WAGE_PER_HOUR";
    EmpTimeDetail[EmpTimeDetail["NUM_OF_WORKING_DAYS"] = 20] = "NUM_OF_WORKING_DAYS";
    EmpTimeDetail[EmpTimeDetail["MAX_HRS_IN_MONTH"] = 100] = "MAX_HRS_IN_MONTH";
})(EmpTimeDetail || (EmpTimeDetail = {}));
var empHrs = 0;
var totalEmployeeWage = 0;
var empWage = 0;
var totalEmpHour = 0;
var totalWorkingDays = 0;
while (totalEmpHour <= EmpTimeDetail.MAX_HRS_IN_MONTH && totalWorkingDays < EmpTimeDetail.NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
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
}
console.log("Total Days : " + totalWorkingDays + "\t\tTotal Employee Wage: " + empWage);
