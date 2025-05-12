import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";

const ManageFAQs = () => {
  const [faqs, setFaqs] = useState([
    { id: 1, question: "What is SASO?", answer: "SASO stands for Student Academic Support Organization." },
    { id: 2, question: "How do I join?", answer: "You can register on our platform or visit our campus office." },
  ]);

  const [form, setForm] = useState({ question: "", answer: "" });
  const [editId, setEditId] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = (faq = null) => {
    if (faq) {
      setForm({ question: faq.question, answer: faq.answer });
      setEditId(faq.id);
    } else {
      setForm({ question: "", answer: "" });
      setEditId(null);
    }
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setForm({ question: "", answer: "" });
    setEditId(null);
  };

  const handleSave = () => {
    if (editId) {
      setFaqs(faqs.map(f => f.id === editId ? { ...f, ...form } : f));
    } else {
      const newFaq = { ...form, id: Date.now() };
      setFaqs([...faqs, newFaq]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setFaqs(faqs.filter(f => f.id !== id));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Manage FAQs</Typography>

      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={() => handleOpen()}
        sx={{ mb: 2 }}
      >
        Add FAQ
      </Button>

      <List>
        {faqs.map((faq) => (
          <ListItem
            key={faq.id}
            sx={{
              backgroundColor: "#f9f9f9",
              borderRadius: 2,
              mb: 1,
              boxShadow: 1,
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <ListItemText
              primary={faq.question}
              secondary={faq.answer}
            />
            <Box>
              <IconButton onClick={() => handleOpen(faq)}><Edit /></IconButton>
              <IconButton color="error" onClick={() => handleDelete(faq.id)}><Delete /></IconButton>
            </Box>
          </ListItem>
        ))}
      </List>

      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>{editId ? "Edit FAQ" : "Add FAQ"}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Question"
            value={form.question}
            onChange={(e) => setForm({ ...form, question: e.target.value })}
            sx={{ my: 1 }}
          />
          <TextField
            fullWidth
            label="Answer"
            multiline
            rows={3}
            value={form.answer}
            onChange={(e) => setForm({ ...form, answer: e.target.value })}
            sx={{ my: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            {editId ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ManageFAQs;
