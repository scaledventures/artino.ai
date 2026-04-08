import { FormEvent, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logoNew from "@assets/artino-logo-transparent.png";

const STATIC_ID = "artino.ai";
const STATIC_PASSWORD = "scaledventures";

export default function SiteLoginPage() {
  const [, setLocation] = useLocation();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (userId === STATIC_ID && password === STATIC_PASSWORD) {
      try {
        window.localStorage.setItem("artino-site-auth", "logged-in");
        window.dispatchEvent(new Event("artino-site-auth-changed"));
      } catch {
        // ignore storage errors
      }
      setLocation("/");
      return;
    }

    setError("Invalid ID or password. Please try again.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <main className="min-h-screen flex items-center justify-center px-4 md:px-6">
          <div className="w-full max-w-md">
            <div className="rounded-3xl bg-card shadow-2xl border border-border px-6 py-8 md:px-8 md:py-9">
              <div className="flex justify-center mb-4">
                <img
                  src={logoNew}
                  alt="artino.ai"
                  className="h-10 w-auto"
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-center mb-2">
                Login to Continue
              </h1>
              <p className="text-sm text-muted-foreground text-center mb-6">
                Enter the ID and password provided to you to access the site.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label
                    htmlFor="siteUserId"
                    className="block text-sm font-medium text-foreground"
                  >
                    ID
                  </label>
                  <input
                    id="siteUserId"
                    name="siteUserId"
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm md:text-base outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary transition-shadow"
                    placeholder="artino.ai"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="sitePassword"
                    className="block text-sm font-medium text-foreground"
                  >
                    Password
                  </label>
                  <input
                    id="sitePassword"
                    name="sitePassword"
                    type="password"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm md:text-base outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary transition-shadow"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {error ? (
                  <p className="text-sm text-destructive">{error}</p>
                ) : null}

                <Button
                  type="submit"
                  className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-11 text-sm md:text-base shadow-lg shadow-primary/25"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
      </main>
    </div>
  );
}

