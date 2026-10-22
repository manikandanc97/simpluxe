import type { ReactElement } from "react";

export interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

/**
 * Server component that renders valid, XSS-safe Schema.org JSON-LD scripts.
 */
export function JsonLd({ data }: JsonLdProps): ReactElement {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
