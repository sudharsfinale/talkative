import { Button, HStack } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Chats from "./pages/Chats";
const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/chats" element={<Chats />}/>
        </Routes>
      </Router>
  );
};

export default App;
