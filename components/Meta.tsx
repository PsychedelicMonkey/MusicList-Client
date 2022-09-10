import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  image?: string;
  title: string;
  type?: string;
};

const Meta = ({ image, title, type }: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title ? `${title} - MusicList` : 'MusicList'}</title>
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={router.asPath} />
      </Head>
    </>
  );
};

export default Meta;
