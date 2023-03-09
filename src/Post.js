export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/018/779/611/medium/alena-aenami-away-1k.jpg?1560704311"
          alt=""
        />
      </div>

      <div className="texts">
        <h2>Alway in Silence</h2>
        <p className="info">
          <a className="author">Lee Duck</a>
          <time>2023-03-02 8:03</time>
        </p>
        <p className="summary">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
      </div>
    </div>
  );
}
