import React,{useContext} from 'react';
import { AppContext } from './AppContext';

const EmployeeTable = () => {

  // Grab Search data to filter against
  const {search} = useContext(AppContext);
  const {employeeData} = useContext(AppContext);
  const [employeeDatas, /*setEmployeeDatas*/] =  employeeData;
  const {fetch} = useContext(AppContext);
  const [fetchings, /*setFetchings*/] =  fetch;
  const {sort} = useContext(AppContext);
  const [sorting, setSorting] = sort;
  const {sortImgSrc} = useContext(AppContext);
  const [sortImg, setSortImg] = sortImgSrc;

  const alphaCheck = (e) =>{
    setSorting( sorting === "alpha" ? "notAlpha": "alpha");
    setSortImg( sortImg === "/img/arrow-up.svg" ? "/img/arrow-down.svg": "/img/arrow-up.svg");
  }

  return(
    <table >
      <tbody>
      <tr>
        <th>Picture</th>
        <th className="alpha" onClick={alphaCheck}>Name <img src={sortImg} alt="Sort Arrow" width="13px" height="13px"/></th>
        <th>Email</th>
        <th>Age</th>
        <th>Location</th>
      </tr>
       {fetchings === false ?  
        <tr className="employee"></tr>
        : (
      <React.Fragment>
        {/* Grabs all employee data and filters it for searchfield value */}
       {employeeDatas.filter((employee) => { 
         let name = employee.name.first + ' ' + employee.name.last;
        return name.toLowerCase().includes(search[0].toLowerCase())
       })
        /* Sorts the data for alphabetical forwards for backwards */
       .sort((a,b) =>{
         if (sorting === "alpha"){
          return (a.name.first + ' ' + a.name.last > b.name.first + ' ' + b.name.last) ? 1 : -1;
         }else{
          return (a.name.first + ' ' + a.name.last < b.name.first + ' ' + b.name.last) ? 1 : -1;
         }
        
       })
       /* Loops the content left and send it to the front end  */
       .map((employee, index) => (
    <tr className="employee" key={index}>
      <td className="employee-img"><img src={employee.picture.medium}  alt=""/></td>
      <td className="employee-name">{employee.name.first + ' ' + employee.name.last }</td>
      <td className="employee-email">{employee.email}</td>
      <td className="employee-age">{employee.dob.age}</td>
      <td className="employee-location">{employee.location.state}</td>
    </tr>
))}
      </React.Fragment>
        )}
        </tbody>
    </table>
    );
  }
  
  export default EmployeeTable