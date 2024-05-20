document.addEventListener('DOMContentLoaded', function() {
    const flightForm = document.getElementById('flightForm');
    const flightResult = document.getElementById('flightResult');

    flightForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form data
        const destination = document.getElementById('destination').value;
        const currentLocation = document.getElementById('currentLocation').value;
        const departure = document.getElementById('departure').value;
        const returnDate = document.getElementById('returnDate').value;
        const picture = document.getElementById('picture').files[0];

        // Create a new div to display flight information
        const flightInfoDiv = document.createElement('div');
        flightInfoDiv.classList.add('flight-info');

        // Populate the flight information
        flightInfoDiv.innerHTML = `
            <p><strong>Destination:</strong> ${destination}</p>
            <p><strong>Current Location:</strong> ${currentLocation}</p>
            <p><strong>Departure Date:</strong> ${departure}</p>
            <p><strong>Return Date:</strong> ${returnDate}</p>
        `;

        // Display the flight information
        flightResult.appendChild(flightInfoDiv);

        // Clear form fields
        flightForm.reset();

        // Show success message
        flightResult.innerHTML += '<p>Flight added successfully.</p>';

        // You can also save the flight information to a backend database here if required
    });
});
