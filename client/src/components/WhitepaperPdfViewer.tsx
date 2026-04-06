import { useState, useEffect, useRef, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
/* Bundled worker — pdfjs-dist is pinned in package.json to the same version as react-pdf. */
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Button } from "@/components/ui/button";
import { ExternalLink, Loader2 } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

type WhitepaperPdfViewerProps = {
  file: string;
};

export function WhitepaperPdfViewer({ file }: WhitepaperPdfViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(320);
  const [numPages, setNumPages] = useState(0);
  const [narrow, setNarrow] = useState(false);

  const updateWidth = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const w = el.getBoundingClientRect().width;
    setWidth(Math.max(280, Math.floor(w)));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const syncNarrow = () => setNarrow(mq.matches);
    syncNarrow();
    mq.addEventListener("change", syncNarrow);
    return () => mq.removeEventListener("change", syncNarrow);
  }, []);

  useEffect(() => {
    updateWidth();
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => updateWidth());
    ro.observe(el);
    window.addEventListener("orientationchange", updateWidth);
    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", updateWidth);
    };
  }, [updateWidth]);

  return (
    <div className="mt-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-muted-foreground">
          Scroll to read the full document. You can also open it in your browser or
          download it.
        </p>
        <Button variant="outline" size="sm" className="rounded-full shrink-0" asChild>
          <a href={file} target="_blank" rel="noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Open / download PDF
          </a>
        </Button>
      </div>

      <div
        ref={containerRef}
        className="rounded-2xl border border-border bg-card overflow-hidden"
      >
        <div className="max-h-[min(85vh,1200px)] overflow-y-auto overflow-x-hidden bg-muted/20">
          <div className="flex flex-col items-center py-4 px-2 sm:px-4 gap-4">
            <Document
              file={file}
              onLoadSuccess={({ numPages: n }) => setNumPages(n)}
              loading={
                <div className="flex flex-col items-center gap-3 py-20 text-muted-foreground">
                  <Loader2 className="h-8 w-8 animate-spin" aria-hidden />
                  <span>Loading PDF…</span>
                </div>
              }
              error={
                <div className="text-center p-8 space-y-4 max-w-md mx-auto">
                  <p className="text-sm text-muted-foreground">
                    This browser couldn&apos;t render the PDF inline. Use the button
                    below to open or download it.
                  </p>
                  <Button asChild>
                    <a href={file} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open PDF
                    </a>
                  </Button>
                </div>
              }
            >
              {numPages > 0
                ? Array.from({ length: numPages }, (_, i) => (
                    <Page
                      key={i + 1}
                      pageNumber={i + 1}
                      width={width}
                      className="shadow-sm border border-border/40 rounded-sm bg-white max-w-full"
                      renderTextLayer={!narrow}
                      renderAnnotationLayer
                    />
                  ))
                : null}
            </Document>
          </div>
        </div>
      </div>
    </div>
  );
}
