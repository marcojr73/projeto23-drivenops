import { useEffect, useState } from "react";
import axios from "axios";

export function Students() {
  const [students, setStudents] = useState(null);
    
  useEffect(async () => {
    const API_URL = process.env.REACT_APP_BASE_URL;
    try {
      const response = await axios.get(`${API_URL}/students`);
      const students = response.data;
      console.log(response.data)
      if(students.length === 0){
        alert("Putz! Não há estudantes cadastrados para o sorteio!");
      } else {
        setStudents(students);
      }
    } catch (error) {
        console.log(error)
      alert("Não foi possível realizar o sorteio!");
    }
  }, []);
  
  return (
    students ? 
        students.map(student => {
            return(
                <h1>{student.name}</h1> 
            )
        })
    : "Carregando..."
  )
}