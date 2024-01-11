import './card.css';
import timeFormat from '../../../utils/dateFormating';
import calculateReadTime from '../../../utils/timeReadCalc';

export default function Card({ post }) {
  const date = timeFormat(post?.createdAt);
  const readTime = calculateReadTime(post?.content);

  return (
    <div className="card-container">
      <div className="card-top">
        <p className="ofauthor">
          de
          {' '}
          {post?.author}
        </p>
        <p className="timeread">
          { readTime }
          {' '}
          min read
        </p>
      </div>
      <div
        className="card"
        style={{
          backgroundImage: `url(${post?.banner})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="top">
          { post?.tags.map((keyword) => (
            <p>
              #
              {keyword}
            </p>
          ))}
        </div>
        <div className="bottom">
          <p>
            {' '}
            { post?.subtitle }
            {' '}
          </p>
        </div>
      </div>
      <div className="card-bottom">
        <h1>
          {' '}
          { post?.title }
          {' '}
        </h1>
        <p>
          {' '}
          { date }
          {' '}
        </p>
      </div>

    </div>
  );
}
