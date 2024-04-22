  // Function to handle form submission
async function submitComplaint(event) {
  event.preventDefault();

  // Get form data
  var complaintType = document.getElementById('complaintType').value;
  var hostelID = document.getElementById('hostelID').value;
  var issueDescription = document.getElementById('issueDescription').value;
  var issueDate = document.getElementById('issueDate').value;
  // console.log(typeof hostelID); // Check the type of hostelID

// Validate hostelID as an integer
// if (!Number.isInteger(Number(hostelID))) {
//   alert("Hostel ID must be a valid integer.");
//   return; // Stop further execution
// }
  // Create a data object to send to the backend
  const complaintData = {
    compType: complaintType,
    hos_id: hostelID,
    issue: issueDescription,
    issue_date: issueDate
  };

  console.log(complaintData);
  // // Send data to the backend
  // fetch('http://localhost:3000/posts', {
  //   method: 'POST',
  //   mode:  'no-cors',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(complaintData)
  // })
  // // .then(response => response.json())
  // .then(data => {
  //   console.log(data); // Log response from the backend
  //   // Optionally, show a success message or update UI
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  //   // Optionally, show an error message to the user
  // });

  try {
    const response = await fetch('http://localhost:3000/posts/complaint', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(complaintData)
    });
  
    console.log(response); // Log response from the backend
  
  } catch (error) {
    console.error('Error:', error);
  }

  // Create a new table row
  var newRow = document.createElement('tr');
  newRow.innerHTML = `
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

  // Clear form fields except for issueDate
  document.getElementById('complaintType').value = '';
  document.getElementById('hostelID').value = '';
  document.getElementById('issueDescription').value = '';
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

document.addEventListener('DOMContentLoaded', () => {
  // Set the value of the issueDate input to the current date
  const issueDateInput = document.querySelector('#issueDate');
  const currentDate = new Date();
  issueDateInput.value = currentDate.toISOString().split('T')[0];

  console.log('Issue date set to:', issueDateInput.value); // Log the issue date value
});
