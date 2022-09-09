import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import api from '../../lib/api';
import IconList from '../../components/IconList';

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

      <header className="artist-header">
        <div className="artist-img">
          <img src={artist.images[0].uri} alt="" />
        </div>

        <h1>{artist.name}</h1>

        <div className="artist-profile">
          <p className="artist-description">{artist.profile}</p>

          {artist.members.length > 0 ? (
            <div className="active-members">
              <h3>Active Members</h3>

              <ul>
                {artist.members.map((member, index) =>
                  member.active ? <li key={index}>{member.name}</li> : null
                )}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="artist-links">
          <IconList urls={artist.urls} />
        </div>
      </header>

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
