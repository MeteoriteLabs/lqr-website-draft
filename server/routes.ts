import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the landing page
  // No database operations needed for this static landing page

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "LocalQR Landing Page API" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
