"use client";

import { Container, Typography, Button, Box, Paper } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg" className="my-8">
      <Box className="flex flex-col justify-center items-center min-h-[80vh]">
        <Paper elevation={3} className="p-8 flex flex-col items-center gap-6">
          <Typography variant="h3" component="h1" className="mb-4">
            Welcome to Next.js with MUI & Tailwind CSS v4
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className="text-center"
          >
            Your Next.js application is now configured with Material-UI and
            Tailwind CSS v4. You can use Tailwind classes to override MUI
            styles. Start building your app by editing{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">
              src/app/page.tsx
            </code>
          </Typography>
          <Box className="flex gap-4 mt-4">
            <Button
              variant="contained"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2"
            >
              Next.js Docs
            </Button>
            <Button
              variant="outlined"
              href="https://mui.com/material-ui/getting-started/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2"
            >
              MUI Docs
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
