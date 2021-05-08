<<<<<<< HEAD
function createEmployeeRecord(employees) {
return {
  firstName: employees[0],
familyName : employees[1],
  title :employees[2],
  payPerHour: employees[3],
  timeInEvents : [],
  timeOutEvents :[]
}
}

function createEmployeeRecords(arr) {
  return arr.map(s => createEmployeeRecord(s));
}

function createTimeInEvent(date) {
  let dateTime = date.split(' ')
  this.timeInEvents.push({type: "TimeIn",
    hour: parseInt(dateTime[1]),
		date: dateTime[0]})
return this
}
function createTimeOutEvent(date) {
  let dateTime = date.split(' ')
  this.timeOutEvents.push({type: "TimeOut",
    hour: parseInt(dateTime[1]),
		date: dateTime[0]})
return this
}

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find(e =>e.date == date)
	let timeOut = this.timeOutEvents.find(e =>e.date == date)
	return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(employee, date) {
	let wage = hoursWorkedOnDate(employee, date) * employee.payPerHour
	return wage
}
function allWagesFor(employee) {
	let days = employee.timeInEvents.map(e => e.date)
	let wages = days.map(e => wagesEarnedOnDate(employee, e))
	return wages.reduce((total, e) => e + total, 0)
}
function findEmployeeByFirstName(arr, firstName) {
	return arr.find(e => e.firstName == firstName)
}

function calculatePayroll(arr) {
	return arr.reduce((total, e) => allWagesFor(e) + total, 0);
=======
function batteryBatches(firstname, familyname, title, payhour) {
const em={
  first: firstname,
  last : familyname,
  title : title,
  payPerHour: payhour
}

>>>>>>> 98c05d04622d2cf832e355936702170486172ee0
}
