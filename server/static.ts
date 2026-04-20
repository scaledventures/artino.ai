import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // SPA fallback: client-side routes (e.g. /blog/adtech) have no real file — serve index.html.
  // Express 5 path patterns like "/{*path}" are unreliable here; use an explicit GET/HEAD handler.
  app.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
      return next();
    }
    if (req.path.startsWith("/api")) {
      return next();
    }
    res.sendFile(path.resolve(distPath, "index.html"), (err) => {
      if (err) next(err);
    });
  });
}
