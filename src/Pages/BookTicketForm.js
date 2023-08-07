import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function BookTicketForm({ movie }) {
  const [open, setOpen] = React.useState(false);

  //   Form data iniitialized
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    setOpen(false);

    // storing the information in the localStorage
    localStorage.setItem("userDetails", JSON.stringify(FormData));

    // Resetting the form once submitted
    setFormData({
      name: "",
      email: "",
      contact: "",
    });
  };

  //   handleChange function
  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <Button
        variant="contained"
        color={"primary"}
        size={"large"}
        onClick={handleClickOpen}
      >
        Book Ticket
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={"title"}>
          Submit the following details
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Movie name: {movie.show.name}</DialogContentText>
          <DialogContentText>
            Ratings: {movie.show.rating.average}
          </DialogContentText>
          <DialogContentText>
            Average runtime: {movie.show.averageRuntime} mins
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            name={"name"}
            value={FormData.name}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            name={"email"}
            value={FormData.email}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="contact"
            label="Phone No."
            type="number"
            fullWidth
            variant="standard"
            name={"contact"}
            value={FormData.contact}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={"contained"} color={"warning"}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant={"contained"}
            color={"success"}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
