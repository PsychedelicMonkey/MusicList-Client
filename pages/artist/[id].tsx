import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import api from '../../lib/api';
import AlbumCard from '../../components/AlbumCard';
import IconList from '../../components/IconList';

type Props = {
  artist: Artist;
  albums: Array<Album>;
};

const Artist: NextPage<Props> = ({ artist, albums }) => {
  console.log(albums);

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

      <section className="albums-cards">
        {albums.map((album, index) => (
          <AlbumCard key={index} album={album} />
        ))}
      </section>

      {/* <div className="artist-gallery">
        {artist.images.map((img, index) => (
          <div key={index}>
            <img src={img.uri} alt="" width={img.width} height={img.height} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await Promise.all([
    api.get(`/artist/${ctx.params?.id}`),
    api.get(`/artist/${ctx.params?.id}/albums`),
  ]);

  return {
    props: { artist: res[0].data, albums: res[1].data },
  };
};

export default Artist;
