import React, { useEffect, useState } from 'react';
import './emp.css';

const Employee = () => {
    const [employee, setEmployee] = useState({
        empID: "",
        empName: "",
        empDesignation: "",
        empSalary: ""
    });
    const [empList, setEmpList] = useState([]);

    // handel form of employee
    const handleForm = (e) => {
        if (employee.empID !== empList.empID) {
            setEmpList([...empList, { ...employee }]);
            setEmployee({
                empID: "",
                empName: "",
                empDesignation: "",
                empSalary: ""
            })
            console.table(empList);
        } else {
            alert("employee id exists")
        }
    }
    const Remove = (id) => {
        console.log(empList);
        // var newList = empList.filter((emp)=> emp.id !== id);
        var newList = [...empList];
        newList.splice(id, 1);
        setEmpList(newList);
    }

    return (
        <div className='empContainer'>
            <div className="header"><h1>Employee Data</h1></div>
            <div className="empData">
                <div className="form">
                    <form>
                        <div className="input">
                            <input required type='text' id='empid' placeholder='employee ID' onChange={(e) => setEmployee({ ...employee, empID: e.target.value })} value={employee.empID} />
                        </div>
                        <div className="input">
                            <input required type='text' id='empid' placeholder='Name' onChange={(e) => setEmployee({ ...employee, empName: e.target.value })} value={employee.empName} />
                        </div>
                        <div className="input">
                            <input required type='text' id='empid' placeholder='enter designation' onChange={(e) => setEmployee({ ...employee, empDesignation: e.target.value })} value={employee.empDesignation} />
                        </div>
                        <div className="input">
                            <input required type='text' id='empid' placeholder='Salary' onChange={(e) => setEmployee({ ...employee, empSalary: e.target.value })} value={employee.empSalary} />
                        </div>
                        <div className="button">
                            <button type='submit' onClick={handleForm} >Register</button>
                        </div>
                    </form>
                </div>
                <div className="display">
                    <div className="data">
                        <table>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Delete</th>
                        </table>
                    </div>
                    {
                        empList.map((curEmp, idx) => {
                            return (
                                <div className="view" key={idx}>
                                    {
                                        <tbody className="cols">
                                            <td>{curEmp.empID}</td>
                                            <td>{curEmp.empName}</td>
                                            <td>{curEmp.empDesignation}</td>
                                            <td>{curEmp.empSalary}</td>
                                            <td><button onClick={() => Remove(idx)}>Delete</button></td>
                                        </tbody>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Employee;