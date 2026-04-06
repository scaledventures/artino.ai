import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { WhitepaperPdfViewer } from "@/components/WhitepaperPdfViewer";
import { Link } from "wouter";
import adtechWhitepaperPdf from "../../../attached_assets/pdfs/17032026_Whitepaper_AdTech.pdf";

export default function AdtechWhitepaperPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <section className="max-w-5xl mx-auto space-y-6">
          <header className="space-y-3">
            <p className="text-primary font-bold tracking-widest uppercase text-[0.85rem]">
              AdTech Platform · Whitepaper
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight">
              Where Hyperlocal Advertising Meets Real World Intent
            </h1>
          </header>

          <div className="flex flex-wrap gap-3 items-center">
            <Link href="/adtech-resources">
              <Button variant="outline" size="sm" className="rounded-full">
                ← Back to AdTech Resources
              </Button>
            </Link>
            <a href={"/calendar"} target="_blank" rel="noreferrer">
              <Button size="sm" className="rounded-full">
                Calculate your ROI
              </Button>
            </a>
          </div>

          <WhitepaperPdfViewer file={adtechWhitepaperPdf} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

