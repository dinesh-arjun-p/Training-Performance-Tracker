// Function to handle the login logic
// Array of users with roles and credentials
const users = [
    // {
    //     email: "dinesharjun.ec22@bitsathy.ac.in",
    //     password: "dinesh@2004",
    //     role: "student"  // Role: student
    // },
    // {
    //     email: "teacher@bitsathy.ac.in",
    //     password: "teacher",
    //     role: "teacher"  // Role: teacher
    // },
    // {
    //     email: "admin@bitsathy.ac.in",
    //     password: "admin",
    //     role: "admin"  // Role: admin
    // }
];

// Function to handle login
// Handle registration
function handleRegister(event) {
    event.preventDefault();

    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const role = document.getElementById('register-role').value;

    if (!email || !password || !confirmPassword || !role) {
        alert("Please fill out all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Store user data in localStorage (or send it to a server)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ email, password, role });
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful!");
    showLoginPage();
}

// Handle login
function handleLogin(event) {
    event.preventDefault();  // Prevent form submission

    const email = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const user = existingUsers.find(user => user.email === email && user.password === password);

    if (user) {
        // Redirect based on role
        switch (user.role) {
            case "student":
                window.location.href = "student_page.html";
                break;
            case "teacher":
                window.location.href = "teacher_page.html";
                break;
            case "admin":
                window.location.href = "admin.html";
                break;
            default:
                alert("Invalid role");
        }
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}

function showRegisterPage() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}

function showLoginPage() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}
console.log("Data saved:", JSON.stringify(users));
