import { PrismaClient } from "@prisma/client";
import { sendContactEmail } from "../services/email.service.js";
import { createOrUpdateHubspotContact } from "../services/hubspot.service.js";

const prisma = new PrismaClient();

export async function submitContactForm(req, res) {
  const {
    name,
    businessName,
    budget,
    service,
    email,
    website,
    date,
    project,
  } = req.body;

  if (!name || !email || !service || !project) {
    return res.status(400).json({
      success: false,
      message: "Veuillez remplir tous les champs obligatoires.",
    });
  }

  try {
    const newContact = await prisma.contact.create({
      data: {
        name,
        businessName,
        budget,
        service,
        email,
        website,
        date,
        project,
      },
    });

    console.log("Saved contact:", newContact);

    try {
      await sendContactEmail({
        name,
        businessName,
        budget,
        service,
        email,
        website,
        date,
        project,
      });

      console.log("Contact email sent successfully.");
    } catch (emailError) {
      console.error("Email sending error:", emailError);
    }

    try {
      await createOrUpdateHubspotContact({
        name,
        email,
        website,
      });

      console.log("HubSpot contact synced successfully.");
    } catch (hubspotError) {
      console.error("HubSpot sync error:", hubspotError);
    }

    return res.status(200).json({
      success: true,
      message: "Votre demande a bien été enregistrée.",
    });
  } catch (dbError) {
    console.error("Database error:", dbError);

    return res.status(500).json({
      success: false,
      message: "Une erreur serveur est survenue.",
    });
  }
}