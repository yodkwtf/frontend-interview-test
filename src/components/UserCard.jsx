const UserCard = ({ user }) => {
  const { id, first_name, last_name, email, avatar } = user;

  return (
    <article className="card">
      <div className="user-avatar">
        <img src={avatar} alt={`${first_name} ${last_name}`} />
      </div>
      <div className="user-info">
        <p>id: {id}</p>
        <h3>Name: {`${first_name} ${last_name}`}</h3>
        <p>Email: {email}</p>
      </div>
    </article>
  );
};
export default UserCard;
