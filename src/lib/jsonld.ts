// Serialises JSON-LD safely for inline <script> use.
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
