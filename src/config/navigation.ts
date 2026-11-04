
export type NavigationItem = {
  href: `#${string}`;
  label: string;
};

export const mainNavigation: NavigationItem[] = [
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#bao-gia", label: "Báo giá trước" },
  { href: "#doi-xe", label: "Đội xe" },
  { href: "#khu-vuc", label: "Khu vực phục vụ" },
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#hoi-dap", label: "Hỏi đáp" },
];
