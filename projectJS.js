function generateMealPlan() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;
    const breakfast = document.getElementById('breakfast').value;
    const snack1 = document.getElementById('snack1').value;
    const lunch = document.getElementById('lunch').value;
    const snack2 = document.getElementById('snack2').value;
    const dinner = document.getElementById('dinner').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const mealPlanHTML = `
        <h2>Meal Plan for ${name}</h2>
        <h3>Goal for the Week:</h3>
        <p>${goal}</p>
        <h3>Monday:</h3>
        <ul>
            <li>Breakfast: ${breakfast}</li>
            <li>Snack: ${snack1}</li>
            <li>Lunch: ${lunch}</li>
            <li>Snack: ${snack2}</li>
            <li>Dinner: ${dinner}</li>
        </ul>
        <h3>Tuesday:</h3>
        <!-- Repeat the structure for other days -->
        <ul>
            <li>Breakfast: ${breakfast}</li>
            <li>Snack: ${snack1}</li>
            <li>Lunch: ${lunch}</li>
            <li>Snack: ${snack2}</li>
            <li>Dinner: ${dinner}</li>
        </ul>
        <h3>Wednesday:</h3>
        <ul>
            <li>Breakfast: ${breakfast}</li>
            <li>Snack: ${snack1}</li>
            <li>Lunch: ${lunch}</li>
            <li>Snack: ${snack2}</li>
            <li>Dinner: ${dinner}</li>
        </ul>
        <h3>Thursday:</h3>
        <ul>
            <li>Breakfast: ${breakfast}</li>
            <li>Snack: ${snack1}</li>
            <li>Lunch: ${lunch}</li>
            <li>Snack: ${snack2}</li>
            <li>Dinner: ${dinner}</li>
        </ul>
        <h3>Friday:</h3>
        <ul>
            <li>Breakfast: ${breakfast}</li>
            <li>Snack: ${snack1}</li>
            <li>Lunch: ${lunch}</li>
            <li>Snack: ${snack2}</li>
            <li>Dinner: ${dinner}</li>
        </ul>
        <h3>Saturday:</h3>
        <ul>
            <li>Breakfast: ${breakfast}</li>
            <li>Snack: ${snack1}</li>
            <li>Lunch: ${lunch}</li>
            <li>Snack: ${snack2}</li>
            <li>Dinner: ${dinner}</li>
        </ul>
        <h3>Sunday:</h3>
        <ul>
            <li>Breakfast: ${breakfast}</li>
            <li>Snack: ${snack1}</li>
            <li>Lunch: ${lunch}</li>
            <li>Snack: ${snack2}</li>
            <li>Dinner: ${dinner}</li>
        </ul>
    `;

    const newWindow = window.open('', '_blank');
    newWindow.document.write(mealPlanHTML);
}

function clearMealPlan() {
    document.getElementById('mealPlanForm').reset();
}

function validateEmail(email) {
    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(String(email).toLowerCase());
    // Use a regular expression or other validation logic to check email format
    // Return true if the email is valid, otherwise false
}
