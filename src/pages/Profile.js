import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Grid,
  Avatar,
  Divider,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  Save as SaveIcon,
  Edit as EditIcon,
  ArrowBack as BackIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Profile data state
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subjects: "",
    bio: "",
    yearsExperience: "",
    education: "",
    certifications: "",
    profilePicture: "https://via.placeholder.com/150",
  });

  // Simulated data fetch
  useEffect(() => {
    setTimeout(() => {
      setProfile({
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phone: "(555) 123-4567",
        subjects: "Mathematics, Physics",
        bio: "Experienced tutor with a passion for making complex subjects easy to understand.",
        yearsExperience: "7",
        education: "M.S. in Applied Mathematics, State University",
        certifications: "Certified Math Tutor, Advanced Physics Teaching Certificate",
        profilePicture: "https://via.placeholder.com/150",
      });
      setLoading(false);
    }, 1000);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSaveProfile = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsEditing(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1000);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: 1000, mx: "auto" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 4,
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          startIcon={<BackIcon />}
          onClick={() => navigate(-1)}
          sx={{ mr: 2 }}
        >
          Back to Dashboard
        </Button>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          My Profile
        </Typography>
      </Box>

      {/* Success Alert */}
      {saveSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Profile saved successfully!
        </Alert>
      )}

      {/* Profile Card */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Grid container spacing={4}>
          {/* Profile Picture and Basic Info */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Avatar
              src={profile.profilePicture}
              alt={`${profile.firstName} ${profile.lastName}`}
              sx={{ width: 150, height: 150, mb: 2 }}
            />
            {isEditing && (
              <Button variant="outlined" size="small" sx={{ mb: 2 }}>
                Change Picture
              </Button>
            )}
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              {profile.firstName} {profile.lastName}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
              Subjects: {profile.subjects}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profile.yearsExperience} years of experience
            </Typography>
          </Grid>

          {/* Profile Details */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h6"
              sx={{ mb: 2, color: "#1976d2", fontWeight: "bold" }}
            >
              Personal Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  margin="normal"
                  variant={isEditing ? "outlined" : "filled"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  margin="normal"
                  variant={isEditing ? "outlined" : "filled"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  margin="normal"
                  variant={isEditing ? "outlined" : "filled"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  margin="normal"
                  variant={isEditing ? "outlined" : "filled"}
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography
              variant="h6"
              sx={{ mb: 2, color: "#1976d2", fontWeight: "bold" }}
            >
              Professional Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subjects"
                  name="subjects"
                  value={profile.subjects}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  margin="normal"
                  variant={isEditing ? "outlined" : "filled"}
                  helperText="Separate multiple subjects with commas"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Bio"
                  name="bio"
                  value={profile.bio}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  margin="normal"
                  variant={isEditing ? "outlined" : "filled"}
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Years of Experience"
                  name="yearsExperience"
                  value={profile.yearsExperience}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  margin="normal"
                  variant={isEditing ? "outlined" : "filled"}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  label="Education"
                  name="education"
                  value={profile.education}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  margin="normal"
                  variant={isEditing ? "outlined" : "filled"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Certifications"
                  name="certifications"
                  value={profile.certifications}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  margin="normal"
                  variant={isEditing ? "outlined" : "filled"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          {isEditing ? (
            <>
              <Button
                variant="outlined"
                onClick={() => setIsEditing(false)}
                sx={{ mr: 2 }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSaveProfile}
              >
                Save Changes
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;