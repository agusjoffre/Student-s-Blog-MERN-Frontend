/* eslint-disable no-underscore-dangle */
import './blogSection.css';
import useAPI from '../../../hooks/useAPI';
import { URL_API } from '../../../utils/constants';
import Card from './Card';
import Loading from '../../Loading/Loading';

export default function BlogSection({ from }) {
  const { data, isLoading } = useAPI(`${URL_API}/posts`);

  return (
    <div className="blog-section">
      <div className="blog-section-top">
        <h2>
          Posteos
          {' '}
          <strong>{from}</strong>
        </h2>
      </div>
      <div className="card-allcontainer">
        { isLoading
          ? (
            <Loading />
          )
          : data.map((post) => {
            const id = post._id;
            return <Card key={id} post={post} />;
          }) }
      </div>
    </div>

  );
}
