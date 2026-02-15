"use client";

import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg" className="my-8">
      <Typography variant="h1" component="h1" className="text-center">
        Fast, Secure
      </Typography>
      <Box className="flex flex-col justify-center items-center min-h-[80vh] gap-4">
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
          <div className="flex flex-col gap-2">
            <Button variant="contained">Hello MUI</Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="info">
              Info
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button className="bg-linear-to-r from-primary-300 via-info-200 to-secondary-300 text-white rounded-xl">
              Linear Gradient
            </Button>
          </div>
        </Paper>
        <Card>
          <CardHeader title="Hello MUI" />
          <CardContent>
            <Typography variant="subtitle1">This is a subtitle</Typography>
            <Typography variant="body1" color="text.secondary">
              This is a body text
            </Typography>
            <TextField label="Enter your name" variant="outlined" />
          </CardContent>
        </Card>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            label="Age"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"10"}
            className="w-30"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <div className="min-h-50 flex flex-col gap-2">
          <Chip label="记录中" color="warning" />
          <Typography variant="h1">Hello MUI</Typography>
          <Typography variant="h2">Hello MUI</Typography>
          <Typography variant="h3">Hello MUI</Typography>
          <Typography variant="h4">Hello MUI</Typography>
          <Typography variant="h5">Hello MUI</Typography>
          <Typography variant="h6">Hello MUI</Typography>
          <Typography variant="subtitle1">Hello MUI</Typography>
          <Typography variant="subtitle2">Hello MUI</Typography>
          <Typography variant="body1">Hello MUI</Typography>
          <Typography variant="body2">Hello MUI</Typography>
          <Typography variant="caption">Hello MUI</Typography>
          <Typography variant="overline">Hello MUI</Typography>
          <span className="text-xs">xs: Hello MUI</span>
          <span className="text-sm">sm: Hello MUI</span>
          <span className="text-base">base: Hello MUI</span>
          <span className="text-lg">lg: Hello MUI</span>
          <span className="text-xl">xl: Hello MUI</span>
          <span className="text-2xl">2xl: Hello MUI</span>
          <span className="text-3xl">3xl: Hello MUI</span>
          <span className="text-4xl">4xl: Hello MUI</span>
          <span className="text-5xl">5xl: Hello MUI</span>
          <span className="text-6xl">6xl: Hello MUI</span>
          <span className="text-7xl">7xl: Hello MUI</span>
        </div>
      </Box>
    </Container>
  );
}
