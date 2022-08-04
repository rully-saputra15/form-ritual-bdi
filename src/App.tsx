import React, {Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainContainer} from "./components/MainLayout";
import LoadingComponent from "./components/LoadingComponent";


const App = () => {

  const DashboardContainer = React.lazy(
    () => import("./pages/dashboard/DashboardPageContainer")
  );

  const GojukaiContainer = React.lazy(
    () => import("./pages/gojukai/GojukaiPageContainer")
  );

  const PemberkahanNikahContainer = React.lazy(
    () => import("./pages/pemberkahan-nikah/PemberkahanNikahPageContainer")
  );
  return (
    <MainContainer>
      <Suspense fallback={<LoadingComponent/>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardContainer/>}/>
            <Route path="/gojukai" element={<GojukaiContainer/>}/>
            <Route path="/pemberkahan-nikah" element={<PemberkahanNikahContainer/>}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </MainContainer>
  );
};

export default App;
