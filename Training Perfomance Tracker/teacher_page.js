// Function to simulate searching for a student and redirecting to their details
function searchStudent() {
    const searchInput = document.getElementById("search-input").value.trim().toLowerCase();

    const studentPages = {
        "dinesh arjun": "student_page.html?view=teacher",
        "john doe": "john_doe_page.html?view=teacher",
        "jane smith": "jane_smith_page.html?view=teacher"
    };

    if (studentPages[searchInput]) {
        window.location.href = studentPages[searchInput];
    } else {
        alert("Student not found. Please try again.");
    }
}


// Function to navigate to the student details page
function showStudentDetails() {
    document.querySelector('body > div').style.display = "none";
    document.getElementById('student-details-page').style.display = "block";
}

// Function to navigate back to the teacher's dashboard
function goBack() {
    document.getElementById('student-details-page').style.display = "none";
    document.querySelector('body > div').style.display = "block";
}


// Function to handle certificate validation
function validateCertificate(action, studentName) {
    // Find the row that contains the student's name
    const rows = document.querySelectorAll("#student-table tbody tr");
    rows.forEach(row => {
        const studentCell = row.querySelector("td:first-child");
        if (studentCell.textContent === studentName) {
            const actionCell = row.querySelector("td:nth-child(3)");
            if (action === 'approve') {
                // Update the cell to show "Approved" and remove Disapprove button
                actionCell.innerHTML = `<span style="color: green; font-weight: bold;">Approved</span>`;
            } else if (action === 'disapprove') {
                // Update the cell to show "Disapproved" and remove Approve button
                actionCell.innerHTML = `<span style="color: red; font-weight: bold;">Disapproved</span>`;
            }
        }
    });
}
