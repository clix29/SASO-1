import { Box, Typography, Container, Divider } from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" gutterBottom>
        About SASO
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Typography variant="body1" paragraph>
        SASO (Student Academic Support & Organization) is an innovative academic
        and administrative platform developed to enhance student engagement,
        streamline tutor-student communication, and improve educational support
        at Tshwane University of Technology.
      </Typography>

      <Typography variant="h5" mt={4} gutterBottom>
        🌟 Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        To provide a centralized, accessible, and user-friendly digital
        environment where students, tutors, lecturers, and administrators can
        collaborate efficiently and support academic success.
      </Typography>

      <Typography variant="h5" mt={4} gutterBottom>
        🚀 Features
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Personalized student dashboard
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Real-time messaging with tutors and lecturers
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Attendance tracking and class scheduling
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            FAQ section and academic support
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Admin tools for managing academic workflows
          </Typography>
        </li>
      </ul>

      <Typography variant="h5" mt={4} gutterBottom>
        💡 Why SASO?
      </Typography>
      <Typography variant="body1" paragraph>
        Traditional communication and academic tracking methods often lead to
        inefficiencies. SASO bridges that gap by providing a smart,
        mobile-friendly, and scalable solution for all stakeholders within the
        university ecosystem.
      </Typography>

      <Typography variant="h5" mt={4} gutterBottom>
        📞 Contact Us
      </Typography>
      <Typography variant="body1">
        Have questions or suggestions? Email us at{" "}
        <strong>support@saso-platform.ac.za</strong>
      </Typography>
    </Container>
  );
}
