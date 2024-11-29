// Array of food objects
const foods = [
    { name: "Bean" },
    { name: "Rice" },
    { name: "Yam" },
    { name: "Garri" }
];

// Get the container to append the buttons
const container = document.getElementById('food-container');

// Loop through the food array and create buttons dynamically
foods.forEach(food => {
    // Create a button element
    let button = document.createElement('button');
    button.textContent = food.name;
    button.classList.add('food-button');

    // Append the button to the container
    container.appendChild(button);

    // Add click event to handle background color change
    button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        const allButtons = document.querySelectorAll('.food-button');
        allButtons.forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        this.classList.add('active');
    });
});