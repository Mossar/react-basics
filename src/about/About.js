import React, {useState, useEffect} from 'react';
import Employee from './Employee';
import axios from 'axios';

const About = () => {
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
        setEmployees(response.data);
      });
  }, []);

  if (!employees) {
    return "Loading...";
  }

  return (
    <div className="about">
      {employees.map(employee => (
        <Employee
          fullName={employee.employee_name}
          image={employee.profile_image}/>
      ))}
    </div>
  );
};

export default About;
