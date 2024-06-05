import { images } from "./images";

const postActions = [
  {
    icon: images.heart1,
    label: "9.8k",
  },
  {
    icon: images.comment,
    label: "8.6k",
  },
  {
    icon: images.share,
    label: "7.2k",
  },
];

export const posts = [
  {
    profilePicture: images.ali,
    username: "Lara Leones",
    handle: "@thewallart",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    postPicture: images.muleba,
    actions: postActions,
  },
  {
    profilePicture: images.imag,
    username: "Thomas J.",
    handle: "@thecustomcreator",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    postPicture: images.tobias,
    actions: postActions,
  },
];