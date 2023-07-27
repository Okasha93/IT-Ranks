import './App.css';
import React  from 'react';
import StatusAllocation from './Components/StatusAllocation/StatusAllocation';
import PriorityAllocation from './Components/PriorityAllocation/PriorityAllocation';
import BubbleChart from './Components/BubbleChart/BubbleChart';
import ResolutionTime from './Components/ResolutionTime/ResolutionTime';
import ResponseTime from './Components/ResponseTime/ResponseTime';
import ResolutionDelay from './Components/ResolutionDelay/ResolutionDelay';
import ResponseDelay from './Components/ResponseDelay/ResponseDelay';
import MonthPicker from './Components/MonthPicker/MonthPicker';
import ProductSelector from'./Components/ProductSelector/ProductSelector';
import Priority from './Components/Priority/Priority';
import DateRangePicker from './Components/DateRangePicker/DateRangePicker';



const App = () => {
  

  return (
    <div className="container">
      <div className="col">
          <DateRangePicker />
          <MonthPicker />
          <ProductSelector />
          <Priority />
      </div>
      <div className="sec-container">
        <div className="row1">
          <ResolutionTime />
          <ResponseTime />
          <ResolutionDelay />
          <ResponseDelay />
        </div>
        <div className="row2">
          <StatusAllocation className="statusAllocation" />
          <PriorityAllocation className="priorityAllocation" />
        </div>
        <div className="row3">
          <BubbleChart className="bubbleChart" />
        </div>
      </div>
    </div>
  );
};

export default App