import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CallCenter from './Pages/CallCenter';
import BookAppointment from './Pages/BookAppointment';
import ExpertConsultation from './Pages/ExpertConsultation';
import CheckResults from './Pages/CheckResults';
import Organization from './Sections/Organization/Organization';
import NewsEventsPage from './Tintuc/NewsEventsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/news-events" element={<NewsEventsPage />} />
        <Route path="/call-center" element={<CallCenter />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/expert-consultation" element={<ExpertConsultation />} />
        <Route path="/check-results" element={<CheckResults />} />
      </Routes>
    </Router>
  );
}

export default App;
