import React,{useContext} from 'react';
import { AppContext } from './AppContext';

const EmployeeSearch = () => {

  const {search} = useContext(AppContext);
  let [searching, setSearching] = search;
  const handleChange = e => {
    setSearching( searching = e.target.value);
  };

  return(
    <React.Fragment>
      <header>
        <h1>Employee Lookup</h1>
      </header>

      <section className="filterBar">
        <input 
          type="text" 
          placeholder="Filter by employee name..."
          value={searching}
          onChange={handleChange}
        />
      </section>
    </React.Fragment>
  );
}

export default EmployeeSearch