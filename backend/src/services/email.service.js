export async function sendContactEmail(data) {
  const {
    name,
    email,
    service,
    project,
    businessName,
    budget,
    website,
    date,
  } = data;

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "OseCom";
  const contactToEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey) {
    throw new Error("BREVO_API_KEY is missing");
  }

  if (!senderEmail) {
    throw new Error("BREVO_SENDER_EMAIL is missing");
  }

  if (!contactToEmail) {
    throw new Error("CONTACT_TO_EMAIL is missing");
  }

  const htmlContent = `
    <h2>Nouvelle demande</h2>
    <p><strong>Nom :</strong> ${name}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Prestation :</strong> ${service}</p>
    <p><strong>Projet :</strong> ${project}</p>
    <p><strong>Entreprise / marque :</strong> ${businessName || "-"}</p>
    <p><strong>Budget :</strong> ${budget || "-"}</p>
    <p><strong>Site web / Instagram :</strong> ${website || "-"}</p>
    <p><strong>Date idéale de démarrage :</strong> ${date || "-"}</p>
  `;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: contactToEmail,
        },
      ],
      replyTo: {
        email,
        name,
      },
      subject: "Nouvelle demande de contact",
      htmlContent,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Brevo error:", error);
    throw new Error("Erreur envoi email");
  }

  const result = await response.json();
  console.log("Email envoyé via Brevo:", result);

  return result;
}