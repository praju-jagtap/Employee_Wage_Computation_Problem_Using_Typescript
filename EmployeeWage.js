//UC3-Added Part Time Wages
var EmpTimeDetail;
(function (EmpTimeDetail) {
    EmpTimeDetail[EmpTimeDetail["IS_FULL_TIME"] = 1] = "IS_FULL_TIME";
    EmpTimeDetail[EmpTimeDetail["IS_PART_TIME"] = 2] = "IS_PART_TIME";
    EmpTimeDetail[EmpTimeDetail["WAGE_PER_HOUR"] = 20] = "WAGE_PER_HOUR";
})(EmpTimeDetail || (EmpTimeDetail = {}));
var empHrs = 0;
var empCheck = Math.floor(Math.random() * 10) % 3;
if (empCheck === EmpTimeDetail.IS_PART_TIME)
    empHrs = 4;
else if (empCheck === EmpTimeDetail.IS_FULL_TIME)
    empCheck = 8;
else
    empCheck = 0;
var empWage = empHrs * EmpTimeDetail.WAGE_PER_HOUR;
console.log("Employee Wage is : " + empWage);
