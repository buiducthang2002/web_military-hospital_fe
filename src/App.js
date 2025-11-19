import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CallCenter from './Pages/CallCenter';
import BookAppointment from './Pages/BookAppointment';
import ExpertConsultation from './Pages/ExpertConsultation';
import CheckResults from './Pages/CheckResults';
import Organization from './Sections/Organization/Organization';
import NewsEventsPage from './modules/tintuc/pages/NewsEventsPage';
import ArticleDetailPage from './modules/tintuc/pages/ArticleDetailPage';
import PartyPoliticsPage from './Pages/PartyPoliticsPage';
import PartyArticleDetailPage from './modules/partypolitics/pages/ArticleDetailPage';
import Khamchuabenh from './Khamchuabenh/Khamchuabenh';
import Thutucxuatvien from './Khamchuabenh/Thutucxuatvien';
import Quytrinhthanhtoan from './Khamchuabenh/Quytrinhthanhtoan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/news-events" element={<NewsEventsPage />} />
        <Route path="/news-events/:slug" element={<ArticleDetailPage />} />
        <Route path="/party-politics" element={<PartyPoliticsPage />} />
        <Route path="/party-politics/:slug" element={<PartyArticleDetailPage />} />
        <Route path="/kham-chua-benh" element={<Khamchuabenh />} />
        <Route path="/kham-chua-benh/loai-hinh" element={<Thutucxuatvien />} />
        <Route path="/kham-chua-benh/thanh-toan" element={<Quytrinhthanhtoan />} />
        <Route path="/call-center" element={<CallCenter />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/expert-consultation" element={<ExpertConsultation />} />
        <Route path="/check-results" element={<CheckResults />} />
      </Routes>
    </Router>
  );
}

export default App;
