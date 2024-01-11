import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImageCircleContainer from './ImageCircleContainer';
import useAPI from '../../../hooks/useAPI';
import { URL_API } from '../../../utils/constants';
import './hero.css';

export default function Hero() {
  const { data, isLoading } = useAPI(`${URL_API}/posts/`);

  const [post, setPost] = useState();

  function getRandomPost() {
    const random = Math.floor(Math.random() * data.length);
    setPost(data[random]);
  }

  useEffect(() => {
    getRandomPost();
    const interval = setInterval(() => {
      getRandomPost();
    }, 25000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <main>
      { isLoading ? (
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <p style={{
            fontSize: '2rem', fontWeight: '600', color: 'var(--secondary-color)',
          }}
          >
            Cargando...
          </p>
        </div>
      ) : (
        <>
          <ImageCircleContainer position="left" image={post?.banner} />
          <div className="container">
            <h1>{ post?.title }</h1>
            <h2>
              de
              {' '}
              { post?.author }
            </h2>
            <p>
              {post?.subtitle}
            </p>
            <div className="cont-bot">
              <Link to={`/posts/${post?._id}`}>
                <button className="btn-nobtn">Seguir leyendo</button>
              </Link>
            </div>
          </div>
          <ImageCircleContainer position="right" image={post?.banner} />
        </>
      )}

    </main>
  );
}
