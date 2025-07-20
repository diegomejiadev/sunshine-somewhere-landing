interface IContactCategoryItem {
  key: string;
  children: IContactItem[];
  label: string;
  paragraphLabel: string;
}

interface IContactItem {
  href: string;
  key: string;
  label: string;
  shortIntro: string | null;
  //   value: string;
  // icon: string;
}

export const CONTACT_US_ITEMS: IContactCategoryItem[] = [
  {
    key: "email",
    label: "Email",
    paragraphLabel: "Your questions and inquiries are just an email away.",
    children: [
      {
        key: "main-email",
        label: "rentals@sunshinesomewhere.com",
        href: "mailto:rentals@sunshinesomewhere.com",
        shortIntro: "Email",
        // icon:
      },
    ],
  },
  {
    key: "phone",
    label: "Phone",
    paragraphLabel: "Give us a call and we'll help you in no time.",
    children: [
      {
        key: "phone-1",
        href: "tel:+12397885532",
        label: "(239) 788-5532",
        shortIntro: "Phone",
      },
    ],
  },
  {
    key: "social-networks",
    label: "Social Networks",
    paragraphLabel: "Give us a call and we'll help you in no time.",
    children: [
      {
        key: "twitter",
        href: "/",
        label: "X (Twitter)",
        shortIntro: null,
      },
      {
        key: "facebook",
        href: "/",
        label: "Facebook",
        shortIntro: null,
      },
      {
        key: "instagram",
        href: "/",
        label: "Instagram",
        shortIntro: null,
      },
    ],
  },
  // {
  //   key: "address",
  //   label: "Addresses",
  //   paragraphLabel: "Give us a call and we'll help you in no time.",
  //   children: [
  //     {
  //       key: "address-1",
  //       href: "/",
  //       label: "20791 Three Oaks Parkway #859, Estero Florida 33929 USA",
  //       shortIntro: null,
  //     },
  //   ],
  // },
];
