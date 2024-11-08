import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Registration";
import Apartments from "./Pages/Apartments";
import IndividualHouse from "./Pages/IndividualHouse";
import LandPlots from "./Pages/LandPlots";
import OngoingProject from "./Pages/OngoingProjects";
import Navbar from "./Components/Navbar";
import Home from "./Pages/HomePage";
import Footer from "./Components/Footer";
import SingleIndividualHouse from "./Pages/IndividualHouseSinglePage";
import SingleApartments from "./Pages/ApartmentSinglePage";
import SingleLandPlots from "./Pages/LandPlotSinglePage";
import SingleOngoingProject from "./Pages/OngoingProjectSinglePage";
import NotFoundPage from "./Pages/NotFoundPage";
export const HomeLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);
const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="apartments" element={<Apartments />}>
          <Route path="property/:id" element={<SingleApartments />} />
        </Route>
        <Route path="ongoing-projects" element={<OngoingProject />}>
          <Route path=":id" element={<SingleOngoingProject />} />
        </Route>
        <Route path="individual-house" element={<IndividualHouse />}>
          <Route path=":id" element={<SingleIndividualHouse />} />
        </Route>
        <Route path="land-plots" element={<LandPlots />}>
          <Route path=":id" element={<SingleLandPlots />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default App;
