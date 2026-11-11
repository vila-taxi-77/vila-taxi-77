
export type FleetFeatureIcon = "seats" | "battery" | "quiet" | "cool";

export type FleetFeature = {
  title: string;
  description: string;
  icon: FleetFeatureIcon;
};

export const fleetFeatures: FleetFeature[] = [
  { title: "5 chỗ ngồi", description: "Thoải mái cho gia đình nhỏ", icon: "seats" },
  { title: "100% xe điện", description: "Không khói xăng, không mùi", icon: "battery" },
  { title: "Êm ái", description: "Hạn chế tiếng ồn động cơ", icon: "quiet" },
  { title: "Điều hòa mát", description: "Dễ chịu trên mọi cung đường", icon: "cool" },
];
