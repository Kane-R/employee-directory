import React, {useState, createContext, useEffect} from 'react';

export const AppContext = createContext();

export const AppProvider = props => {

//Initially data called from API
const [employees, setEmployees] = useState({}); 
//State check to see if it's done being called
const [fetching, setFetching] = useState(false); 
// Set search data
const [searching, setSearching] = useState(""); 
// Set alphabetical sort data
const [sorting, setSorting] = useState("alpha");
// Set image src img
const [sortImg, setSortImg] = useState("/img/arrow-up.svg"); 

const fetchEmployeeData = async () => {
  let response = await fetch('https://randomuser.me/api/?results=200&nat=us');
  let data = await response.json();
  setEmployees(data.results);
  setFetching( fetching === false ? true: false);
}

useEffect(() => {
  fetchEmployeeData();
},[]);



  return(
    <AppContext.Provider value={{ 
      employeeData: [employees, setEmployees], 
      fetch: [fetching, setFetching], 
      search: [searching, setSearching], 
      sort: [sorting, setSorting],
      sortImgSrc: [sortImg, setSortImg]
      }}>
      {props.children}
    </AppContext.Provider>
  );
}
