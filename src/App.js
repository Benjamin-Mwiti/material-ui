import './App.css';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A0DAD'
    },
    secondary: green
  }
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Notes />} />
      <Route path='create' element={<Create />} />
    </Route>
  )
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
