type Album = {
  artists: [{ name: string }];
  genres: Array<string>;
  images: [{ uri: string }];
  styles: Array<string>;
  title: string;
  tracklist: [{ duration: string; title: string }];
  year: number;
};
