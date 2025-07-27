import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VillageHome from "./pages/VillageHome";
import Register from "./pages/Register";
import FindSkills from "./pages/FindSkills";
import ShareSkills from "./pages/ShareSkills";
import Profile from "./pages/Profile";
import ItsAMatch from "./pages/ItsAMatch";
import SkillDetail from "./pages/SkillDetail";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VillageHome />} />
          <Route path="/register" element={<Register />} />

          {/* Placeholder routes for future development */}
          <Route path="/town-center" element={<PlaceholderPage title="Town Center" description="Connect with other villagers and see community activity" emoji="🏛️" />} />
          <Route path="/workshop" element={<PlaceholderPage title="Workshop" description="Create and share your skills with the village" emoji="🔨" />} />
          <Route path="/messages" element={<PlaceholderPage title="Messages" description="Chat with your skill matches and mentors" emoji="💬" />} />
          <Route path="/village-board" element={<PlaceholderPage title="Village Board" description="View notifications and community updates" emoji="📋" />} />
          <Route path="/skill-match" element={<FindSkills />} />
          <Route path="/create-skill" element={<ShareSkills />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/connect/:skillId" element={<ItsAMatch />} />
          <Route path="/skill/:skillId" element={<SkillDetail />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
