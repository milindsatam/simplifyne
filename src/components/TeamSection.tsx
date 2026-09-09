import { existsSync } from "node:fs";
import path from "node:path";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { teamMembers, type TeamMember } from "@/data/team";
import { LinkedinIcon } from "./LinkedinIcon";

const ARROW_SIZE = 16;

/** A plain Server Component (no client JS needed here), so this can check
    the real filesystem for each photo at render time rather than guessing:
    a photo dropped into /public later just starts rendering, no code
    change required, and a still-missing one never breaks the layout. */
function hasPhoto(photo: string) {
  return existsSync(path.join(process.cwd(), "public", photo));
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TeamSection() {
  const founders = teamMembers.slice(0, 3);
  const rest = teamMembers.slice(3);

  return (
    <section className="section-padding bg-surface-white">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <h2 className="font-display text-section-title font-bold text-ink">
          The team
        </h2>

        <ul className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {founders.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}

          <li>
            <a
              href="#"
              className="group flex aspect-square flex-col rounded-panel bg-brand p-3 text-on-dark transition-colors duration-standard ease-standard hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-brand"
            >
              <p className="text-label font-semibold uppercase text-on-brand-muted">
                Join us
              </p>
              <p className="mt-2 text-bento-heading-md font-semibold">
                We&rsquo;re hiring
              </p>
              <p className="mt-2 text-menu-body text-on-dark/80">
                We&rsquo;re always up for meeting sharp, kind people who love
                the craft.
              </p>

              <span className="mt-auto inline-flex w-fit items-center gap-1 text-card-body font-semibold text-on-dark">
                See open roles
                <ArrowRight
                  size={ARROW_SIZE}
                  aria-hidden="true"
                  className="motion-safe:transition-transform motion-safe:duration-standard motion-safe:ease-standard motion-safe:group-hover:translate-x-[var(--arrow-shift)]"
                />
              </span>
            </a>
          </li>

          {rest.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  const photoAvailable = hasPhoto(member.photo);

  return (
    <li className="min-w-0">
      <div className="relative aspect-square overflow-hidden rounded-panel bg-surface-muted">
        {photoAvailable ? (
          <Image
            src={member.photo}
            alt=""
            fill
            sizes="(min-width: 1024px) 23vw, 45vw"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center text-card-title font-semibold text-ink/40"
          >
            {initials(member.name)}
          </div>
        )}
      </div>

      <p className="mt-3 text-body-md font-semibold text-ink">
        {member.name}
      </p>
      <p className="mt-0.5 text-menu-body text-ink/60">{member.role}</p>

      <a
        href={member.linkedinHref}
        className="mt-1.5 inline-flex items-center gap-1 text-menu-body font-semibold text-ink transition-colors duration-standard ease-standard hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        <LinkedinIcon className="size-3.5" />
        Follow on LinkedIn
      </a>
    </li>
  );
}
