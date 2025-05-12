import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
  Tab,
  Tabs,
} from "@mui/material";
import {
  Add as AddIcon,
  ArrowBack as BackIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  Refresh as RefreshIcon,
  PersonAdd as PersonAddIcon,
  FileUpload as ImportIcon,
  FileDownload as ExportIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserManagement() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [userRole, setUserRole] = useState("all");
  const [userStatus, setUserStatus] = useState("all");
  const [addUserDialogOpen, setAddUserDialogOpen] = useState(false);
  const [editUserDialogOpen, setEditUserDialogOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  // Sample user data
  const users = [
    {
      id: 1,
      name: "Dr. John Smith",
      email: "john.smith@university.edu",
      role: "Lecturer",
      department: "Computer Science",
      status: "Active",
      lastLogin: "2025-05-11 14:32",
    },
    {
      id: 2,
      name: "Prof. Emily Johnson",
      email: "emily.johnson@university.edu",
      role: "Admin",
      department: "Administration",
      status: "Active",
      lastLogin: "2025-05-12 09:15",
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      email: "alex.rodriguez@university.edu",
      role: "Student",
      department: "Computer Science",
      status: "Active",
      lastLogin: "2025-05-10 18:45",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah.williams@university.edu",
      role: "Student",
      department: "Mathematics",
      status: "Inactive",
      lastLogin: "2025-04-25 11:30",
    },
    {
      id: 5,
      name: "Dr. Michael Chen",
      email: "michael.chen@university.edu",
      role: "Lecturer",
      department: "Physics",
      status: "Active",
      lastLogin: "2025-05-11 16:20",
    },
    {
      id: 6,
      name: "Jessica Taylor",
      email: "jessica.taylor@university.edu",
      role: "Student",
      department: "Biology",
      status: "Active",
      lastLogin: "2025-05-12 08:05",
    },
    {
      id: 7,
      name: "Prof. Robert Brown",
      email: "robert.brown@university.edu",
      role: "Admin",
      department: "Administration",
      status: "Inactive",
      lastLogin: "2025-05-02 13:45",
    },
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenAddDialog = () => {
    setAddUserDialogOpen(true);
  };

  const handleCloseAddDialog = () => {
    setAddUserDialogOpen(false);
  };

  const handleOpenEditDialog = (user) => {
    setSelectedUser(user);
    setEditUserDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditUserDialogOpen(false);
    setSelectedUser(null);
  };

  const handleOpenDeleteDialog = (user) => {
    setSelectedUser(user);
    setDeleteConfirmOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteConfirmOpen(false);
    setSelectedUser(null);
  };

  // Filter users based on search term, role, and status
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      searchTerm === "" ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = userRole === "all" || user.role === userRole;
    const matchesStatus = userStatus === "all" || user.status === userStatus;

    return matchesSearch && matchesRole && matchesStatus;
  });

  // Get students only
  const studentUsers = filteredUsers.filter((user) => user.role === "Student");
  
  // Get staff (lecturers and admins)
  const staffUsers = filteredUsers.filter((user) => user.role !== "Student");

  // Determine which users to display based on active tab
  const displayUsers = () => {
    switch (tabValue) {
      case 0:
        return filteredUsers;
      case 1:
        return studentUsers;
      case 2:
        return staffUsers;
      default:
        return filteredUsers;
    }
  };

  const getRoleChipColor = (role) => {
    switch (role) {
      case "Admin":
        return { bg: "#d32f2f", color: "white" };
      case "Lecturer":
        return { bg: "#1976d2", color: "white" };
      case "Student":
        return { bg: "#388e3c", color: "white" };
      default:
        return { bg: "#757575", color: "white" };
    }
  };

  const getStatusChipColor = (status) => {
    switch (status) {
      case "Active":
        return { bg: "#4caf50", color: "white" };
      case "Inactive":
        return { bg: "#9e9e9e", color: "white" };
      default:
        return { bg: "#ff9800", color: "white" };
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        background: "#ffffff",
        color: "#333333",
      }}
    >
      {/* Header with Back Button */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton 
          onClick={() => navigate(-1)} 
          sx={{ mr: 2, color: "#1976d2" }}
        >
          <BackIcon />
        </IconButton>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#1976d2",
            }}
          >
            User Management
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#555555",
            }}
          >
            Create, edit, and manage user accounts and permissions
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Action Buttons & Search */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              startIcon={<PersonAddIcon />}
              onClick={handleOpenAddDialog}
              sx={{
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Add User
            </Button>
            <Button
              variant="outlined"
              startIcon={<ImportIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
              }}
            >
              Import
            </Button>
            <Button
              variant="outlined"
              startIcon={<ExportIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
              }}
            >
              Export
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
            <TextField
              placeholder="Search users..."
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ minWidth: 200 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#757575" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="outlined"
              startIcon={<FilterIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
              }}
            >
              Filters
            </Button>
            <IconButton
              color="primary"
              sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}
            >
              <RefreshIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* User Type Filter Tabs */}
      <Tabs 
        value={tabValue} 
        onChange={handleTabChange}
        sx={{ 
          mb: 3,
          '& .MuiTabs-indicator': {
            backgroundColor: '#1976d2',
          },
          '& .Mui-selected': {
            color: '#1976d2 !important',
          }
        }}
      >
        <Tab label="All Users" />
        <Tab label="Students" />
        <Tab label="Staff" />
      </Tabs>

      {/* User List Table */}
      <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell><Typography fontWeight="bold">Name</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Email</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Role</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Department</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Status</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Last Login</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Actions</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayUsers().map((user) => (
              <TableRow 
                key={user.id}
                sx={{ 
                  '&:hover': { backgroundColor: '#f5f5f5' },
                  backgroundColor: user.status === 'Inactive' ? '#fafafa' : 'inherit',
                }}
              >
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Chip 
                    label={user.role} 
                    size="small"
                    sx={{ 
                      backgroundColor: getRoleChipColor(user.role).bg,
                      color: getRoleChipColor(user.role).color,
                    }} 
                  />
                </TableCell>
                <TableCell>{user.department}</TableCell>
                <TableCell>
                  <Chip 
                    label={user.status} 
                    size="small"
                    sx={{ 
                      backgroundColor: getStatusChipColor(user.status).bg,
                      color: getStatusChipColor(user.status).color,
                    }} 
                  />
                </TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>
                  <IconButton 
                    size="small" 
                    onClick={() => handleOpenEditDialog(user)}
                    sx={{ color: "#ff9800" }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    size="small"
                    onClick={() => handleOpenDeleteDialog(user)}
                    sx={{ color: "#f44336" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add User Dialog */}
      <Dialog open={addUserDialogOpen} onClose={handleCloseAddDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Typography variant="h6" fontWeight="bold">Add New User</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                size="small"
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                type="email"
                size="small"
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth size="small" margin="dense">
                <InputLabel>Role</InputLabel>
                <Select label="Role">
                  <MenuItem value="Student">Student</MenuItem>
                  <MenuItem value="Lecturer">Lecturer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth size="small" margin="dense">
                <InputLabel>Department</InputLabel>
                <Select label="Department">
                  <MenuItem value="Computer Science">Computer Science</MenuItem>
                  <MenuItem value="Mathematics">Mathematics</MenuItem>
                  <MenuItem value="Physics">Physics</MenuItem>
                  <MenuItem value="Biology">Biology</MenuItem>
                  <MenuItem value="Administration">Administration</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                Initial Credentials
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Temporary Password"
                type="password"
                variant="outlined"
                size="small"
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={<Switch color="primary" defaultChecked />}
                label="Force password change on first login"
                sx={{ mt: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                Account Settings
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth size="small" margin="dense">
                <InputLabel>Status</InputLabel>
                <Select label="Status" defaultValue="Active">
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={<Switch color="primary" defaultChecked />}
                label="Send welcome email with login details"
                sx={{ mt: 1 }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={handleCloseAddDialog}
            sx={{ color: "#9e9e9e" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleCloseAddDialog}
            sx={{
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Create User
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={editUserDialogOpen} onClose={handleCloseEditDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Typography variant="h6" fontWeight="bold">Edit User</Typography>
        </DialogTitle>
        <DialogContent dividers>
          {selectedUser && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  size="small"
                  margin="dense"
                  defaultValue={selectedUser.name}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  type="email"
                  size="small"
                  margin="dense"
                  defaultValue={selectedUser.email}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth size="small" margin="dense">
                  <InputLabel>Role</InputLabel>
                  <Select label="Role" defaultValue={selectedUser.role}>
                    <MenuItem value="Student">Student</MenuItem>
                    <MenuItem value="Lecturer">Lecturer</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth size="small" margin="dense">
                  <InputLabel>Department</InputLabel>
                  <Select label="Department" defaultValue={selectedUser.department}>
                    <MenuItem value="Computer Science">Computer Science</MenuItem>
                    <MenuItem value="Mathematics">Mathematics</MenuItem>
                    <MenuItem value="Physics">Physics</MenuItem>
                    <MenuItem value="Biology">Biology</MenuItem>
                    <MenuItem value="Administration">Administration</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 1 }} />
                <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                  Account Settings
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth size="small" margin="dense">
                  <InputLabel>Status</InputLabel>
                  <Select label="Status" defaultValue={selectedUser.status}>
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ 
                    mt: 2,
                    borderColor: "#ff9800",
                    color: "#ff9800",
                    "&:hover": {
                      backgroundColor: "#fff3e0",
                    },
                  }}
                >
                  Reset Password
                </Button>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={handleCloseEditDialog}
            sx={{ color: "#9e9e9e" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleCloseEditDialog}
            sx={{
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirmOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle>
          <Typography variant="h6" fontWeight="bold">Confirm Deletion</Typography>
        </DialogTitle>
        <DialogContent>
          {selectedUser && (
            <Typography variant="body1">
              Are you sure you want to delete the user account for <strong>{selectedUser.name}</strong>? This action cannot be undone.
            </Typography>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={handleCloseDeleteDialog}
            sx={{ color: "#9e9e9e" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleCloseDeleteDialog}
            sx={{
              backgroundColor: "#f44336",
              "&:hover": {
                backgroundColor: "#d32f2f",
              },
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default UserManagement;