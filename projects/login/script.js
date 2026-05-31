function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (email === "" || password === "") {
        message.style.color = "red";
        message.innerText = "Please fill in all fields";
    }

    else if (!email.includes("@")) {
        message.style.color = "red";
        message.innerText = "Invalid email format";
    }

    else if (email === "admin@gmail.com" && password === "1234") {

        // SAVE LOGIN STATE
        localStorage.setItem("loggedIn", "true");

        message.style.color = "green";
        message.innerText = "Login successful! Redirecting...";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1200);
    }

    else {
        message.style.color = "red";
        message.innerText = "Wrong email or password";
    }
}