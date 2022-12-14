import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';

// custom theme created here
const theme = createTheme({
  // #483d8b is mui 'DarkSlateBlue' color code (for radio icons)
  palette: {
    primary: {
      main: '#483d8b'
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightLight: 700
  },
  div: {
    // padding: '5px',
    // margin: '5px'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider >
  );
}

export default App;
