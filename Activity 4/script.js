let students = [];

    const addRecord = () => {
      const fname = document.getElementById('fname').value;
      const mname = document.getElementById('mname').value;
      const lname = document.getElementById('lname').value;
      const phone = document.getElementById('phone').value;
      const address = document.getElementById('address').value;

      const newStudent = { fname, mname, lname, phone, address };
      students = [...students, newStudent];

      renderTable();
    };

    const renderTable = () => {
      const tbody = document.getElementById('tableBody');
      tbody.innerHTML = '';

      students.forEach(({ fname, mname, lname, phone, address }) => {
        const row = `<tr>
            <td>${fname}</td>
            <td>${mname}</td>
            <td>${lname}</td>
            <td>${phone}</td>
            <td>${address}</td>
          </tr>`;
        tbody.innerHTML += row;
      });
    };