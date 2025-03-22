document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("yourFormId").onsubmit = function(event) {
        event.preventDefault();
        connect();
    };
});

function connect() {
    var email = document.getElementById("email").value;
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // store the values in the local storage
    localStorage.setItem("email", email);
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("phone", phone);
    localStorage.setItem("message", message);

    if (email == "" || firstname == "" || lastname == "" || phone == "" || message == "") {
        alert("Please fill in all fields");
        return;
    } else {
        alert("Form submitted successfully!");
    }
}


function learnMore(productName) {
    alert(`To get more details about ${productName}, please search on Google.`);
  }