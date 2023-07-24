// import "./App.css";
import { Suspense, lazy, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import { Container } from "./App.styled";
import { ThemeProvider } from "styled-components";

import ctx from "./context/themeContext";
import { lightTheme, darkTheme } from "./theme/ThemeConfig";

const App = () => {
  const { themes } = useContext(ctx);

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
    </ThemeProvider>
  );
};

export default App;
