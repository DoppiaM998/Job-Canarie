import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  app.post("/api/send-email", async (req, res) => {
    try {
      const { to_email, subject, body, attachment } = req.body;
      console.log(`[EMAIL] Ricevuta richiesta per ${to_email}`);
      console.log(`[EMAIL] Oggetto: ${subject}`);
      console.log(`[EMAIL] Corpo: ${body}`);
      if (attachment) console.log("[EMAIL] Allegato PDF presente");
      
      // Nota per lo sviluppatore: Qui andrebbe integrato un servizio email (SendGrid, Resend, etc.)
      // Per ora simuliamo il successo dell'invio
      res.json({ success: true, message: "Email inviata correttamente" });
    } catch (error) {
      console.error("[EMAIL] Errore:", error);
      res.status(500).json({ success: false, error: "Errore durante l'invio" });
    }
  });

  return httpServer;
}
