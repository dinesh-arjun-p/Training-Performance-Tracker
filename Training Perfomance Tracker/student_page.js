
document.getElementById('language-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Logic to submit and validate the programming language certificate
    document.getElementById('language-validation').innerHTML = "<p>Certificate is under review by teacher.</p>";
    
});



document.getElementById("language-form").addEventListener("submit", function (event) {
    const selectedPrize = document.querySelector('input[name="prize"]:checked');
    if (!selectedPrize) {
        alert("Please select a prize before submitting!");
        event.preventDefault(); // Prevent form submission
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Query all `.inner_training_content` elements
    const trainingContents = document.querySelectorAll(".inner_training_content");

    trainingContents.forEach((content) => {
        // Check if the content overflows
        if (content.scrollHeight > content.clientHeight) {
            // Find the `.scroll` element that comes before the `.inner_training_content` in the DOM
            const scrollElement = content.closest(".training").querySelector(".scroll");
            if (scrollElement) {
                // Add margin-right to the `.scroll` element
                scrollElement.style.marginRight = "20px";
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const view = urlParams.get("view");

    if (view === "teacher") {
        // Hide input sections for teachers
        const inputSections = document.querySelectorAll(".input-section");
        inputSections.forEach(section => {
            section.style.display = "none";
        });
        const achieve = document.querySelector(".achievements");
            achieve.style.gridTemplateColumns = "1fr";
    }
});

    
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const view = urlParams.get("view");

    // Show the "Go Back to Search" button if view=teacher
    if (view === "teacher") {
        document.getElementById("go-back-btn").style.display = "block";
    }
});

function goBackToSearch() {
    // Navigate to the previous page or a specific search page
    window.history.back(); // Go back to the previous page
    // OR specify a custom URL
    // window.location.href = "/search-page.html";
}








// JavaScript for Chart.js initialization
var ctx = document.getElementById('sgpa-chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',  // Example chart type
    data: {
        labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'],
        datasets: [{
            label: 'SGPA',
            data: [7.5, 8.0, 7.8, 8.2],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,  // Makes the chart responsive
        maintainAspectRatio: false,  // Ensures the aspect ratio can change to fit the container
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

