import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CallCenter from './Dangkykhamchuabenh/Tongdai/CallCenter';
import BookAppointment from './Dangkykhamchuabenh/dichvukcb/BookAppointment';
import ExpertConsultation from './Dangkykhamchuabenh/Hopdapcungchuyengia/ExpertConsultation';
import CheckResults from './Dangkykhamchuabenh/Tracuuketquakcb/CheckResults';
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
import Danhgia from './Khachhang/Danhgia';
import Donvi from './Thongtinchung/Donvi/Donvi';
import GioithieuBV from './Thongtinchung/GioithieuBV/GioithieuBV';
import DocumentViewer from './Components/DocumentViewer/DocumentViewer';

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
        <Route path="/thong-tin-chung/thong-tin-benh-vien" element={<GioithieuBV />} />
        <Route path="/thong-tin-chung/cac-don-vi" element={<Donvi />} />
        <Route path="/customer-guide" element={<CustomerGuidePage />} />
        <Route path="/danh-gia" element={<Danhgia />} />
        <Route path="/call-center" element={<CallCenter />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/expert-consultation" element={<ExpertConsultation />} />
        <Route path="/check-results" element={<CheckResults />} />
        <Route path="/xem-tai-lieu" element={<DocumentViewer />} />

      </Routes>
    </Router>
  );
}

export default App;
