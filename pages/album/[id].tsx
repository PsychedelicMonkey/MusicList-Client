import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
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

      <img src={album.images[0].uri} alt="" />
      <h1>{album.title}</h1>
      <h3>{album.artists[0].name}</h3>
      <h3>{album.year}</h3>
      <p>{album.genres.join(', ')}</p>
      <p>{album.styles.join(', ')}</p>

      <table>
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
