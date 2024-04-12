// Function to generate a unique complaint ID
function generateComplaintID() {
    // Get the current date and time
    var currentDate = new Date();
    
    // Extract year, month, day, hours, minutes, and seconds
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Months are zero-indexed
    var day = currentDate.getDate();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
  
    // Format the components into a unique ID string
    var complaintID = 'C' + year + pad(month) + pad(day) + pad(hours) + pad(minutes) + pad(seconds);
  
    return complaintID;
  }
  
  // Helper function to pad single-digit numbers with leading zeros
  function pad(num) {
    return num < 10 ? '0' + num : num;
  }
  
  // Function to handle form submission
  function submitComplaint(event) {
    event.preventDefault();
  
    // Get form data
    var complaintType = document.getElementById('complaintType').value;
    var hostelID = document.getElementById('hostelID').value;
    var issueDescription = document.getElementById('issueDescription').value;
    var issueDate = document.getElementById('issueDate').value;
  
    // Generate a unique complaint ID
    var complaintID = generateComplaintID();
  
    // Create a new table row
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${complaintID}</td>
      <td>${complaintType}</td>
      <td>${hostelID}</td>
      <td>${issueDescription}</td>
      <td>${issueDate}</td>
      <td>-</td>
      <td>Pending</td>
    `;
  
    // Append the new row to the table body
    var complaintHistoryTable = document.getElementById('complaintHistory').getElementsByTagName('tbody')[0];
    complaintHistoryTable.appendChild(newRow);
  
    // Clear form fields
    document.getElementById('complaintForm').reset();
  }
  
  // Add event listener for form submission
  document.getElementById('complaintForm').addEventListener('submit', submitComplaint);

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }