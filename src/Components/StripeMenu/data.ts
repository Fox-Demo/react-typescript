export interface Link {
  title: string;
  subLinks: string[];
  offset: number;
}

export const links = [
  {
    title: "Products",
    subLinks: ["Payment", "Terminal", "Connect"],
    offset: 680,
  },
  {
    title: "Developers",
    subLinks: ["Help", "Billing", "Libraries", "Plugins"],
    offset: 850,
  },
  {
    title: "Company",
    subLinks: ["About", "Customers"],
    offset: 1040,
  },
];
