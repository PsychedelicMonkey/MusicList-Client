import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import api from '../../lib/api';

type Props = {
  album: Album;
};

const Album: NextPage<Props> = ({ album }) => {
  return (
    <div className="container">
      <Head>
        <title>{album.title} - MusicList</title>
      </Head>

      <header className="album-header">
        <div className="album-cover">
          <img src={album.images[0].uri} alt="" />
        </div>

        <div className="album-title">
          <h1>{album.title}</h1>

          <Link href={`/artist/${album.artists[0]._id}`}>
            <a className="artist-name">{album.artists[0].name}</a>
          </Link>

          <h4>{album.year}</h4>
        </div>

        <div className="genres-list">
          <p>{album.genres.join(', ')}</p>
          <p>{album.styles.join(', ')}</p>
        </div>
      </header>

      <table className="track-table">
        <tbody>
          {album.tracklist.map((track, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{track.title}</td>
              <td>{track.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await api.get(`/album/${ctx.params?.id}`);

  return {
    props: { album: res.data },
  };
};

export default Album;
