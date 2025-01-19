let isUserLoggedIn = false;  // Modify this to true when the user logs in
let names = [];  // To store names added to the spinner

// Function to handle wheel spinning
function spinWheel() {
    if (!isUserLoggedIn) {
        document.getElementById("login-modal").style.display = "flex";
        return;
    }

    if (names.length === 0) {
        alert("Please add some names to the spinner!");
        return;
    }

    let wheel = document.getElementById("wheel");
    let randomDeg = Math.floor(Math.random() * 360 + 3600);  // Random rotation value
    wheel.style.transition = "transform 4s ease-out";
    wheel.style.transform = `rotate(${randomDeg}deg)`;
}

// Function to close the login modal
function closeLoginModal() {
    document.getElementById("login-modal").style.display = "none";
}

// Function to simulate login
function login() {
    // Simulate a login (this should be replaced with real authentication logic)
    isUserLoggedIn = true;
    closeLoginModal();
    alert("You are now logged in and can spin the wheel!");
}

// Function to add name to the spinner
function addName() {
    const nameInput = document.getElementById("name-input");
    const name = nameInput.value.trim();
    
    if (name && !names.includes(name)) {
        names.push(name);
        updateWheel();
        nameInput.value = '';  // Clear the input
    } else {
        alert("Please enter a valid name.");
    }
}

// Function to update the wheel with new names
function updateWheel() {
    const wheel = document.getElementById("wheel");
    wheel.innerHTML = '';  // Clear current wheel content

    // Create segments for each name
    const segments = names.map((name, index) => {
        const segment = document.createElement('div');
        segment.classList.add('segment');
        segment.style.transform = `rotate(${(360 / names.length) * index}deg)`;
        segment.style.backgroundColor = getRandomColor();
        segment.innerHTML = `<span>${name}</span>`;
        return segment;
    });

    segments.forEach(segment => wheel.appendChild(segment));
}

// Helper function to get random color for segments
function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF1', '#F1FF33', '#FF5733'];
    return colors[Math.floor(Math.random() * colors.length)];
}
