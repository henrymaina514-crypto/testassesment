function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
}

function getGrade(avg) {
    if (avg >= 80) return "A";
    if (avg >= 70) return "B";
    if (avg >= 60) return "C";
    if (avg >= 50) return "D";
    return "E";
}

let name = prompt("Full name:");
let course = prompt("Course name:");
let m1 = Number(prompt("Mark 1:"));
let m2 = Number(prompt("Mark 2:"));
let m3 = Number(prompt("Mark 3:"));

if (!name || !course || m1 < 0 || m1 > 100 || m2 < 0 || m2 > 100 || m3 < 0 || m3 > 100) {
    alert("Invalid input!");
} else {
    let avg = calculateAverage(m1, m2, m3);
    let grade = getGrade(avg);

    // Using alert
    alert("Name: " + name + "\nCourse: " + course + "\nAverage: " + avg.toFixed(2) + "\nGrade: " + grade);

    // Using console.log
    console.log("Name: " + name);
    console.log("Course: " + course);
    console.log("Average: " + avg.toFixed(2));
    console.log("Grade: " + grade);
}