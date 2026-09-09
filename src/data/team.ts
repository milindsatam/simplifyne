export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  /** Path under /public. TODO: swap the fallback initials tile out once the
      real photo lands at this path. */
  readonly photo: string;
}

export const teamMembers: readonly TeamMember[] = [
  {
    id: "yogesh-randive",
    name: "Yogesh Randive",
    role: "Co-founder (Development & Technical)",
    photo: "/yogesh-randive.webp",
  },
  {
    id: "milind-satam",
    name: "Milind Satam",
    role: "Co-founder (Design, SEO & Growth)",
    photo: "/milind-satam.webp",
  },
  {
    id: "manjusha-pathade",
    name: "Manjusha Pathade",
    role: "Lead Strategist",
    photo: "/manjusha-pathade.webp",
  },
  {
    id: "anjali-randive",
    name: "Anjali Randive",
    role: "Human Resources",
    photo: "/anjali-randive.webp",
  },
  {
    id: "parinita-naik",
    name: "Parinita Naik",
    role: "Designer",
    photo: "/parinita-naik.webp",
  },
  {
    id: "komal-gawade",
    name: "Komal Gawade",
    role: "Intern",
    photo: "/komal-gawade.webp",
  },
] as const;
