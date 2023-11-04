import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Error from "./pages/error/Error";
import Sidebar from "./pages/admin/sidebar/Sidebar";
import Header from "./pages/admin/layouts/header/Header";
import Dashboard from "./pages/admin/layouts/components/dashboard/Dashboard";
import Crm from "./pages/admin/layouts/components/crm/Crm";
import Blog from "./pages/admin/layouts/components/blog/Blog";
import Elearning from "./pages/admin/layouts/components/elearning/Elearning";
import Ecommerce from "./pages/admin/layouts/components/ecommerce/Ecommerce";
import Seo from "./pages/admin/layouts/components/seo/Seo";
import CMS from "./pages/admin/layouts/components/cms/CmsPages"
import Billing from "./pages/admin/layouts/components/billing/Billing";

const  App = () => {
  return (
    <div className="App relative">
      <Router>
        <div className="flex gap-9 bg-e8f2fc h-100 overflow-hidden ">
          <div className="w-side">
            <Sidebar />
          </div>
          <div className="w-route">
            <Header />
            <Routes>
              {/* ======================= Start-pages ======================= */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/crm" element={<Crm />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/elearning" element={<Elearning />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/elearning" element={<Elearning />} />
              <Route path="/cms" element={<CMS />} />
              <Route path="/seo" element={<Seo />} />
              <Route path="/cms" element={<CMS />} />
              <Route path="/billing" element={<Billing />} />
              {/* ======================= End-pages ======================= */}

              {/* ======================= Start-Error ======================= */}
              <Route path="*" element={<Error />} />
              {/* ======================= End-Error ======================= */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
