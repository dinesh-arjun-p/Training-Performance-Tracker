// Function to simulate searching for a student and displaying their details
function searchStudent() {
    var searchValue = document.getElementById('search-input').value;
    // In a real application, a backend query would retrieve student data based on the search input.
    if (searchValue === "John Doe" || searchValue === "12345" || searchValue === "johndoe@example.com") {
        showStudentDetails();
    } else {
        alert("Student not found.");
    }
}

// Function to navigate to the student details page
function showStudentDetails() {
    document.querySelector('.admin-info').style.display = "none";
    document.getElementById('student-details').style.display = "block";
}

// Function to go back to the search page
function goBack() {
    document.getElementById('student-details').style.display = "none";
    document.querySelector('.admin-info').style.display = "block";
}

// Function to filter students based on talent input
function filterByTalent() {
    var talent = document.getElementById('talent-input').value.toLowerCase();
    // Normally, this would fetch filtered data based on the entered talent.
    // For demonstration, we simulate the result.
    if (talent === "python" || talent === "c" || talent === "table tennis") {
        showFilteredStudents();
    } else {
        alert("No students found with the specified talent.");
    }
}

// Function to display filtered students
function showFilteredStudents() {
    document.querySelector('.admin-info').style.display = "none";
    document.getElementById('filtered-students').style.display = "block";
}

// Function to go back to the search page from filtered results
function goBackToSearch() {
    document.getElementById('filtered-students').style.display = "none";
    document.querySelector('.admin-info').style.display = "block";
}
