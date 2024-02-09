export type BreadcrumbItem =
  | string
  | {
      href: string | undefined;
      title: string;
      disabled?: boolean;
    };
