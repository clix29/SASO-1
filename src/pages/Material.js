import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Tab,
  CircularProgress,
  Divider,
  Tooltip,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  CloudUpload as UploadIcon,
  Download as DownloadIcon,
  Visibility as ViewIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
} from "@mui/icons-material";

// Tab Panel Component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const Materials = () => {
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);
  const [materials, setMaterials] = useState([]);
  const [modules, setModules] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedModule, setSelectedModule] = useState("all");
  const [openUploadDialog, setOpenUploadDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [newMaterial, setNewMaterial] = useState({
    title: "",
    description: "",
    type: "lecture",
    moduleId: "",
    file: null,
    fileName: "",
  });

  // Material types for filtering
  const materialTypes = ["lecture", "tutorial", "assignment", "reading", "exam"];
  
  // Simulated data - would be fetched from API in a real application
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockModules = [
        { id: "CS101", name: "Introduction to Computer Science" },
        { id: "CS201", name: "Data Structures and Algorithms" },
        { id: "CS301", name: "Database Systems" },
        { id: "CS401", name: "Software Engineering" },
      ];

      const mockMaterials = [
        {
          id: 1,
          title: "Introduction to Programming Concepts",
          description: "Fundamentals of programming and algorithms",
          type: "lecture",
          moduleId: "CS101",
          moduleName: "Introduction to Computer Science",
          dateUploaded: "2025-05-01",
          fileSize: "2.4 MB",
          downloadCount: 45,
          fileName: "intro_programming.pdf",
        },
        {
          id: 2,
          title: "Variables and Data Types",
          description: "Understanding different data types in programming",
          type: "lecture",
          moduleId: "CS101",
          moduleName: "Introduction to Computer Science",
          dateUploaded: "2025-05-03",
          fileSize: "1.8 MB",
          downloadCount: 42,
          fileName: "variables_data_types.pdf",
        },
        {
          id: 3,
          title: "Programming Exercise 1",
          description: "Practice exercises for basic programming concepts",
          type: "assignment",
          moduleId: "CS101",
          moduleName: "Introduction to Computer Science",
          dateUploaded: "2025-05-05",
          fileSize: "568 KB",
          downloadCount: 40,
          fileName: "programming_exercise1.zip",
        },
        {
          id: 4,
          title: "Arrays and Linked Lists",
          description: "Implementation and comparison of arrays and linked lists",
          type: "lecture",
          moduleId: "CS201",
          moduleName: "Data Structures and Algorithms",
          dateUploaded: "2025-05-02",
          fileSize: "3.1 MB",
          downloadCount: 38,
          fileName: "arrays_linked_lists.pdf",
        },
        {
          id: 5,
          title: "Sorting Algorithms",
          description: "Analysis of different sorting algorithms",
          type: "lecture",
          moduleId: "CS201",
          moduleName: "Data Structures and Algorithms",
          dateUploaded: "2025-05-07",
          fileSize: "2.9 MB",
          downloadCount: 35,
          fileName: "sorting_algorithms.pdf",
        },
        {
          id: 6,
          title: "Data Structures Tutorial",
          description: "Guided tutorial on implementing common data structures",
          type: "tutorial",
          moduleId: "CS201",
          moduleName: "Data Structures and Algorithms",
          dateUploaded: "2025-05-08",
          fileSize: "1.2 MB",
          downloadCount: 30,
          fileName: "ds_tutorial.pdf",
        },
        {
          id: 7,
          title: "SQL Basics",
          description: "Introduction to SQL queries and database operations",
          type: "lecture",
          moduleId: "CS301",
          moduleName: "Database Systems",
          dateUploaded: "2025-05-04",
          fileSize: "2.2 MB",
          downloadCount: 32,
          fileName: "sql_basics.pdf",
        },
        {
          id: 8,
          title: "Mid-term Exam Preparation",
          description: "Review materials and practice questions for mid-term exam",
          type: "exam",
          moduleId: "CS301",
          moduleName: "Database Systems",
          dateUploaded: "2025-05-10",
          fileSize: "1.5 MB",
          downloadCount: 28,
          fileName: "midterm_prep.pdf",
        },
      ];

      setModules(mockModules);
      setMaterials(mockMaterials);
      setLoading(false);
    }, 1000);
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleModuleChange = (event) => {
    setSelectedModule(event.target.value);
  };

  const handleOpenUploadDialog = () => {
    setOpenUploadDialog(true);
  };

  const handleCloseUploadDialog = () => {
    setOpenUploadDialog(false);
    setNewMaterial({
      title: "",
      description: "",
      type: "lecture",
      moduleId: "",
      file: null,
      fileName: "",
    });
  };

  const handleOpenDeleteDialog = (material) => {
    setSelectedMaterial(material);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setSelectedMaterial(null);
  };

  const handleNewMaterialChange = (event) => {
    const { name, value } = event.target;
    setNewMaterial({
      ...newMaterial,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewMaterial({
        ...newMaterial,
        file: file,
        fileName: file.name,
      });
    }
  };

  const handleUploadMaterial = () => {
    // Simulate API call to upload material
    // In a real application, you would send the file to your backend
    
    const newId = materials.length > 0 ? Math.max(...materials.map(m => m.id)) + 1 : 1;
    const selectedModuleObj = modules.find(m => m.id === newMaterial.moduleId);
    
    const materialToAdd = {
      id: newId,
      title: newMaterial.title,
      description: newMaterial.description,
      type: newMaterial.type,
      moduleId: newMaterial.moduleId,
      moduleName: selectedModuleObj ? selectedModuleObj.name : "",
      dateUploaded: new Date().toISOString().split("T")[0],
      fileSize: "1.0 MB", // This would be determined by the actual file in a real app
      downloadCount: 0,
      fileName: newMaterial.fileName,
    };
    
    setMaterials([...materials, materialToAdd]);
    handleCloseUploadDialog();
  };

  const handleDeleteMaterial = () => {
    // Simulate API call to delete material
    if (selectedMaterial) {
      const updatedMaterials = materials.filter(m => m.id !== selectedMaterial.id);
      setMaterials(updatedMaterials);
      handleCloseDeleteDialog();
    }
  };

  // Filter materials based on search term, selected module, and tab (material type)
  const filteredMaterials = materials.filter(material => {
    const matchesSearch = 
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.fileName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesModule = selectedModule === "all" || material.moduleId === selectedModule;
    
    const matchesType = 
      (tabValue === 0) || // All tab
      (tabValue === 1 && material.type === "lecture") ||
      (tabValue === 2 && material.type === "tutorial") ||
      (tabValue === 3 && material.type === "assignment") ||
      (tabValue === 4 && material.type === "reading") ||
      (tabValue === 5 && material.type === "exam");
    
    return matchesSearch && matchesModule && matchesType;
  });

  const getColorByType = (type) => {
    const typeColors = {
      lecture: "primary",
      tutorial: "secondary",
      assignment: "warning",
      reading: "info",
      exam: "error",
    };
    return typeColors[type] || "default";
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom component="h1" sx={{ fontWeight: "bold", mb: 1 }}>
        Class & Course Materials
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        Upload and manage materials for your modules and courses
      </Typography>

      {/* Search and Filter Bar */}
      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Search Materials"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="module-select-label">Filter by Module</InputLabel>
              <Select
                labelId="module-select-label"
                id="module-select"
                value={selectedModule}
                label="Filter by Module"
                onChange={handleModuleChange}
                startAdornment={<FilterIcon color="action" sx={{ mr: 1 }} />}
              >
                <MenuItem value="all">All Modules</MenuItem>
                {modules.map((module) => (
                  <MenuItem key={module.id} value={module.id}>
                    {module.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleOpenUploadDialog}
            >
              Upload Material
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Material Tabs */}
      <Paper elevation={3} sx={{ mb: 4 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          indicatorColor="primary" 
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All Materials" />
          <Tab label="Lectures" />
          <Tab label="Tutorials" />
          <Tab label="Assignments" />
          <Tab label="Readings" />
          <Tab label="Exams" />
        </Tabs>
        <Divider />

        {/* Material Lists */}
        {[0, 1, 2, 3, 4, 5].map((tabIndex) => (
          <TabPanel key={tabIndex} value={tabValue} index={tabIndex}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Module</TableCell>
                    <TableCell align="center">Type</TableCell>
                    <TableCell align="center">Uploaded</TableCell>
                    <TableCell align="center">Downloads</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredMaterials.length > 0 ? (
                    filteredMaterials.map((material) => (
                      <TableRow key={material.id}>
                        <TableCell>
                          <Box>
                            <Typography variant="body1" fontWeight="medium">
                              {material.title}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                              {material.fileName} ({material.fileSize})
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {material.moduleId}: {material.moduleName}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Chip
                            label={material.type.charAt(0).toUpperCase() + material.type.slice(1)}
                            color={getColorByType(material.type)}
                            size="small"
                          />
                        </TableCell>
                        <TableCell align="center">
                          {material.dateUploaded}
                        </TableCell>
                        <TableCell align="center">
                          {material.downloadCount}
                        </TableCell>
                        <TableCell align="center">
                          <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Tooltip title="View">
                              <IconButton size="small" color="primary">
                                <ViewIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Download">
                              <IconButton size="small" color="primary">
                                <DownloadIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Edit">
                              <IconButton size="small" color="secondary">
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton 
                                size="small" 
                                color="error"
                                onClick={() => handleOpenDeleteDialog(material)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} align="center">
                        <Typography variant="body1" sx={{ py: 2 }}>
                          No materials found
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        ))}
      </Paper>

      {/* Upload Dialog */}
      <Dialog open={openUploadDialog} onClose={handleCloseUploadDialog} maxWidth="md" fullWidth>
        <DialogTitle>Upload New Material</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            Fill in the details below to upload a new material for your students.
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="title"
                label="Title"
                fullWidth
                value={newMaterial.title}
                onChange={handleNewMaterialChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Description"
                fullWidth
                multiline
                rows={3}
                value={newMaterial.description}
                onChange={handleNewMaterialChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel id="material-type-label">Material Type</InputLabel>
                <Select
                  labelId="material-type-label"
                  name="type"
                  value={newMaterial.type}
                  label="Material Type"
                  onChange={handleNewMaterialChange}
                >
                  {materialTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel id="module-id-label">Module</InputLabel>
                <Select
                  labelId="module-id-label"
                  name="moduleId"
                  value={newMaterial.moduleId}
                  label="Module"
                  onChange={handleNewMaterialChange}
                >
                  {modules.map((module) => (
                    <MenuItem key={module.id} value={module.id}>
                      {module.id}: {module.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                component="label"
                startIcon={<UploadIcon />}
                sx={{ mb: 1 }}
              >
                Select File
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
              {newMaterial.fileName && (
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Selected: {newMaterial.fileName}
                </Typography>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUploadDialog}>Cancel</Button>
          <Button 
            onClick={handleUploadMaterial} 
            variant="contained" 
            color="primary"
            disabled={!newMaterial.title || !newMaterial.moduleId || !newMaterial.fileName}
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete "{selectedMaterial?.title}"? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={handleDeleteMaterial} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Materials;