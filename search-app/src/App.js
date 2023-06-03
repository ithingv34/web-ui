import { Navigate, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import SearchInput from "./components/SearchInput";


function App() {
  return (
    <div className='bg-slate-50 min-h-screen'>
      <div className="flex flex-wrap justify-center relative">
      <SearchInput/> 
      {/* 검색 input */}
      <NavigationBar/>
      </div>
      <Routes>
        <Route exact path="/" element={<Navigate to="/all"/>}/>
      </Routes>
    </div>
  );
}

export default App;
