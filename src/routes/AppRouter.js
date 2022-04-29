import * as React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NavBar from "../dreams/components/navbar/NavBar";

import { routes } from "./routes";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <React.Suspense fallback={<span>Loading...</span>}>
          <Routes>
          
            {
              routes.map(({path, Element}) => (
                <Route 
                  key={path}
                  path={path} 
                  element= {<Element />}
                  
                />
              ))
            }
            <Route path="/" element={<Navigate to={routes[0].path} />} />
          </Routes>

        </React.Suspense>
      
    </BrowserRouter>
  )
}

export default AppRouter