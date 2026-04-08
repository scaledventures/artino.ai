import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, ExternalLink, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import logoNew from "@assets/artino-logo-transparent.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [useHamburgerNav, setUseHamburgerNav] = useState(true);
  const [isTouchPrimary, setIsTouchPrimary] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0
    );
  });
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const evaluateNavMode = () => {
      const isSmallViewport = window.innerWidth < 1024;
      /* iPadOS often reports hover + fine pointer for "desktop" compatibility; still use tap-to-toggle when a touch surface exists. */
      const mediaSuggestsTouch =
        window.matchMedia("(hover: none)").matches ||
        window.matchMedia("(pointer: coarse)").matches;
      const hasTouchSurface =
        typeof navigator !== "undefined" && navigator.maxTouchPoints > 0;
      const useClickToggleMenus = mediaSuggestsTouch || hasTouchSurface;
      const shouldUseHamburger = isSmallViewport;

      setIsTouchPrimary(useClickToggleMenus);
      setUseHamburgerNav(shouldUseHamburger);

      // Ensure stale menu state doesn't leak across nav modes.
      if (!shouldUseHamburger) {
        setMobileMenuOpen(false);
      }
      if (shouldUseHamburger) {
        setOpenDesktopMenu(null);
      }
    };

    const mqlHoverNone = window.matchMedia("(hover: none)");
    const mqlPointerCoarse = window.matchMedia("(pointer: coarse)");

    evaluateNavMode();
    window.addEventListener("resize", evaluateNavMode);
    mqlHoverNone.addEventListener("change", evaluateNavMode);
    mqlPointerCoarse.addEventListener("change", evaluateNavMode);

    return () => {
      window.removeEventListener("resize", evaluateNavMode);
      mqlHoverNone.removeEventListener("change", evaluateNavMode);
      mqlPointerCoarse.removeEventListener("change", evaluateNavMode);
    };
  }, []);

  const navItems = [
    {
      name: "PRODUCTS",
      options: [{ label: "AdTech Platform", path: "/adtech" }],
    },
    { 
      name: "INDUSTRY SOLUTIONS", 
      options: [
        { label: "Retail", path: "/retail" },
      ]
    },
    { 
      name: "RESOURCES", 
      options: [
        { label: "AdTech Resources", path: "/adtech-resources" },
      ]
    },
    { 
      name: "ABOUT US", 
      options: [
        { label: "Company", path: "/about-us" },
        { label: "Careers", path: "/careers" },
        { label: "Office Locations", path: "/office-locations" }
      ]
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b font-[Roboto,sans-serif] pt-[env(safe-area-inset-top,0px)]",
        isScrolled
          ? "bg-background/98 backdrop-blur-md border-border/80 shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <img
              src={logoNew}
              alt="ARTINO.AI"
              className="h-10 w-auto object-contain"
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className={cn("items-center gap-3", useHamburgerNav ? "hidden" : "flex")}>
          <div className="flex items-center gap-2 mr-2">
            {navItems.map((item) => (
              <HoverCard
                key={item.name}
                openDelay={0}
                closeDelay={100}
                open={isTouchPrimary ? openDesktopMenu === item.name : undefined}
                onOpenChange={
                  isTouchPrimary
                    ? (open) => setOpenDesktopMenu(open ? item.name : null)
                    : undefined
                }
              >
                <HoverCardTrigger asChild>
                  <button
                    type="button"
                    className="text-base font-bold text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-all duration-200 flex items-center gap-1.5 uppercase tracking-wider outline-none cursor-pointer px-3 py-2 rounded-lg"
                    onClick={
                      isTouchPrimary
                        ? (e) => {
                            e.preventDefault();
                            setOpenDesktopMenu((current) =>
                              current === item.name ? null : item.name,
                            );
                          }
                        : undefined
                    }
                  >
                    {item.name} <ChevronDown className="h-3 w-3 opacity-50" />
                  </button>
                </HoverCardTrigger>
                <HoverCardContent
                  sideOffset={6}
                  align="start"
                  className="bg-card/98 backdrop-blur-xl border border-border/50 shadow-lg rounded-xl w-auto p-3 mt-1"
                >
                  {item.name === "PRODUCTS" ? (
                    <div className="flex gap-6">
                      <div className="flex flex-col gap-1.5 min-w-[180px]">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary px-1">
                          AdTech Platform
                        </span>
                        <Link href="/adtech">
                          <a className="text-base py-1.5 px-2 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 font-medium whitespace-nowrap">
                            Overview
                          </a>
                        </Link>
                        <Link href="/adtech/loyalty-offers">
                          <a className="text-base py-1.5 px-2 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 font-medium whitespace-nowrap">
                            Loyalty &amp; Offers
                          </a>
                        </Link>
                        <Link href="/adtech/unified-dashboard">
                          <a className="text-base py-1.5 px-2 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 font-medium whitespace-nowrap">
                            Unified Dashboard
                          </a>
                        </Link>
                        <Link href="/adtech/layered-security-privacy">
                          <a className="text-base py-1.5 px-2 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 font-medium whitespace-nowrap">
                            Layered Security &amp; Privacy
                          </a>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-0.5">
                      {item.options.map((opt) => (
                        <Link key={opt.path} href={opt.path}>
                          <a className="text-base py-2 px-3 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 font-medium whitespace-nowrap">
                            {opt.label}
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Link href="/get-in-touch">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-5 flex items-center gap-2 h-9 text-base">
                Contact Us <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <Link href="/client-login">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-5 flex items-center gap-2 h-9 text-base">
                Client Login <Lock className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle — min 44×44pt touch target (iPad / phone) */}
        <button
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className={cn(
            "text-foreground min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg hover:bg-muted/50",
            useHamburgerNav ? "inline-flex" : "hidden",
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {useHamburgerNav && mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 max-h-[calc(100dvh-5rem)] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.18em] px-2">{item.name}</span>
              {item.name === "PRODUCTS" ? (
                <div className="flex flex-col gap-1.5">
                  <span className="text-[0.65rem] font-semibold text-primary uppercase tracking-[0.2em] px-3 mt-1">
                    AdTech Platform
                  </span>
                  <Link href="/adtech">
                    <a className="text-base text-foreground/90 hover:text-primary hover:bg-muted/50 px-3 py-1.5 rounded-lg transition-all duration-200">
                      Overview
                    </a>
                  </Link>
                  <Link href="/adtech/loyalty-offers">
                    <a className="text-base text-foreground/90 hover:text-primary hover:bg-muted/50 px-3 py-1.5 rounded-lg transition-all duration-200">
                      Loyalty &amp; Offers
                    </a>
                  </Link>
                  <Link href="/adtech/unified-dashboard">
                    <a className="text-base text-foreground/90 hover:text-primary hover:bg-muted/50 px-3 py-1.5 rounded-lg transition-all duration-200">
                      Unified Dashboard
                    </a>
                  </Link>
                  <Link href="/adtech/layered-security-privacy">
                    <a className="text-base text-foreground/90 hover:text-primary hover:bg-muted/50 px-3 py-1.5 rounded-lg transition-all duration-200">
                      Layered Security &amp; Privacy
                    </a>
                  </Link>
                </div>
              ) : (
                item.options.map((opt) => (
                  <Link key={opt.path} href={opt.path}>
                    <a className="text-base text-foreground/90 hover:text-primary hover:bg-muted/50 px-3 py-1.5 rounded-lg transition-all duration-200">
                      {opt.label}
                    </a>
                  </Link>
                ))
              )}
            </div>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Link href="/get-in-touch">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-10 text-base">
                Contact Us
              </Button>
            </Link>
            <Link href="/client-login">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-10 text-base">
                Client Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
