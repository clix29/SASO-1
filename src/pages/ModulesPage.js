import { Box, Typography, Container, Grid, Paper, Button } from "@mui/material";

const mockModules = [
  {
    code: "INT316D",
    title: "Internet Programming",
    lecturer: "Vuyisile Memani",
    schedule: "Mon & Wed, 10:00 - 11:30",
  },
  {
    code: "SWP316D",
    title: "Software Project",
    lecturer: "Dr. T. Nkosi",
    schedule: "Tue & Thu, 12:00 - 13:30",
  },
  {
    code: "MOB316D",
    title: "Mobile Computing",
    lecturer: "Ms. K. Mokoena",
    schedule: "Friday, 09:00 - 11:00",
  },
];

export default function ModulesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" gutterBottom>
        My Modules
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        View and manage the academic modules you're currently registered for.
      </Typography>

      <Grid container spacing={3} mt={2}>
        {mockModules.map((module) => (
          <Grid item xs={12} md={6} lg={4} key={module.code}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6">{module.title}</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {module.code}
              </Typography>
              <Typography sx={{ mt: 1 }}>
                <strong>Lecturer:</strong> {module.lecturer}
              </Typography>
              <Typography>
                <strong>Schedule:</strong> {module.schedule}
              </Typography>
              <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => alert(`View content for ${module.code}`)}
              >
                View Module
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
