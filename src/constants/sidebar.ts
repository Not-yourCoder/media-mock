import { images } from "./images";
interface Sidebar {
  icon: string;
  label: string;
}
export const sidebar: Sidebar[] = [
  {
    icon: images.home,
    label: "home",
  },
  {
    icon: images.notification,
    label: "notifications",
  },
  {
    icon: images.heart4,
    label: "shop",
  },
  {
    icon: images.message,
    label: "conversation",
  },
  {
    icon: images.wallet,
    label: "wallet",
  },
  {
    icon: images.favourite,
    label: "subscription",
  },
  {
    icon: images.profile,
    label: "my profile",
  },
  {
    icon: images.setting,
    label: "settings",
  },
];
