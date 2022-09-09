import Link from 'next/link';

type Props = {
  album: Album;
};

const AlbumCard = ({ album }: Props) => {
  return (
    <Link href={`/album/${album._id}`}>
      <a className="album">
        <div className="album-wrap">
          <figure className="album-art">
            <img src={album.images[0].uri} alt="" />
          </figure>

          <div className="text">
            <h3>{album.title}</h3>
            <h4>{album.year}</h4>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default AlbumCard;
