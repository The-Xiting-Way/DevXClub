export type NavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: IconKeys;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type Navigation = {
  data: NavItem[];
};
