import { Route, Routes } from "react-router-dom";
import Signin from "./Sign_in";
import HomePage from "./HomePage";
import Profile from "./LoginRegister";
import Signup from "./Sign_up";
import CreateEmail from "./CreateEmail.jsx";
import CreatePassword from "./CreatePassword.jsx";
import CompliteSignUp from "./CompliteSignUp.jsx";

export default function Dashboard() {
    return (
        <div >
            <Routes>
                <Route path='Signup' element={<Signup />} />
                <Route path='Signin' element={<Signin />} />
                <Route path='createemail/:name/:surname' element={<CreateEmail />} />
                <Route path='createpassword/:name/:surname/:email' element={<CreatePassword />} />
                <Route path='complite/:email' element={<CompliteSignUp />} />
                <Route path=':email' element={<HomePage />} />
                <Route path='/' element={<HomePage />} />
            </Routes>

        </div>

    )
}