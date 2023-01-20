import React from 'react'
import Header from './header'
import { useState,useMemo } from 'react'
import Pagination from './Pagination';
import $ from 'jquery';

function Employeetable(props){
  let PageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return props.employees.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const handleSearch = (e) => {

    // console.log($("#Datatbl tr").children().text());

    var value = (e).toLowerCase();

    $("#Datatbl tr").filter(function () { 
      $(this).toggle($(this).find("td").text().toLowerCase().indexOf(value) > -1) })

};

  return(
    <>
    {/* <form className="d-flex">

      <input className="form-control-sm mb-2" type="text" placeholder="Search" />
      <button className="btn btn-primary mb-2 ms-2" type="button">Search</button>
    </form> */}
    <input className="form-control-sm mb-2" id="txtSearch" type="text" placeholder="Search.." onChange={(e) => handleSearch(e.target.value)}></input>
    <table className="table table-striped table-danger">
    <thead className="table-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">FirstName</th>
        <th scope="col">LastName</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Gender</th>
        <th scope="col">Department</th>
        <th scope="col">Skils</th>
        <th scope="col">About</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody id='Datatbl'>
      {props.employees.length > 0 ? (
        props.employees.map((employee) => (
          <tr key={employee.id}>
            <td >{employee.id}</td>
            <td >{employee.firstname}</td>
            <td >{employee.lastname}</td>
            <td >{employee.email}</td>
            <td >{employee.phone}</td>
            <td >{employee.gender}</td>
            <td >{employee.department}</td>
            <td >{employee.skils}</td>
            <td className='w-25'>{employee.about}</td>
            <td className='w-25'>
              <button className="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#staticBackdropA" onClick={() => {
                props.editRow(employee)
              }}>Edit</button>
              <button className="btn btn-danger ml-2" onClick={
                () => props.deleteUser(employee.id)
              }
              >Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
       
      </tr>
      )}

    </tbody>
  </table>
  <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={props.employees.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
  </>
  )
}





export default Employeetable
