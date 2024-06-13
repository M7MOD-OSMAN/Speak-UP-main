import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { useState } from "react";
import {
  Layout,
  Home,
  About,
  Scenario,
  AdminLayout,
  Dashboard,
  Login,
  Admin,
  Cases,
  Case,
  ChatPage,
  NewReport,
  ReportNumber,
  ReportStatus,
  TrackReport,
  Analysis,
  ProtectedRoutes,
} from "./pages";

// const ProtectedRoutes = () => {
//   // TODO: Use authentication token
//   const localStorageToken = localStorage.getItem("token");

//   return true ? (
//     <>
//       hihihihihihihihi
//       <Outlet />
//     </>
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "scenario", element: <Scenario /> },
      { path: "new-rep", element: <NewReport /> },
      { path: "chat-page", element: <ChatPage /> },
      { path: "rep-num", element: <ReportNumber /> },
      { path: "track-rep", element: <TrackReport /> },
      { path: "track-status", element: <ReportStatus /> },
      { path: "login", element: <Login /> },

      {
        path: "admin",
        element: <ProtectedRoutes />,
        children: [
          { index: true, element: <Cases /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "cases", element: <Cases /> },
          { path: "cases/:no", element: <Case /> },
          { path: "analysis", element: <Analysis /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={routes} />

      {/* <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/scenario" exact element={<Scenario />} />
          <Route path="/about" element={<About />} />
          <Route path="/new-report" element={<NewReport />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/rep-num" element={<ReportNumber />} />
          <Route path="/scenario/track-rep" element={<TrackReport />} />
          <Route path="/scenario/rep-status" element={<ReportStatus />} />
        </Routes>
        <Footer />
      </HashRouter> */}
    </div>
  );
}

export default App;
