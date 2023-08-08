import React  from 'react';
import { DateRangePicker, MonthPicker, ProductSelector, Priority, ResolutionTime, ResponseTime, ResolutionDelay, ResponseDelay, StatusAllocation, PriorityAllocation, BubbleChart } from './Components/index';
import './App.css';


const App = () => {
  

  return (
    <div className="container">

      <div className='row-one'>
          <DateRangePicker />
          <ResolutionTime />
          <ResponseTime />
          <ResolutionDelay />
          <ResponseDelay />
      </div>

      <div className='row-two'>

        <div className='col'>
          <MonthPicker />
          <ProductSelector />
        </div>

        <div className='row-allocation'>
          <PriorityAllocation/>
          <StatusAllocation/>
        </div>
          
      </div> 

      <div className='row-three'>
          <Priority />
          <BubbleChart />
      </div>

    </div>
  );
};

export default App