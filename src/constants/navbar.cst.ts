import { PROPERTIES_LIST } from "./properties.cst";

interface IServiceItem {
  href: string;
  key: string;
  label: string;
  description?: string;
  location?: string;
}

export interface INavItem {
  href: string | null;
  key: string;
  label: string;
  services?: IServiceItem[];
}

export interface IMobileServiceItem {
  href: string | null;
  key: string;
  label: string;
  icon: string;
  children?: IMobileServiceItem[];
}

interface IMobileItem {
  key: string;
  children: IMobileServiceItem[];
  label: string;
}

export const NAV_SERVICES_LINKS: IMobileServiceItem[] = [
  {
    href: "/services/property-management",
    key: "property_management",
    label: "Property Management",
    icon: "/icons/bulb.svg",
  },
  {
    href: "/services/pool-service",
    icon: "/icons/pool.svg",
    key: "pool_service",
    label: "Pool Service",
  },
  {
    href: "/services/cleaning-service",
    icon: "/icons/bucket.svg",
    key: "cleaning_service",
    label: "Cleaning Service",
  },
  {
    href: "/services/pressure-washing",
    icon: "/icons/vacuum.svg",
    key: "pressure_washing",
    label: "Pressure Washing",
  },
  {
    href: "/services/handyman-service",
    icon: "/icons/repair.svg",
    key: "handyman_service",
    label: "Handyman Service",
  },
  {
    icon: "/icons/mower.svg",
    href: "/services/lawn-service",
    key: "lawn_service",
    label: "Lawn Service",
  },
  {
    href: "/services/home-watch",
    icon: "/icons/shield.svg",
    key: "home_watch",
    label: "Home Watch",
  },
];

export const NAV_LINKS: INavItem[] = [
  { href: "/", key: "home", label: "Home" },
  {
    href: null,
    key: "vacation-rentals",
    label: "Vacation Rentals",
    services: PROPERTIES_LIST.map((property) => ({
      location: property.location,
      href: `/rental-properties/${property.slug}`,
      key: property.slug,
      label: property.name,
      description: property.subtitle,
    })),
  },
  {
    href: null,
    key: "our_guide",
    label: "Our Guide",
    services: [
      {
        href: "/our-guide/activities-and-attractions",
        key: "activities_and_attractions",
        label: "Activities and Attractions",
        description:
          "Explore the best activities and attractions in the area. Your adventure starts here.",
      },
      {
        href: "/our-guide/boat-excursions",
        key: "boat_excursions",
        label: "Boat Excursions",
        description:
          "Experience the beauty of the waterways with our exclusive boat excursions.",
      },
      {
        href: "/our-guide/boats-kayak-paddleboard-rentals",
        key: "boats_kayak_paddleboard_rentals",
        label: "Boats, Kayak & Paddleboard Rentals",
        description:
          "How about a day on the water? Rent a boat, kayak, or paddleboard for an unforgettable experience.",
      },
    ],
  },
];

export const MOBILE_NAV_LINKS: IMobileItem[] = [
  {
    key: "main-category",
    label: "SUNSHINE SOMEWHERE",
    children: [
      { href: "/", key: "home", label: "Home", icon: "/icons/house.svg" },

      {
        href: null,
        key: "rental_properties",
        label: "Vacation Rentals",
        icon: "/icons/key.svg",
        children: PROPERTIES_LIST.map((property) => ({
          location: property.location,
          href: `/rental-properties/${property.slug}`,
          key: property.slug,
          label: property.name,
          icon: "",
        })),
      },
      // {
      //   href: "/rental-properties",
      //   key: "activities_and_attractions",
      //   label: "Activities and Attractions",
      //   icon: "/icons/about-us.svg",
      // },
      {
        href: "/about-us",
        key: "about_us",
        label: "About Us",
        icon: "/icons/about-us.svg",
      },
    ],
  },
  {
    key: "our-guide",
    label: "OUR GUIDE",
    children: [
      {
        href: "/our-guide/activities-and-attractions",
        key: "activities_and_attractions",
        label: "Activities and Attractions",
        icon: "/icons/activities.svg",
      },
      {
        href: "/our-guide/boat-excursions",
        key: "area_map",
        label: "Area Map",
        icon: "/icons/boat.svg",
      },
      {
        href: "/our-guide/boats-kayak-paddleboard-rentals",
        key: "weather",
        label: "Weather",
        icon: "/icons/kayak.svg",
      },
    ],
  },
  {
    key: "external_links",
    label: "EXTRA LINKS",
    children: [
      {
        href: "https://www.dpmdominguez.com",
        key: "frequently_asked_questions",
        label: "Dominguez Property Management (DPM)",
        icon: "/icons/dpm.svg",
      },
    ],
  },
  // {
  //   key: "support",
  //   label: "SUPPORT",
  //   children: [
  //     // {
  //     //   href: "/rental-properties",
  //     //   key: "frequently_asked_questions",
  //     //   label: "Frequently Asked Questions",
  //     //   icon: "/icons/about-us.svg",
  //     // },
  //     {
  //       href: "/rental-properties",
  //       key: "privacy_policy",
  //       label: "Contact Us",
  //       icon: "/icons/about-us.svg",
  //     },
  //     {
  //       href: "/rental-properties",
  //       key: "sitemap",
  //       label: "Sitemap",
  //       icon: "/icons/about-us.svg",
  //     },
  //   ],
  // },
  // {
  //   key: "legal_information",
  //   label: "LEGAL INFORMATION",
  //   children: [
  //     {
  //       href: "/rental-properties",
  //       key: "privacy_policy",
  //       label: "Privacy Policy",
  //       icon: "/icons/about-us.svg",
  //     },
  //     {
  //       href: "/rental-properties",
  //       key: "terms_and_conditions",
  //       label: "Terms and Conditions",
  //       icon: "/icons/about-us.svg",
  //     },
  //   ],
  // },
];
