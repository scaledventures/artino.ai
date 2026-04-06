import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const COOKIE_CONSENT_KEY = "iolaire-cookie-consent";

type ConsentState = "accepted" | "declined" | "unset";

export function CookieConsent() {
  const [location] = useLocation();

  // Hide cookie banner only on the dedicated first-time site login page.
  // Important: do not return early before hooks, otherwise React throws
  // "Rendered more hooks than during the previous render".
  const hideOnLoginPages = location === "/site-login";

  const [consent, setConsent] = useState<ConsentState>("unset");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [performanceEnabled, setPerformanceEnabled] = useState(true);
  const [functionalityEnabled, setFunctionalityEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentState | null;
      if (stored === "accepted" || stored === "declined") {
        setConsent(stored);
        if (stored === "accepted") {
          setPerformanceEnabled(true);
          setFunctionalityEnabled(true);
        } else {
          setPerformanceEnabled(false);
          setFunctionalityEnabled(false);
        }
      }
      window.addEventListener("open-cookie-settings", handleOpenSettings);
    } catch {
      // ignore storage errors
    }
    return () => {
      window.removeEventListener("open-cookie-settings", handleOpenSettings);
    };
  }, []);

  const handleOpenSettings = () => {
    setSettingsOpen(true);
  };

  const persistConsent = (value: ConsentState) => {
    setConsent(value);
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
      // ignore storage errors
    }
  };

  const handleAccept = () => {
    setPerformanceEnabled(true);
    setFunctionalityEnabled(true);
    persistConsent("accepted");
  };

  const handleDecline = () => {
    setPerformanceEnabled(false);
    setFunctionalityEnabled(false);
    persistConsent("declined");
  };

  const handleConfirmChoices = () => {
    const nextState: ConsentState =
      performanceEnabled || functionalityEnabled ? "accepted" : "declined";
    persistConsent(nextState);
    setSettingsOpen(false);
  };

  if (hideOnLoginPages) {
    return null;
  }

  if (consent !== "unset") {
    return (
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Cookie Settings</DialogTitle>
            <DialogDescription className="mt-1">
              You are in control of your data. Adjust how cookies are used on this site.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-muted-foreground">
            <section className="space-y-3">
              <h3 className="font-semibold text-foreground mb-1 text-sm">
                General information
              </h3>
              <div>
                <p className="font-semibold text-foreground text-sm">You are in control of your data.</p>
                <p className="text-xs mt-1">
                  You can control how Iolaire websites use cookies and similar technologies by
                  making choices below. But note that if you disable cookies and similar
                  technologies entirely, Iolaire websites may not function properly.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  What are cookies and why does Iolaire use them?
                </p>
                <p className="text-xs mt-1">
                  Cookies are small text files stored by your web browser when you use websites.
                  There are also other technologies that can be used for similar purposes like
                  HTML5 Local Storage and local shared objects, web beacons, and embedded scripts.
                  These technologies help us do things like remembering you and your preferences
                  when you return to our sites, measure how you use the website, conduct market
                  research, and gather information about the ads you see and interact with.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">How do I make choices?</p>
                <p className="text-xs mt-1">
                  You can make choices in the menu below about what cookies and other technologies
                  you want us to use on Iolaire sites when you visit them from this browser. You
                  can always change those choices later by clicking on the Manage Cookies link at
                  the bottom of the page.
                </p>
              </div>
            </section>
            <section className="space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground text-sm">
                    Operate the site and core services
                  </h4>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    Always active
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  These cookies are required, and they are used to enable the site and related
                  services core functionality. Without them the site could not operate, so they
                  cannot be disabled.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <input
                  id="cookie-performance"
                  type="checkbox"
                  className="mt-1 h-3.5 w-3.5 rounded border-border"
                  checked={performanceEnabled}
                  onChange={(e) => setPerformanceEnabled(e.target.checked)}
                />
                <div>
                  <label
                    htmlFor="cookie-performance"
                    className="font-semibold text-foreground text-sm cursor-pointer"
                  >
                    Measure performance
                  </label>
                  <p className="text-xs text-muted-foreground mt-1">
                    These cookies are used to analyze site usage to measure and improve
                    performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <input
                  id="cookie-functionality"
                  type="checkbox"
                  className="mt-1 h-3.5 w-3.5 rounded border-border"
                  checked={functionalityEnabled}
                  onChange={(e) => setFunctionalityEnabled(e.target.checked)}
                />
                <div>
                  <label
                    htmlFor="cookie-functionality"
                    className="font-semibold text-foreground text-sm cursor-pointer"
                  >
                    Extend functionality
                  </label>
                  <p className="text-xs text-muted-foreground mt-1">
                    These cookies are used to enhance the functionality of Iolaire sites such as
                    remembering your settings and preferences to deliver a personalized
                    experience.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <DialogFooter className="mt-4 gap-2">
            <Button
              variant="outline"
              onClick={handleDecline}
              className="rounded-full px-6 text-xs md:text-sm"
            >
              Don&apos;t enable
            </Button>
            <Button
              onClick={handleAccept}
              className="rounded-full px-6 text-xs md:text-sm"
            >
              Enable all
            </Button>
            <Button
              variant="outline"
              onClick={handleConfirmChoices}
              className="rounded-full px-6 text-xs md:text-sm"
            >
              Confirm my choices
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <>
      <div className="fixed inset-x-0 z-40 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] bottom-0 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-3xl rounded-2xl bg-card shadow-xl border border-border/80 px-5 py-4 md:px-6 md:py-4 flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex-1">
            <p className="text-sm md:text-base font-medium text-foreground">
              We use cookies to improve your experience.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              Cookies help us operate the site, measure performance, and enhance functionality.
            </p>
            <button
              type="button"
              onClick={() => setSettingsOpen(true)}
              className="mt-2 text-xs md:text-sm font-semibold text-primary hover:underline"
            >
              Manage Cookies
            </button>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full px-4 text-xs md:text-sm"
              onClick={handleDecline}
            >
              Decline
            </Button>
            <Button
              size="sm"
              className="rounded-full px-5 text-xs md:text-sm"
              onClick={handleAccept}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Cookie Settings</DialogTitle>
            <DialogDescription className="mt-1">
              You are in control of your data. Adjust how cookies are used on this site.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-muted-foreground">
            <section className="space-y-3">
              <h3 className="font-semibold text-foreground mb-1 text-sm">
                General information
              </h3>
              <div>
                <p className="font-semibold text-foreground text-sm">You are in control of your data.</p>
                <p className="text-xs mt-1">
                  You can control how Iolaire websites use cookies and similar technologies by
                  making choices below. But note that if you disable cookies and similar
                  technologies entirely, Iolaire websites may not function properly.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  What are cookies and why does Iolaire use them?
                </p>
                <p className="text-xs mt-1">
                  Cookies are small text files stored by your web browser when you use websites.
                  There are also other technologies that can be used for similar purposes like
                  HTML5 Local Storage and local shared objects, web beacons, and embedded scripts.
                  These technologies help us do things like remembering you and your preferences
                  when you return to our sites, measure how you use the website, conduct market
                  research, and gather information about the ads you see and interact with.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">How do I make choices?</p>
                <p className="text-xs mt-1">
                  You can make choices in the menu below about what cookies and other technologies
                  you want us to use on Iolaire sites when you visit them from this browser. You
                  can always change those choices later by clicking on the Manage Cookies link at
                  the bottom of the page.
                </p>
              </div>
            </section>
            <section className="space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground text-sm">
                    Operate the site and core services
                  </h4>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    Always active
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  These cookies are required, and they are used to enable the site and related
                  services core functionality. Without them the site could not operate, so they
                  cannot be disabled.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <input
                  id="cookie-performance-settings"
                  type="checkbox"
                  className="mt-1 h-3.5 w-3.5 rounded border-border"
                  checked={performanceEnabled}
                  onChange={(e) => setPerformanceEnabled(e.target.checked)}
                />
                <div>
                  <label
                    htmlFor="cookie-performance-settings"
                    className="font-semibold text-foreground text-sm cursor-pointer"
                  >
                    Measure performance
                  </label>
                  <p className="text-xs text-muted-foreground mt-1">
                    These cookies are used to analyze site usage to measure and improve
                    performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <input
                  id="cookie-functionality-settings"
                  type="checkbox"
                  className="mt-1 h-3.5 w-3.5 rounded border-border"
                  checked={functionalityEnabled}
                  onChange={(e) => setFunctionalityEnabled(e.target.checked)}
                />
                <div>
                  <label
                    htmlFor="cookie-functionality-settings"
                    className="font-semibold text-foreground text-sm cursor-pointer"
                  >
                    Extend functionality
                  </label>
                  <p className="text-xs text-muted-foreground mt-1">
                    These cookies are used to enhance the functionality of Iolaire sites such as
                    remembering your settings and preferences to deliver a personalized
                    experience.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <DialogFooter className="mt-4 gap-2">
            <Button
              variant="outline"
              onClick={handleDecline}
              className="rounded-full px-6 text-xs md:text-sm"
            >
              Don&apos;t enable
            </Button>
            <Button
              onClick={handleAccept}
              className="rounded-full px-6 text-xs md:text-sm"
            >
              Enable all
            </Button>
            <Button
              variant="outline"
              onClick={handleConfirmChoices}
              className="rounded-full px-6 text-xs md:text-sm"
            >
              Confirm my choices
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

