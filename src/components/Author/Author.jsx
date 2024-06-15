import './Author.css';

const Author = ({ authorName, authorLink }) => {
  return (
    <div className="author">
      <p>
        Made with <strong>love</strong> by{' '}
        <a
          target="_blank"
          href={authorLink}
        >
          {authorName}
        </a>
      </p>
    </div>
  );
};

export { Author };
