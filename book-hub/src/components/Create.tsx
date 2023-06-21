import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import WavyLine from "./WavyLine";

const defaultTheme = createTheme();

export default function Create() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get("title"),
      subject: data.get("subject"),
      grades: data.get("grades"),
      price: data.get("price"),
      quantity: data.get("quantity"),
      description: data.get("description"),
    });
  };

  return (
    <>
      <WavyLine />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Create!
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="subject"
                label="Subject"
                name="subject"
                autoComplete="subject"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="grades"
                label="Grade(s)"
                name="grades"
                autoComplete="grades"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="price"
                label="Price"
                name="price"
                autoComplete="price"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="quantity"
                label="Quantity"
                name="quantity"
                autoComplete="quantity"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="Short Description"
                name="description"
                autoComplete="description"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: defaultTheme.palette.warning.main,
                  "&:hover": {
                    backgroundColor: "#ffb74d",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
