import { Client } from "@microsoft/microsoft-graph-client";
import { ConfidentialClientApplication } from "@azure/msal-node";
import "isomorphic-fetch";

const msalConfig = {
  auth: {
    clientId: process.env.AZURE_CLIENT_ID!,
    authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`,
    clientSecret: process.env.AZURE_CLIENT_SECRET!,
  },
};

const cca = new ConfidentialClientApplication(msalConfig);

async function getAccessToken() {
  const authResult = await cca.acquireTokenByClientCredential({
    scopes: ["https://graph.microsoft.com/.default"],
  });

  if (!authResult?.accessToken) {
    throw new Error("Failed to acquire access token");
  }

  return authResult.accessToken;
}

export async function getGraphClient() {
  const accessToken = await getAccessToken();

  return Client.init({
    authProvider: (done) => {
      done(null, accessToken);
    },
  });
}

export interface EmailMessage {
  subject: string;
  body: string;
  toRecipients: string[];
  from: string;
}

export async function sendEmail(message: EmailMessage) {
  const client = await getGraphClient();

  const sendMail = {
    message: {
      subject: message.subject,
      body: {
        contentType: "HTML",
        content: message.body,
      },
      toRecipients: message.toRecipients.map((email) => ({
        emailAddress: {
          address: email,
        },
      })),
    },
    saveToSentItems: true,
  };

  await client
    .api(`/users/${message.from}/sendMail`)
    .post(sendMail);
}
