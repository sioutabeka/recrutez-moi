const HUBSPOT_BASE_URL = "https://api.hubapi.com";
const HUBSPOT_CONTACTS_URL = `${HUBSPOT_BASE_URL}/crm/v3/objects/contacts`;

function buildHubspotProperties({ email, name, website }) {
  const safeName = (name || "").trim();
  const [firstname = "", ...rest] = safeName.split(/\s+/);
  const lastname = rest.join(" ");

  return {
    email,
    firstname,
    lastname,
    website: website || "",
  };
}

async function findHubspotContactByEmail(email, token) {
  const url = `${HUBSPOT_CONTACTS_URL}/${encodeURIComponent(
    email
  )}?idProperty=email`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (response.status === 404) {
    return null;
  }

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      `HubSpot find contact failed: ${response.status} ${JSON.stringify(result)}`
    );
  }

  return result;
}

async function createHubspotContact(properties, token) {
  const response = await fetch(HUBSPOT_CONTACTS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ properties }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      `HubSpot create contact failed: ${response.status} ${JSON.stringify(result)}`
    );
  }

  return result;
}

async function updateHubspotContact(contactId, properties, token) {
  const response = await fetch(`${HUBSPOT_CONTACTS_URL}/${contactId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ properties }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      `HubSpot update contact failed: ${response.status} ${JSON.stringify(result)}`
    );
  }

  return result;
}

export async function createOrUpdateHubspotContact(data) {
  const { email } = data;
  const token = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!token) {
    console.error("Missing HUBSPOT_ACCESS_TOKEN");
    return;
  }

  if (!email) {
    console.error("Missing email for HubSpot sync");
    return;
  }

  const properties = buildHubspotProperties(data);

  try {
    const existingContact = await findHubspotContactByEmail(email, token);

    if (existingContact?.id) {
      const updatedContact = await updateHubspotContact(
        existingContact.id,
        properties,
        token
      );

      console.log("HubSpot contact updated:", updatedContact.id);
      return updatedContact;
    }

    const createdContact = await createHubspotContact(properties, token);
    console.log("HubSpot contact created:", createdContact.id);
    return createdContact;
  } catch (error) {
    console.error("HubSpot request failed:", error);
  }
}