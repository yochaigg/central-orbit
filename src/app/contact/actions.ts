"use server";

export async function sendContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || "Not provided";
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  // If Resend API key is configured, send via Resend
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Central Orbit Website <noreply@central-orbit.com>",
          to: "yochai.golan@central-orbit.com",
          subject: `Contact Form: ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            ``,
            `Message:`,
            message,
          ].join("\n"),
          reply_to: email,
        }),
      });

      if (!res.ok) {
        const body = await res.text();
        console.error("Resend error:", body);
        return { success: false, error: "Failed to send. Please try again." };
      }

      return { success: true };
    } catch (err) {
      console.error("Send error:", err);
      return { success: false, error: "Failed to send. Please try again." };
    }
  }

  // Fallback: log to server console (for development / before Resend is set up)
  console.log("--- CONTACT FORM SUBMISSION ---");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Message: ${message}`);
  console.log("--- END ---");
  console.log("Set RESEND_API_KEY env var to enable email delivery.");

  return { success: true };
}
