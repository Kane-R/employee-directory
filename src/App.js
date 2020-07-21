import React from 'react';
import {AppProvider} from './components/AppContext';
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeTable from './components/EmployeeTable';

function App() {

  return (
    <AppProvider> 
      <div className="App">
        <EmployeeSearch />
        <EmployeeTable />
      </div>
    </AppProvider> 
  );
}

export default App;
