/* 
Code the days of the week program as a switch statement
Define a new variable, name it day, and set its value to "Sunday".

Start coding a switch statement, passing the day variable as the expression to evaluate.

Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.
*/

var day = "Sunday";

switch (day) {
    case "Monday":
        console.log("Do Something on Monday");
        break;
    case "Tuesday":
        console.log("Do Something on Tuesday");
        break;
    case "Wednesday":
        console.log("Do Something on Wednesday");
        break;
    case "Thursday":
        console.log("Do Something on Thursday");
        break;
    case "Friday":
        console.log("Do Something on Friday");
        break;
    case "Saturday":
        console.log("Holiday on Saturday");
        break;
    case "Sunday":
        console.log("Holiday on Sunday");
        break;
    default:
        console.log("There is no such day");
}