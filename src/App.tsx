import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFoundPage from "./pages/NotFoundPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          
          {/* Admin routes */}
          <Route path="/admin/general" element={<PlaceholderPage />} />
          <Route path="/admin/users" element={<PlaceholderPage />} />
          
          {/* Webhooks */}
          <Route path="/webhooks" element={<PlaceholderPage />} />
          
          {/* Recruitment routes */}
          <Route path="/recruitment/applications" element={<PlaceholderPage />} />
          <Route path="/recruitment/jobs" element={<PlaceholderPage />} />
          
          {/* Member routes */}
          <Route path="/activities" element={<PlaceholderPage />} />
          <Route path="/members" element={<PlaceholderPage />} />
          <Route path="/teams" element={<PlaceholderPage />} />
          <Route path="/groups" element={<PlaceholderPage />} />
          
          {/* Q&A routes */}
          <Route path="/qa/questions" element={<PlaceholderPage />} />
          <Route path="/qa/answers" element={<PlaceholderPage />} />
          
          {/* Other routes */}
          <Route path="/blacklist" element={<PlaceholderPage />} />
          <Route path="/banned" element={<PlaceholderPage />} />
          <Route path="/return-lessons" element={<PlaceholderPage />} />
          <Route path="/off-lessons" element={<PlaceholderPage />} />
          <Route path="/time-report" element={<PlaceholderPage />} />
          <Route path="/logout" element={<PlaceholderPage />} />
          
          {/* 404 catch-all */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
