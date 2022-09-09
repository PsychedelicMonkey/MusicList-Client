import { useAppSelector } from '../../app/hooks';
import { selectResults } from './searchSlice';

const ResultsTable = () => {
  const results = useAppSelector(selectResults);

  return (
    <div>
      {results.length > 0 ? (
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
      ) : null}
    </div>
  );
};

export default ResultsTable;
