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
import PartyPoliticsPage from './modules/partypolitics/pages/NewsEventsPage';
import PartyArticleDetailPage from './modules/partypolitics/pages/ArticleDetailPage';
import HoptacNewsEventsPage from './modules/Hoptac/pages/NewsEventsPage';
import HoptacArticleDetailPage from './modules/Hoptac/pages/ArticleDetailPage';
import Khamchuabenh from './Khamchuabenh/Khamchuabenh';
import Thutucxuatvien from './Khamchuabenh/Thutucxuatvien';
import Quytrinhthanhtoan from './Khamchuabenh/Quytrinhthanhtoan';
import CustomerGuidePage from './Khachhang/CustomerGuide';
import Donvi from './Thongtinchung/Donvi/Donvi';

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
        <Route path="/nghiencuu-hoptac" element={<HoptacNewsEventsPage />} />
        <Route path="/nghiencuu-hoptac/:slug" element={<HoptacArticleDetailPage />} />
        <Route path="/kham-chua-benh" element={<Khamchuabenh />} />
        <Route path="/kham-chua-benh/loai-hinh" element={<Thutucxuatvien />} />
        <Route path="/kham-chua-benh/thanh-toan" element={<Quytrinhthanhtoan />} />
        <Route path="/thong-tin-chung/cac-don-vi" element={<Donvi />} />
        <Route path="/customer-guide" element={<CustomerGuidePage />} />
        <Route path="/call-center" element={<CallCenter />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/expert-consultation" element={<ExpertConsultation />} />
        <Route path="/check-results" element={<CheckResults />} />
        
      </Routes>
    </Router>
  );
}

export default App;
