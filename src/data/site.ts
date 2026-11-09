export type SiteLink = {
  label: string;
  href: string;
};

export const site = {
  name: "AshGrey",
  lede: "I make interesting things",

  // The links row is built to grow horizontally; add as many as you like.
  links: [
    { label: "GitHub", href: "https://github.com/meashgrey" },
    { label: "Email", href: "mailto:ashgrey.huaier@gmail.com" },
  ] satisfies SiteLink[],
} as const;
