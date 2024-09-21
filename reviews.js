window.addEventListener("load", start, false);

function start() {
    getPictures("all.xml");
    document.getElementById("feedbackForm").addEventListener("submit", feedbackForm, false);
}

// Handling form submission
function feedbackForm(event) {
    event.preventDefault();  // Prevents form from submitting and reloading the page

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var feedback = document.getElementById("feedbackform").value;

    // Update resultant area with a thank you message
    $("#resultantArea").text("We Appreciate Your Feedback, " + firstName + " " + lastName);

    // Append new feedback to reviews section
    var contentArea = document.getElementById("contentArea");
    var divTag = document.createElement("div");
    divTag.className = "card";

    var h2 = document.createElement("h2");
    h2.textContent = "Feedback from " + firstName + " " + lastName;

    var pTag = document.createElement("p");
    pTag.textContent = feedback;

    var hrTag = document.createElement("hr");

    // Append the new elements to the card
    divTag.appendChild(h2);
    divTag.appendChild(pTag);
    divTag.appendChild(hrTag);

    // Append the card to the content area
    contentArea.appendChild(divTag);

    // Clear the form after submission
    document.getElementById("feedbackForm").reset();
}


// Fetch and display reviews from the XML file (existing reviews)
function getPictures(url) {
    $.ajax({
        type: "GET",
        url: url,
        dataType: "xml",
        success: handleXML,
        error: handleError
    });
}

// Handle XML success: populate reviews
function handleXML(xml) {
    // clearpictures();
    var contentArea = document.getElementById("contentArea");
    $(xml).find('review').each(function () {
        var name = $(this).find('name').text();
        var tagLine = $(this).find('tagLine').text();
        var comment = $(this).find('comment').text();

        var divTag = document.createElement("div");
        divTag.className = "card";

        var h2 = document.createElement("h2");
        h2.textContent = name;

        var h3 = document.createElement("h3");
        h3.textContent = tagLine;

        var pTag = document.createElement("p");
        pTag.textContent = comment;

        var hrTag = document.createElement("hr");

        // Append the new elements to the card
        divTag.appendChild(h2);
        divTag.appendChild(h3);
        divTag.appendChild(pTag);
        divTag.appendChild(hrTag);

        // Append the card to the content area
        contentArea.appendChild(divTag);
    });
}

// Handle AJAX error
function handleError() {
    console.error("Error loading reviews from XML");
}