import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Meta from '../components/Meta';
import api from '../lib/api';

type Props = {
  results: [
    {
      id: number;
      thumb: string;
      title: string;
    }
  ];
};

const Results: NextPage<Props> = ({ results }) => {
  const { query } = useRouter().query;

  return (
    <div className="container">
      <Meta title="" />

      <h1>Albums matching {query}</h1>

      <table>
        <tbody>
          {results.map((album, index) => (
            <tr key={index}>
              <td>
                <img src={album.thumb} alt="" />
              </td>
              <td>{album.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx.query;
  const res = await api.post('/search/albums', JSON.stringify({ query }));

  return {
    props: { results: res.data.results },
  };
};

export default Results;
