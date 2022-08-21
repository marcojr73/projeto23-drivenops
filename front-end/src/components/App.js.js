import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RandomStudents } from "./RandomStudents"
import { Students } from "./Students"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RandomStudents/>} > </Route>
                <Route path="/students"element={<Students/>} > </Route>
            </Routes>
        </BrowserRouter>
    )
}