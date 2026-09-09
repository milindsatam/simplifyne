"use client";

import {
  ArrowRight,
  Check,
  CheckCircle,
  MapPin,
  MessagesSquare,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { ChevronDownIcon } from "./ChevronDownIcon";

const SERVICE_OPTIONS = [
  "AI & Automation",
  "Development",
  "Search & Growth",
  "Design & UX",
  "Other",
] as const;

const ARROW_SIZE = 18;
const CHECK_ICON_SIZE = 14;
const CONFIRM_ICON_SIZE = 40;
const METHOD_ICON_SIZE = 20;

/* Shared underline treatment for every field: a box-shadow rather than a
   real border, so the focus state can thicken and recolour without shifting
   any layout the way a growing border-width would. */
const FIELD_CLASS =
  "border-0 bg-transparent px-1 pb-1 text-inherit text-ink shadow-[inset_0_-1px_0_0_rgba(10,10,10,0.3)] outline-none transition-shadow duration-standard ease-standard placeholder:text-ink/35 focus:shadow-[inset_0_-2px_0_0_var(--color-brand)]";

const SENTENCE_CLASS =
  "flex flex-wrap items-baseline gap-x-2 gap-y-3 font-sans text-form-sentence text-ink";

const HINT_CLASS = "mt-1.5 text-body-sm text-brand";

/* Demo placeholders only; wired to /contact stubs elsewhere on the site. */
type ContactMethod = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  locations?: readonly string[];
};

const CONTACT_METHODS: readonly ContactMethod[] = [
  {
    id: "chat",
    icon: MessagesSquare,
    title: "Chat with us",
    description: "Speak to our friendly team via live chat.",
    linkLabel: "Start a live chat",
    linkHref: "#",
  },
  {
    id: "email",
    icon: Send,
    title: "Shoot us an email",
    description: "We reply within a day, usually sooner.",
    linkLabel: "hello@simplifyne.com",
    linkHref: "#",
  },
  {
    id: "call",
    icon: Phone,
    title: "Call us",
    description: "Mon to Fri, 10am to 7pm IST.",
    linkLabel: "+91 90000 00000",
    linkHref: "#",
  },
  {
    id: "visit",
    icon: MapPin,
    title: "Visit us",
    description: "Come say hi at either studio.",
    linkLabel: "",
    linkHref: "#",
    locations: ["Mumbai", "Belagavi"],
  },
];

type FieldErrors = {
  name: boolean;
  contact: boolean;
  terms: boolean;
};

export function ContactSection() {
  const [name, setName] = useState("");
  const [service, setService] = useState<(typeof SERVICE_OPTIONS)[number]>(
    SERVICE_OPTIONS[0],
  );
  const [otherReason, setOtherReason] = useState("");
  const [contact, setContact] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isOther = service === "Other";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FieldErrors = {
      name: name.trim().length === 0,
      contact: contact.trim().length === 0,
      terms: !accepted,
    };
    setErrors(nextErrors);

    if (!nextErrors.name && !nextErrors.contact && !nextErrors.terms) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section-padding bg-surface-muted">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        {submitted ? (
          <div>
            <CheckCircle
              size={CONFIRM_ICON_SIZE}
              aria-hidden="true"
              className="text-brand"
            />
            <p className="mt-4 max-w-[40rem] font-display text-closing-statement font-semibold text-ink">
              Thanks, {name.trim() || "there"}. Your message just landed with
              us. A real person from Simplifyne will get back to you shortly.
              No bots, no queue.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-eyebrow text-ink/60">/ Get in touch</p>
            <h1 className="mt-3 font-display text-page-title font-bold text-ink">
              Schedule an appointment
            </h1>

            <form
              noValidate
              onSubmit={handleSubmit}
              className="mt-10 flex max-w-[52rem] flex-col gap-8"
            >
              <div>
                <div className={SENTENCE_CLASS}>
                  <span>Hey, my name is</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Type here"
                    aria-label="Your name"
                    className={`${FIELD_CLASS} w-full sm:w-40`}
                  />
                  <span>and I&rsquo;m looking for</span>

                  <span className="relative inline-flex">
                    <select
                      value={service}
                      onChange={(event) =>
                        setService(
                          event.target.value as (typeof SERVICE_OPTIONS)[number],
                        )
                      }
                      aria-label="What you're looking for"
                      className={`${FIELD_CLASS} w-full cursor-pointer appearance-none pr-6 sm:w-auto`}
                    >
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-ink/50" />
                  </span>

                  {/* Always mounted so the reveal can transition; inert keeps
                      it out of the tab order and validation while hidden,
                      the same pattern used for the mega-menu panel. */}
                  <span
                    data-open={isOther}
                    inert={!isOther}
                    className="contact-other-reveal"
                  >
                    <input
                      type="text"
                      value={otherReason}
                      onChange={(event) => setOtherReason(event.target.value)}
                      placeholder="Tell us what you need"
                      aria-label="Tell us what you need"
                      className={`${FIELD_CLASS} w-56`}
                    />
                  </span>
                </div>
                {errors?.name && (
                  <p className={HINT_CLASS}>We&rsquo;d love to know what to call you.</p>
                )}
              </div>

              <div>
                <div className={SENTENCE_CLASS}>
                  <span>Get in touch with me at</span>
                  <input
                    type="text"
                    value={contact}
                    onChange={(event) => setContact(event.target.value)}
                    placeholder="Your email or phone"
                    aria-label="Your email or phone number"
                    className={`${FIELD_CLASS} w-full sm:w-64`}
                  />
                  <span>!</span>
                </div>
                {errors?.contact && (
                  <p className={HINT_CLASS}>How can we reach you?</p>
                )}
              </div>

              <div>
                <label className="flex cursor-pointer items-start gap-2">
                  <span className="relative mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-[0.25rem] border border-ink/30 bg-surface-white transition-colors duration-standard ease-standard has-[:checked]:border-brand has-[:checked]:bg-brand has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand">
                    <input
                      type="checkbox"
                      checked={accepted}
                      onChange={(event) => setAccepted(event.target.checked)}
                      className="absolute inset-0 size-full cursor-pointer opacity-0 outline-none"
                    />
                    <Check
                      size={CHECK_ICON_SIZE}
                      aria-hidden="true"
                      className={`text-on-dark ${accepted ? "opacity-100" : "opacity-0"}`}
                    />
                  </span>
                  <span className="text-body-sm text-ink">
                    I hereby accept all terms and conditions.
                  </span>
                </label>
                {errors?.terms && (
                  <p className={HINT_CLASS}>
                    Just need a quick nod to the terms first.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="group inline-flex w-fit items-center gap-2 rounded-[0.5rem] bg-ink px-[1.75rem] py-[0.875rem] text-body-sm font-semibold text-on-dark transition-colors duration-standard ease-standard hover:bg-ink-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                Send enquiry
                <ArrowRight
                  size={ARROW_SIZE}
                  aria-hidden="true"
                  className="motion-safe:transition-transform motion-safe:duration-standard motion-safe:ease-standard motion-safe:group-hover:translate-x-[var(--arrow-shift)]"
                />
              </button>
            </form>
          </div>
        )}

        <div className="mt-8 border-t border-menu-divider pt-8">
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {CONTACT_METHODS.map((method) => (
              <li key={method.id}>
                <method.icon
                  size={METHOD_ICON_SIZE}
                  aria-hidden="true"
                  className="text-ink"
                />
                <h3 className="mt-3 text-card-title font-semibold text-ink">
                  {method.title}
                </h3>
                <p className="mt-1 text-card-body text-ink/60">
                  {method.description}
                </p>

                {method.locations ? (
                  <div className="mt-2 flex flex-col gap-1">
                    {method.locations.map((location) => (
                      <a
                        key={location}
                        href="#"
                        className="w-fit text-body-sm font-semibold text-ink underline decoration-1 underline-offset-4 transition-colors duration-standard ease-standard hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                      >
                        {location}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={method.linkHref}
                    className="mt-2 inline-block w-fit text-body-sm font-semibold text-ink underline decoration-1 underline-offset-4 transition-colors duration-standard ease-standard hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    {method.linkLabel}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
