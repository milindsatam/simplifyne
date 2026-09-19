export interface ToolLogo {
  /** Filename in /public. */
  readonly src: string;
  /** The logo file's own dimensions, so next/image computes the right
      aspect ratio instead of assuming a generic box. */
  readonly width: number;
  readonly height: number;
  readonly maxHeight: number;
  readonly maxWidth: number;
}

export interface Tool {
  readonly id: string;
  readonly name: string;
  /** Rendered as a text label until the logo file exists; see the note
      below for the expected filenames. */
  readonly logo?: ToolLogo;
}

/** No logo files exist yet: each cell falls back to a text label until
    these are added to /public and wired up here:
    claude-logo.webp, openai-logo.webp, zapier-logo.webp, make-logo.webp,
    n8n-logo.webp. */
export const tools: readonly Tool[] = [
  { id: "claude", name: "Claude" },
  { id: "openai", name: "OpenAI" },
  { id: "zapier", name: "Zapier" },
  { id: "make", name: "Make" },
  { id: "n8n", name: "n8n" },
];
