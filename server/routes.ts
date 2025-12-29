import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Configurazione trasportatore email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  app.post("/api/send-email", async (req, res) => {
    try {
      const { to_email, subject, body, attachment } = req.body;
      
      const mailOptions: any = {
        from: process.env.EMAIL_USER,
        to: to_email,
        subject: subject,
        text: body
      };

      if (attachment) {
        // attachment è una stringa base64 "data:application/pdf;base64,..."
        const base64Data = attachment.split(',')[1];
        mailOptions.attachments = [
          {
            filename: 'CV_Candidato.pdf',
            content: base64Data,
            encoding: 'base64'
          }
        ];
      }

      await transporter.sendMail(mailOptions);
      console.log(`[EMAIL SUCCESS] Inviata correttamente a ${to_email}`);
      res.json({ success: true, message: "Email inviata correttamente" });
    } catch (error: any) {
      console.error("[EMAIL ERROR] Dettagli errore:", {
        message: error.message,
        code: error.code,
        command: error.command,
        response: error.response
      });
      res.status(500).json({ success: false, error: "Errore durante l'invio", details: error.message });
    }
  });

  return httpServer;
}
