$(document).ready(function() {
    $("#appointmentForm").submit(function(event) {
        event.preventDefault();

        // Get form data
        var patientName = $("#patientName").val();
        var appointmentDate = $("#appointmentDate").val();
        var appointmentTime = $("#appointmentTime").val();

        // Simulate a backend API call or database storage (replace this with actual backend logic)
        // For demonstration purposes, we'll just display a confirmation message
        var confirmationMessage = `Appointment booked for ${patientName} on ${appointmentDate} at ${appointmentTime}.`;
        $("#confirmationMessage").text(confirmationMessage);
    });
});