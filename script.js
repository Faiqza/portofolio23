$(document).ready(function() {
    $("#moreinfo").click(function() {
        $(".container.card.text-bg-dark.border-primary.mb-3").slideToggle(800); // 800 milliseconds (0.8 seconds)

        // Toggle button text
        if ($(this).text() === "More info") {
            $(this).text("Less info");
        } else {
            $(this).text("More info");
        }
    });
});
function onformsubmit(e) {
    // You should use document.querySelector() or a similar method to select elements by their IDs.
    const email = document.querySelector("#Email1");
    const subject = document.querySelector("#message");

    if (!email.value.trim()) { // Check if the email field is empty or contains only whitespace.
        alert("Email is required");
        e.preventDefault(); // Prevent the form from submitting if validation fails.
    } else if (!subject.value.trim()) { // Check if the subject field is empty or contains only whitespace.
        alert("Subject is required");
        e.preventDefault();
    } else if (!message.value.trim()) { // Check if the message field is empty or contains only whitespace.
        alert("Message is required");
        e.preventDefault();
    } else {
        alert("Form has been submitted");
        // If all fields are filled, the form will be submitted.
    }
}

