import React from "react";

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));

  const isLoggedIn = props.isLoggedIn;
  let classNameCss = "";
  if (isLoggedIn) {
    classNameCss = "scale-transition scale-in scale-out ";
    return (
      <div className={classNameCss}>
        {/* {sidebar}
      <hr /> */}
        {content}
      </div>
    );
  } else {
    classNameCss = "scale-transition ";
    return <div className={classNameCss}>{sidebar}</div>;
  }
}

export default Blog;
