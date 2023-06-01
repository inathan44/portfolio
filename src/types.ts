export type Details = {
  image: string;
  about: string;
  links: Links;
  technologies: Technologies[];
  name: string;
};

export type Links = {
  site: string;
  repo: string;
};

export type Stack = {
  technologies: Technologies[];
};

export type Technologies = { name: string; image: string };

export type ProjectInfo = {
  quicktype: Details;
  lunchbuddy: Details;
  plantsco: Details;
};
