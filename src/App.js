import { LoginWithGoogle } from "./component/login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./component/profile/profile";
import { Principal } from "./component/principal/principal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/login" element={<LoginWithGoogle />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
