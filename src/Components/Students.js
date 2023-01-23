import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { data } from "../Data/data";

export function StudentDetails() {
  /// seeting the states
  const [studentsData, setStudents] = useState(data);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");

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
  };

  return (
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

        <Button
          className="add-btn"
          color="success"
          variant="contained"
          onClick={addNewStudent}
        >
          Add Data
        </Button>
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
              <Button color="secondary">Edit</Button>
              <Button color="error">Delete</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

// readings
