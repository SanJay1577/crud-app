import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";
import { data } from "../Data/data";

export function StudentDetails({studentsData, setStudents}) {
  /// seeting the states
  const [editId, setEditId] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [showUpdate, setShowUpdate] = useState(false); 
  const [showAdd, setShowAdd] = useState(true)
  const history = useHistory();

// createa  a new data
  const addNewStudent = () => {
    const newStudent = {
        id,
        name,
        batch,
        gender,
        yearsOfExperience : experience
    }
   setStudents([...studentsData, newStudent])
   setId("")
   setName("")
   setBatch("")
   setGender("")
   setExperience("")
  };

  //delete a new data
  const deleteStudentData = (studID) =>{
   const selectedStudents = studentsData.filter((stud)=> stud.id !== studID);
   setStudents(selectedStudents); 
  }

  // update functionality 

   // update the form 

   const editandSelectStudent = (idx) => {  
       setShowAdd(false);
       setShowUpdate(true);
       setEditId(idx);
       const selectedData = studentsData.find(stud => stud.id === idx); 
       setId(selectedData.id);
       setName(selectedData.name); 
       setBatch(selectedData.batch);
       setGender(selectedData.gender);
       setExperience(selectedData.yearsOfExperience);
   }


  const updateStudentData = () => {
    // select and find our student 
    const editStudentIndex = studentsData.findIndex((stud) => stud.id === editId);

    // we need the updated object
     const updatedObj = {
       id,
       name,
       batch,
       gender,
       yearsOfExperience : experience
     }

    // change the updated object in the specific array of data
      studentsData[editStudentIndex] = updatedObj;
    //set the students data, 
     setStudents([...studentsData])
     setId("")
     setName("")
     setBatch("")
     setGender("")
     setExperience("")
     setShowAdd(!showAdd);
     setShowUpdate(!showUpdate);
  }

  return (
    <Base
    title = "Batch Details"
    description= "All students details"
    >
    <div className="containers">
      

      <div className="input-section">
     
        
        <TextField 
        fullWidth label="Enter the id" 
        onChange={(event)=>setId(event.target.value)}
        value = {id}
        id="fullWidth" />

        <TextField 
        fullWidth 
        label="Enter the Name"
        onChange={(event)=>setName(event.target.value)}
        value= {name}
         id="fullWidth" />

        <TextField 
        fullWidth 
        label="Enter the Batch"
        onChange={(event)=>setBatch(event.target.value)}
        value = {batch}
         id="fullWidth" />

        <TextField 
        fullWidth 
        label="Enter the Gender"
        onChange={(event)=>setGender(event.target.value)}
        value = {gender}
         id="fullWidth" />

        <TextField 
        fullWidth 
        label="Enter the Experience"
        onChange={(event)=>setExperience(event.target.value)}
        value = {experience}
         id="fullWidth" />
      {showAdd ?
        <Button
          className="add-btn"
          color="success"
          variant="contained"
          onClick={addNewStudent}
        >
          Add Data
        </Button>
        : ""}

        {showUpdate ? 
        <Button
          className="add-btn"
          color="secondary"
          variant="contained"
          onClick={updateStudentData}
        >
          Update Data
        </Button>
        :""}

      </div>
      <div className="card-containers">
        {studentsData.map((stud, id) => (
          <Card sx={{ maxWidth: 345 }} key={stud.id} className="card">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name : {stud.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Batch : {stud.batch}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gender : {stud.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Experience : {stud.yearsOfExperience} years
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
              onClick={() => editandSelectStudent(stud.id)}
               color="secondary">Edit</Button>
              <Button onClick={()=>deleteStudentData(stud.id)} color="error">Delete</Button>
              <Button onClick={()=>history.push(`/student/${id}`)}>View Student</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
    </Base>
  );
}

// readings
