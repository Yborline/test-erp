// import "./App.css";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import { Container } from "./App.styled";
import { ThemeProvider } from "styled-components";
// import ClientProject from "./Pages/ClientProject/ClientProject";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { lightTheme } from "./theme/ThemeConfig";

const App = () => {
  const ClientProject = lazy(() =>
    import("./Pages/ClientProject/ClientProject")
  );
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <Suspense>
          <NavBar />
          <Routes>
            <Route path="/" element={<ClientProject />}></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
        </Suspense>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  );
};

export default App;
