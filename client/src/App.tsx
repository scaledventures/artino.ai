import { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AdTechPage from "@/pages/AdTechPage";
import AboutUsPage from "@/pages/AboutUsPage";
import GetInTouchPage from "@/pages/GetInTouchPage";
import CareersPage from "@/pages/CareersPage";
import OfficeLocationsPage from "@/pages/OfficeLocationsPage";
import ClientLoginPage from "@/pages/ClientLoginPage";
import SiteLoginPage from "@/pages/SiteLoginPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import PrivacySettingsPage from "@/pages/PrivacySettingsPage";
import AdTechResourcesPage from "@/pages/AdTechResourcesPage";
import IndustrySolutionsPage from "@/pages/IndustrySolutionsPage";
import RetailPage from "@/pages/RetailPage";
import CalendarPage from "@/pages/CalendarPage";
import PlatformArchitecturePage from "@/pages/PlatformArchitecturePage";
import { CookieConsent } from "@/components/CookieConsent";
import LoyaltyOffersPage from "@/pages/LoyaltyOffersPage";
import AdtechUnifiedDashboardPage from "@/pages/AdtechUnifiedDashboardPage";
import AdtechLayeredSecurityPrivacyPage from "@/pages/AdtechLayeredSecurityPrivacyPage";
import AdtechBlogPage from "@/pages/AdtechBlogPage";
import AdtechWhitepaperPage from "@/pages/AdtechWhitepaperPage";

function Router() {
  const [location, setLocation] = useLocation();
  const [isSiteAuthenticated, setIsSiteAuthenticated] = useState<boolean | null>(null);

  // Read site-auth state from localStorage on first load and when custom auth event fires
  useEffect(() => {
    const readAuth = () => {
      try {
        const stored = window.localStorage.getItem("artino-site-auth");
        setIsSiteAuthenticated(stored === "logged-in");
      } catch {
        setIsSiteAuthenticated(false);
      }
    };

    readAuth();
    window.addEventListener("artino-site-auth-changed", readAuth);

    return () => {
      window.removeEventListener("artino-site-auth-changed", readAuth);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  // For unauthenticated visitors, always show the simple site login page,
  // except when they directly open the dedicated client login.
  useEffect(() => {
    if (isSiteAuthenticated === null) return;

    if (!isSiteAuthenticated && location !== "/site-login" && location !== "/client-login") {
      setLocation("/site-login");
    } else if (isSiteAuthenticated && location === "/site-login") {
      setLocation("/");
    }
  }, [isSiteAuthenticated, location, setLocation]);

  // Avoid rendering routes until we know auth state to prevent flicker
  if (isSiteAuthenticated === null) {
    return null;
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/site-login" component={SiteLoginPage} />
      {/* Products */}
      <Route path="/adtech" component={AdTechPage} />
      <Route path="/adtech/loyalty-offers" component={LoyaltyOffersPage} />
      <Route path="/adtech/unified-dashboard" component={AdtechUnifiedDashboardPage} />
      <Route
        path="/adtech/layered-security-privacy"
        component={AdtechLayeredSecurityPrivacyPage}
      />
      {/* Industry Solutions */}
      <Route path="/industry-solutions" component={IndustrySolutionsPage} />
      <Route path="/retail" component={RetailPage} />
      {/* Platform Architecture */}
      <Route path="/platform-architecture" component={PlatformArchitecturePage} />
      {/* Resources */}
      <Route path="/adtech-resources" component={AdTechResourcesPage} />
      <Route path="/blog/adtech" component={AdtechBlogPage} />
      <Route path="/whitepaper/adtech" component={AdtechWhitepaperPage} />
      {/* About Us */}
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/get-in-touch" component={GetInTouchPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/office-locations" component={OfficeLocationsPage} />
      {/* Calendar/Booking */}
      <Route path="/calendar" component={CalendarPage} />
      <Route path="/book-appointment" component={CalendarPage} />
      {/* Client login */}
      <Route path="/client-login" component={ClientLoginPage} />
      {/* Legal */}
      <Route path="/terms-of-service" component={TermsOfServicePage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/privacy-settings" component={PrivacySettingsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-dvh overflow-x-clip">
          <Toaster />
          <Router />
          <CookieConsent />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
