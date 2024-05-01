function validateNumber() {
    const input = document.getElementById("numberInput").value;
    const message = document.getElementById("message");
  
    // Basic validation using regular expression
    const regex = /^-?\d+\.?\d*(?:[eE][+-]?\d+)?$/;
    if (regex.test(input)) {
      message.textContent = "Valid scientific number!";
      message.style.color = "green"; 
    } else {
      message.textContent = "Invalid input. Please enter a scientific number ";
      message.style.color = "red"; 
    }
  }
  