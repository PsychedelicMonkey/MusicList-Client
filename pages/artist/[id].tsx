import { GetServerSideProps, NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBandcamp,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';
import React from 'react';
import api from '../../lib/api';

type Props = {
  artist: Artist;
};

const Artist: NextPage<Props> = ({ artist }) => {
  console.log(artist);

  return (
    <div className="container">
      <Head>
        <title>{artist.name} - MusicList</title>
      </Head>

      <img src={artist.images[0].uri} alt="" />
      <h1>{artist.name}</h1>
      <p>{artist.profile}</p>

      <ul>
        {artist.members.map((member, index) =>
          member.active ? <li key={index}>{member.name}</li> : null
        )}
      </ul>

      <div>
        <h3>Links</h3>
        <ul>
          {artist.urls.map((url, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faBandcamp} />
              {url}
            </li>
          ))}
        </ul>
      </div>

      <div className="artist-gallery">
        {artist.images.map((img, index) => (
          <div key={index}>
            <img src={img.uri} alt="" width={img.width} height={img.height} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await api.get(`/artist/${ctx.params?.id}`);

  return {
    props: { artist: res.data },
  };
};

export default Artist;
