function searchStudent() {
    const searchInput = document.getElementById("search-input").value.trim().toLowerCase();

    const studentPages = {
        "7376221ec152": "student_page.html?view=teacher",
        "john doe": "john_doe_page.html?view=teacher",
        "jane smith": "jane_smith_page.html?view=teacher"
    };
    
    if (studentPages[searchInput]) {
        window.location.href = studentPages[searchInput];
    } else {
        alert("Student not found. Please try again.");
    }
}

// Sample student data
const students = [
    { name: "Dinesh Arjun", rollNo: "7376221EC152", C: 5, Python: 3, Java: 3, fullStack: 1 },
    { name: "Naveen Kumar", rollNo: "7376222IT222", C: 4, Python: 1, Java: 2, fullStack: 4 },
    { name: "Prasanna Kumar", rollNo: "7376221CS262", C: 4, Python: 1, Java: 2, fullStack: 3 },
    { name: "Dinesh Karthik", rollNo: "7376221EC153", C: 3, Python: 1, Java: 2, fullStack: 2 },
    { name: "Aravind Chidambaram", rollNo: "7376221EC113", C: 5, Python: 2, Java: 3, fullStack: 3 },
    { name: "Selvahareesh", rollNo: "7376221EC303", C: 3, Python: 0, Java: 0, fullStack: 1 },
    { name: "Harish", rollNo: "7376221EC179", C: 3, Python: 0, Java: 0, fullStack: 1 },
    { name: "Mogith Varma", rollNo: "7376221EC223", C: 3, Python: 0, Java: 0, fullStack: 1 },
];


// Function to render the table
function renderTable(data) {
    const tbody = document.getElementById('filtered-student-table').querySelector('tbody');
    tbody.innerHTML = ""; // Clear existing rows

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;">No students found</td></tr>`;
        return;
    }

    data.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.rollNo}</td>
            <td>${student.C}</td>
            <td>${student.Python}</td>
            <td>${student.Java}</td>
            <td>${student.fullStack}</td>
        `;
        tbody.appendChild(row);
    });
}

// Function to filter and sort students
function filterByTalent() {
    const input = document.getElementById('talent-input').value.toLowerCase();

    if (input.trim() === "") {
        alert("Please enter a valid search term.");
        return;
    }

    let filteredStudents;

    // Check if the input is a talent or name/roll number
    const talentKeys = ["c", "python", "java", "fullstack"];
    if (talentKeys.includes(input)) {
        const talentKey = input.charAt(0).toUpperCase() + input.slice(1);

        // Sort by the specific talent level, using others as tie-breakers
        filteredStudents = [...students].sort((a, b) => {
            const keys = ["C", "Python", "Java", "fullStack"];
            for (let key of keys) {
                if (a[key] !== b[key]) {
                    return b[key] - a[key]; // Descending order
                }
            }
            return a.rollNo.localeCompare(b.rollNo); // If all keys are equal
        });
    } else if (isNaN(input) || input.match(/[a-z]/i)) {
        // Filter by name or alphanumeric roll number
        filteredStudents = students.filter(student =>
            student.name.toLowerCase().includes(input) || 
            student.rollNo.toLowerCase().includes(input)
        );
    } else {
        // For numerical inputs (if needed)
        filteredStudents = students.filter(student =>
            student.rollNo.includes(input)
        );
    }

    renderTable(filteredStudents);
}

// Initial data display (sorted by roll number in ascending order)
function showInitialData() {
    const sortedByRollNo = [...students].sort((a, b) =>
        a.rollNo.localeCompare(b.rollNo)
    );
    renderTable(sortedByRollNo);
}

// Display data on page load
window.onload = showInitialData;


function toggleMaximize() {
    const overflowDiv = document.getElementById('filter-overflow');
    const toggleIcon = document.getElementById('toggle-icon');

    if (toggleIcon.alt === 'Maximize') {
        // Add the class to remove overflow
        overflowDiv.classList.add('no-overflow');
        toggleIcon.src = '/Images/minimize-icon.png'; // Replace with your minimize icon path
        toggleIcon.alt = 'Minimize';
    } else {
        // Remove the class to restore overflow
        overflowDiv.classList.remove('no-overflow');
        toggleIcon.src = '/Images/maximize-icon.png'; // Replace with your maximize icon path
        toggleIcon.alt = 'Maximize';
    }
}



