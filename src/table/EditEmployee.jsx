import React, { useState } from 'react'
import AddEmployee from './AddEmployee'
import Employeetable from './Employeetable'
const EditEmployee = (props) => {
    const initialFormState = { id: null, firstname: '', lastname: '', email: '', phone: '', gender: '', department: '', skils: '', about: '' }
    const [employee, setEmployee] = useState(props.currentUser)
    const handleInputChange = (event) => {
        const { name, value } = event.target

        setEmployee({ ...employee, [name]: value })

    }
    const handleUpdate = (event) => {
        event.preventDefault()
        props.updateUser(employee.id, employee)
    }
    const [genderValue, genderInputProps] = useState(null);
    const option = ["Select your Option", "PHP", ".NET", "SEO", "Mobile", "Admin/HR", "Account"];
    const [selected, setSeleted] = useState(option[0]);
    const [skilValue, skilInputProps] = useState(initialFormState);
    return (
        <>
           {/* <AddEmployee addUser={addUser} ></AddEmployee> */}
            <div
                className="modal fade modal-lg"
                id="staticBackdropA"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Edit Details
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        {/* ----- Model Body ----- */}
                        <div className="modal-body">
                            <form onSubmit={handleUpdate}>
                                <div className="form-group">
                                    <div className='row'>
                                        <div className='col'>
                                            <label>First Name</label>
                                            <input type="text" className="form-control" placeholder="FirstName" name="firstname" value={employee.firstname} onChange={handleInputChange} required />
                                        </div>
                                        <div className='col'>
                                            <label>Last Name</label>
                                            <input type="text" className="form-control" placeholder="LastName" name="lastname" value={employee.lastname} onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" placeholder="Email" name="email" value={employee.email} onChange={handleInputChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={employee.phone} onChange={handleInputChange} required />
                                </div>
                                <label>Gender</label>
                                <div className='form-group'>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="Male" onChange={handleInputChange} />
                                        <label className="form-check-label">Male</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="Female"  onChange={handleInputChange} />
                                        <label className="form-check-label">Female</label>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <label>Department</label>
                                    <select className='form-control' name='department' value={employee.department} onChange={handleInputChange}>
                                        {option.map((value) => (
                                            <option value={value} key={value}>
                                                {value}
                                            </option>
                                        ))}
                                    </select>


                                </div>
                                <label>Skills</label>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" name="skils" value="Programming" onChange={handleInputChange} />
                                            <label className="form-check-label" htmlFor="exampleCheck1" >Programming</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="skils" value="Communication" checked={skilValue === "Programming"}
                                                {...skilInputProps} onChange={handleInputChange} />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Communication</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="skils" value="Finance" checked={skilValue === "Programming"}
                                                {...skilInputProps} onChange={handleInputChange} />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Finance</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="skils" value="Recruitment" checked={skilValue === "Programming"}
                                                {...skilInputProps} onChange={handleInputChange} />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Recruitment</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="skils" value="Optimization" checked={skilValue === "Programming"}
                                                {...skilInputProps} onChange={handleInputChange} />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Optimization</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="skils" value="App Development" checked={skilValue === "Programming"}
                                                {...skilInputProps} onChange={handleInputChange} />
                                            <label className="form-check-label" htmlFor="exampleCheck1">App Development</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="skils" value="Frontend Technology" checked={skilValue === "Programming"}
                                                {...skilInputProps} onChange={handleInputChange} />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Frontend Technology</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="skils" value="Backend Technology" checked={skilValue === "Programming"}
                                                {...skilInputProps} onChange={handleInputChange} />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Backend Technology</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>About</label>
                                    <textarea className="form-control" name="about" value={employee.about} onChange={handleInputChange} cols="10" rows="5" required></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        Update
                                    </button>
                                </div>



                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>








    )
}

export default EditEmployee
