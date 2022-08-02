import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, { Suspense } from "react";
import {MainContainer} from "./components/MainLayout";
import LoadingComponent from "./components/LoadingComponent";


const App = () => {

  const DashboardContainer = React.lazy(
    () => import("./pages/dashboard/DashboardPageContainer")
  );

  return (
    <BrowserRouter>
      <MainContainer>
        <Suspense fallback={<LoadingComponent />}>
          <Routes>
            <Route path="/" element={<DashboardContainer />} />
          </Routes>
        </Suspense>
      </MainContainer>
    </BrowserRouter>
  )
}

export default App
