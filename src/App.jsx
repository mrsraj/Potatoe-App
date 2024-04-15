import './App.css'
import Header from './Header.jsx';
import Container from './Container.jsx';
import ServiceModel from './Model Page/ServiceModel.jsx';

// import featue Page

import BillPage from './FeaturePage/BillPage.jsx';
import Recharge from './FeaturePage/Recharge.jsx';
import JobsPage from './FeaturePage/JobsPage.jsx';
import BlogsPage from './FeaturePage/BlogsPage.jsx';
import FilterData from './FilterData.jsx';


import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>

      <Header />
      <div className="ServiceModelDiv">
        <ServiceModel />
      </div>

      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/BillPage' element={<BillPage />} />
        <Route path='/Recharge' element={<Recharge />} />
        <Route path='/JobsPage' element={<JobsPage />} />
        <Route path='/BlogsPage' element={<BlogsPage />} />
        <Route path='/receiver' element={<FilterData />} />
      </Routes>

      {/* <Container /> */}

    </div>
  );
}

export default App;
