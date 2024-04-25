import '../../styles/Article.css';

export const Article = ({ name, poster, tag, title, description, avatar }) => {
  return (
    <div className="container">
      <h2 className="name">{name}</h2>
      <img className="photo" src={poster} alt={tag} />
      <p className="title">{title}</p>

      <img className="avatar" src={avatar} alt={tag} />
      <p className="descr">{description}</p>
    </div>
  );
};
