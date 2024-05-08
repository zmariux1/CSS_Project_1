// ===================== Scroll Reveal ===================== 


// Initialize ScrollReveal - with motion 
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200
});

// Apply reveal animation to the .formTitle element
ScrollReveal().reveal(".formTitle", { origin: "top" });
ScrollReveal().reveal(".sendBtn", { origin: "bottom" });


// Initialize ScrollReveal - with NO motion 
// 
ScrollReveal({
  distance: "0px",
  duration: 1500,
  delay: 100
});

// Apply reveal animation to the .formTitle element
ScrollReveal().reveal(".inputs");







function saveFormData() {
  // ===================== Form Validation ===================== 

  // Get form data
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let comments = document.getElementById("comments").value;

  // Validate form data (optional)
  if (name.trim().length < 2) {
      alert("Name must contain at least 2 characters.");
      return false; // Prevent form submission
  }

  if (comments.value.trim() === "") {
    alert("Please specify your request.");
    return false; // Prevent form submission
  }
  if (comments.trim().length < 10) {
      alert("Comments must contain at least 10 characters.");
      return false; // Prevent form submission
  }


  // ===================== Store Data Locally  ===================== 

  // Create a string containing the form data
  let formDataString = `Name: ${name}\nEmail: ${email}\nComments: ${comments}`;

  // Create a Blob object containing the data
  let blob = new Blob([formDataString], { type: "text/plain" });

  // Create a temporary link element
  let link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "formData.txt";

  // Append the link to the document body and trigger a click event to prompt download
  document.body.appendChild(link);
  link.click();

  // Clean up: remove the link from the document body
  document.body.removeChild(link);

  // Optionally, you can display a confirmation message to the user
  alert("Form data saved successfully!");

  // Prevent form submission (since we've already handled form submission)
  return false;
}
