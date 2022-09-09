type Album = {
  _id: string;
  artists: Array<Artist>;
  genres: Array<string>;
  images: [{ uri: string }];
  styles: Array<string>;
  title: string;
  tracklist: [{ duration: string; title: string }];
  year: number;
};

type Artist = {
  _id: string;
  name: string;
  images: [{ height: number; width: number; uri: string }];
  members: [{ active: boolean; name: string }];
  profile: string;
  urls: Array<string>;
};
