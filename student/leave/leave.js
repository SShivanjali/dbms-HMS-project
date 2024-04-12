document.addEventListener('DOMContentLoaded', function() {
    const leaveForm = document.getElementById('leaveForm');
    const leaveHistory = document.getElementById('leaveHistory');
  
    leaveForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      const leaveType = document.getElementById('leaveType').value;
      const hostelID = document.getElementById('hostelID').value;
      const name = document.getElementById('name').value;
      const outDateTime = document.getElementById('outDateTime').value;
      const inDateTime = document.getElementById('inDateTime').value;
      const destination = document.getElementById('destination').value;
      const reason = document.getElementById('reason').value;
  
    // Check if any field is empty
    if (!leaveType || !hostelID || !name || !outDateTime || !inDateTime || !destination || !reason) {
        alert('Please fill in all the fields.');
        return;
      }
  
      // Create a new table row for the leave history
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${leaveType}</td>
        <td>${hostelID}</td>
        <td>${name}</td>
        <td>${outDateTime}</td>
        <td>${inDateTime}</td>
        <td>${destination}</td>
        <td>${reason}</td>
        <td>Pending</td>
      `;
  
      // Append the new row to the leave history table
      leaveHistory.querySelector('tbody').appendChild(newRow);
  
      // Reset the form
      leaveForm.reset();
    });
  });
  

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  