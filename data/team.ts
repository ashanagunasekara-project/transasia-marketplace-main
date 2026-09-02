import type { TeamMember } from "@/types";
import type {
  GradientTeamMember,
  TeamMemberWithImage,
  TeamMemberWithSocial,
} from "@/types/team";

export type {
  GradientTeamMember,
  TeamMemberWithImage,
  TeamMemberWithSocial,
  TeamSocialLink,
} from "@/types/team";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Michael Carter",
    role: "Chief Executive Officer",
    image: "/assets/images/team/team-05.webp",
  },
  {
    id: 2,
    name: "Sophia Reynolds",
    role: "Chief Operating Officer",
    image: "/assets/images/team/team-09.webp",
  },
  {
    id: 3,
    name: "Daniel Hayes",
    role: "Chief Technology Officer",
    image: "/assets/images/team/team-03.webp",
  },
  {
    id: 4,
    name: "James Taylor",
    role: "Chief Marketing Officer",
    image: "/assets/images/team/team-07.webp",
  },
  {
    id: 5,
    name: "Olivia Lee",
    role: "Head of E-commerce Strategy",
    image: "/assets/images/team/team-01.webp",
  },
  {
    id: 6,
    name: "Liam Miller",
    role: "Product Manager",
    image: "/assets/images/team/team-02.webp",
  },
  {
    id: 7,
    name: "Isabella Clark",
    role: "UX/UI Designer",
    image: "/assets/images/team/team-04.webp",
  },
  {
    id: 8,
    name: "Ethan Harris",
    role: "Customer Support Lead",
    image: "/assets/images/team/team-09.webp",
  },
  {
    id: 9,
    name: "Jack William",
    role: "Chief Technology Officer",
    image: "/assets/images/team/team-08.webp",
  },
  {
    id: 10,
    name: "Melisa Paul",
    role: "Chief Marketing Officer",
    image: "/assets/images/team/team-07.webp",
  },
  {
    id: 11,
    name: "Shane Watson",
    role: "Software Engineer",
    image: "/assets/images/team/team-06.webp",
  },
  {
    id: 12,
    name: "Steve Smith",
    role: "Blockchain Developer",
    image: "/assets/images/team/team-10.webp",
  },
];

export const teamMembersStandard: TeamMemberWithImage[] = [
  {
    id: 101,
    name: "Jenny Wilson",
    role: "Technical Specialist",
    image: "/assets/images/team/team-07.webp",
  },
  {
    id: 102,
    name: "John Due",
    role: "Chief Financial Officer",
    image: "/assets/images/team/team-08.webp",
  },
  {
    id: 103,
    name: "Joo Bieden",
    role: "Hiring Manager",
    image: "/assets/images/team/team-09.webp",
  },
  {
    id: 104,
    name: "Brooklyn Simmons",
    role: "Admin",
    image: "/assets/images/team/team-01.webp",
  },
  {
    id: 105,
    name: "Ronald Richards",
    role: "Delivery Head",
    image: "/assets/images/team/team-02.webp",
  },
  {
    id: 106,
    name: "Bessie Cooper",
    role: "Chief Financial Officer",
    image: "/assets/images/team/team-03.webp",
  },
  {
    id: 107,
    name: "Eleanor Pena",
    role: "Project Manager",
    image: "/assets/images/team/team-04.webp",
  },
  {
    id: 108,
    name: "Jacob Jones",
    role: "Delivery Manager",
    image: "/assets/images/team/team-05.webp",
  },
];

export const teamMembersHoverBottom: TeamMemberWithSocial[] = [
  {
    id: 201,
    name: "Mia Walker",
    role: "Depertment Head",
    image: "/assets/images/team/team-05.webp",
    socialLinks: [
      { href: "#", iconClassName: "fab fa-facebook-f" },
      { href: "#", iconClassName: "fab fa-linkedin-in" },
      { href: "#", iconClassName: "fab fa-twitter" },
    ],
  },
  {
    id: 202,
    name: "Sarah Johnson",
    role: "Depertment Head",
    image: "/assets/images/team/team-09.webp",
    socialLinks: [
      { href: "#", iconClassName: "fab fa-facebook-f" },
      { href: "#", iconClassName: "fab fa-linkedin-in" },
      { href: "#", iconClassName: "fab fa-twitter" },
    ],
  },
  {
    id: 203,
    name: "David Williams",
    role: "Depertment Head",
    image: "/assets/images/team/team-03.webp",
    socialLinks: [
      { href: "#", iconClassName: "fab fa-facebook-f" },
      { href: "#", iconClassName: "fab fa-linkedin-in" },
      { href: "#", iconClassName: "fab fa-twitter" },
    ],
  },
  {
    id: 204,
    name: "Emma Martinez",
    role: "Depertment Head",
    image: "/assets/images/team/team-07.webp",
    socialLinks: [
      { href: "#", iconClassName: "fab fa-facebook-f" },
      { href: "#", iconClassName: "fab fa-linkedin-in" },
      { href: "#", iconClassName: "fab fa-twitter" },
    ],
  },
];

export const teamMembersGradient: GradientTeamMember[] = [
  {
    id: 301,
    name: "Ethan Harris",
    subtitle: "Sales Manager",
    role: "Sales Manager",
    location: "CO Miego, AD,USA",
    description:
      "Yes, I am a Depertment Teacher. I have a passion for learning system.",
    image: "/assets/images/team/team-01.webp",
    socialLinks: [
      { href: "https://www.facebook.com/", iconClassName: "fa-brands fa-facebook" },
      { href: "https://www.twitter.com", iconClassName: "fa-brands fa-tiktok" },
      { href: "https://www.instagram.com/", iconClassName: "fa-brands fa-instagram" },
    ],
  },
  {
    id: 302,
    name: "Isabella Clark",
    role: "UX/UI Designer",
    subtitle: "UX/UI Designer",
    location: "CO Miego, AD,USA",
    description:
      "Yes, I am a Depertment Teacher. I have a passion for learning system.",
    image: "/assets/images/team/team-02.webp",
    socialLinks: [
      { href: "https://www.facebook.com/", iconClassName: "fa-brands fa-facebook" },
      { href: "https://www.twitter.com", iconClassName: "fa-brands fa-tiktok" },
      { href: "https://www.instagram.com/", iconClassName: "fa-brands fa-instagram" },
    ],
  },
  {
    id: 303,
    name: "James Taylor",
    role: "Business Consultantr",
    subtitle: "Business Consultantr",
    location: "CO Miego, AD,USA",
    description:
      "Yes, I am a Depertment Teacher. I have a passion for learning system.",
    image: "/assets/images/team/team-03.webp",
    socialLinks: [
      { href: "https://www.facebook.com/", iconClassName: "fa-brands fa-facebook" },
      { href: "https://www.twitter.com", iconClassName: "fa-brands fa-tiktok" },
      { href: "https://www.instagram.com/", iconClassName: "fa-brands fa-instagram" },
    ],
  },
];
