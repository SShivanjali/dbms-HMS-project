document.addEventListener('DOMContentLoaded', function() {
    const leaveRequestsTable = document.getElementById('leaveRequests');
  
    // Function to add a new row to the leave requests table
    function addLeaveRequestRow(leaveData) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${leaveData.leaveType}</td>
        <td>${leaveData.hostelID}</td>
        <td>${leaveData.name}</td>
        <td>${leaveData.outDateTime}</td>
        <td>${leaveData.inDateTime}</td>
        <td>${leaveData.destination}</td>
        <td>${leaveData.reason}</td>
        <td>${leaveData.status}</td>
        <td><button onclick="approveLeave(this)">Approve</button><button onclick="rejectLeave(this)">Reject</button></td>
      `;
      leaveRequestsTable.querySelector('tbody').appendChild(newRow);
    }
  
    // Sample function to simulate approval of leave
    window.approveLeave = function(button) {
      const row = button.closest('tr');
      row.cells[7].textContent = 'Approved';
    };
  
    // Sample function to simulate rejection of leave
    window.rejectLeave = function(button) {
      const row = button.closest('tr');
      row.cells[7].textContent = 'Rejected';
    };
  
    // Sample leave request data (to be replaced with actual data from student leave requests)
    const sampleLeaveData = [
      {
        leaveType: 'Short',
        hostelID: 'H123',
        name: 'John Doe',
        outDateTime: '2024-04-21T08:00',
        inDateTime: '2024-04-22T17:00',
        destination: 'Home',
        reason: 'Family emergency',
        status: 'Pending'
      },
      // Add more sample leave requests if needed
    ];
  
    // Add sample leave requests to the table
    sampleLeaveData.forEach(addLeaveRequestRow);
  });
  

  
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  