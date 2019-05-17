import React from "react";

export function formatDate(date) {
  return date.toLocaleDateString();
}

export function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

export function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

export function Comment(props) {
  return (
    <div className="Comment card blue-grey darken-1  white-text">
      <div className="card-title">
        <UserInfo user={props.author} />
      </div>
      <div className="Comment-text card-content">{props.text}</div>
      <div className="Comment-date card-action">{formatDate(props.date)}</div>
    </div>
  );
}
// <div class="row">
//   <div class="col s12 m6">
//     <div class="card blue-grey darken-1">
//       <div class="card-content white-text">
//         <span class="card-title">Card Title</span>
//         <p>
//           I am a very simple card. I am good at containing small bits of
//           information. I am convenient because I require little markup to
//           use effectively.
//         </p>
//       </div>
//       <div class="card-action">
//         <a href="#">This is a link</a>
//         <a href="#">This is a link</a>
//       </div>
//     </div>
//   </div>
// </div>;

// ReactDOM.render(
//   <Comment date={comment.date} text={comment.text} author={comment.author} />,
//   document.getElementById("root")
// );
