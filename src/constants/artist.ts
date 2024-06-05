import { images } from "./images";

interface Artist {
  profilePicture: string;
  name: string;
  username: string;
  postImage: string;
}
export const artist: Artist[] = [
  {
    profilePicture: images.anastasia,
    name: "Thomad Edward",
    username: "@thewildwithyou",
    postImage: images.katrina,
  },
  {
    profilePicture: images.andrea,
    name: "Chris Doe",
    username: "@thewildwithyou",
    postImage: images.genero,
  },
  {
    profilePicture: images.antoni,
    name: "Emilia Jones",
    username: "@thewildwithyou",
    postImage: images.pixabay,
  },
  {
    profilePicture: images.antoni2,
    name: "Jessica Williams",
    username: "@thewildwithyou",
    postImage: images.steve,
  },
  {
    profilePicture: images.anastasia,
    name: "Robert Dart",
    username: "@thewildwithyou",
    postImage: images.fiona,
  },
];
