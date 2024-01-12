/* eslint-disable react/no-danger */
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DOMPurify from 'dompurify';
import useAPI from '../../hooks/useAPI';
import { URL_API } from '../../utils/constants';
import './post.css';

export default function Post() {
  const { id } = useParams();
  const { getOneData, isLoading, data } = useAPI(`${URL_API}/posts`);

  useEffect(() => {
    getOneData(id);
  }, [data]);

  const purifiedContent = DOMPurify.sanitize(data?.content);

  return (
    <div className="post-container">
      { isLoading ? (
        <p
          style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--secondary-color)' }}
        >
          Cargando...
        </p>
      ) : (
        <>
          <div
            className="banner-container"
            style={{
              backgroundImage: `url(${data?.banner})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          <section>
            <div className="header">
              <h1>{ data?.title }</h1>
              <div className="bottom">
                <h2>{ data?.subtitle }</h2>
                <h3>
                  de
                  {' '}
                  { data?.author }
                </h3>
              </div>
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: purifiedContent }} />
            <div className="footer">
              <p>
                Palabras clave:
                {' '}
                { data && data.tags && Array.isArray(data.tags) ? data.tags.map((tag) => `#${tag} `) : null }

              </p>
              <p>
                Fuentes:
                {' '}
                {data && data.links && Array.isArray(data.links) ? data.links.map((link) => (
                  <a
                    key={link}
                    href={link.startsWith('http') ? link : `https://${link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link}
                    {' '}
                  </a>
                )) : null}
              </p>
            </div>
          </section>
        </>
      )}

    </div>
  );
}
