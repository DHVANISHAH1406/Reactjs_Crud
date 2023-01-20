import { useState } from 'react'
import reactLogo from './assets/react.svg'

import AddEmployee from './table/AddEmployee'
import Employeetable from './table/Employeetable'
import Header from './table/header'
import EditEmployee from './table/EditEmployee'

// function App(){
//   return(
// <AddEmployee></AddEmployee>
//   )
// }
const App = (props) => {
  const EmployeeData = [
  ]
  const [employees, setEmployees] = useState(EmployeeData)

  const addUser = (employee) => {
    employee.id = employees.length + 1  // ID will autoupgreade 
    setEmployees([...employees, employee])
  }
  
  const deleteUser = (id) => {
    setEmployees(employees.filter((user) => user.id !== id))
    alert("Deleted Successfully");
  }
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, firstname: '', lastname: '', email: '', phone: '', gender: '', department: '', skils: '', about: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const editRow = (employee) => {
    setEditing(true)
    setCurrentUser({ id: employee.id, firstname: employee.firstname, lastname: employee.lastname, email: employee.email, phone: employee.phone, gender: employee.gender, department: employee.department, skils: employee.skils, about: employee.about })

  }
  const updateUser = (id, updateUser) => {
    setEditing(false)
    setEmployees(employees.map((user) => (user.id === id ? updateUser : user)))
    alert("Update Successfully");
  }

 
  return (

    <div className="container-fluid p-0">
      <Header></Header>
      <div className="container">
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <div>
                <h2>Edit User</h2>
                <EditEmployee setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}></EditEmployee>
           
              </div>
            ) : (
              <div>
                <h2>Add User</h2>
                <AddEmployee addUser={addUser} ></AddEmployee>
              </div>
            )}
          </div>
          <div>
            <h2>View users</h2>
           
            <Employeetable employees={employees} deleteUser={deleteUser} editRow={editRow} />
         
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
