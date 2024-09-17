import "./index.scss";

function Profile(user) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // 'en
  }
  return (
    <div className="profile-user" key={user.id}>
      <img src={user.picture.thumbnail} />
      <h3>
        Name: <span>{user.name.first}</span>
      </h3>
      <h3>
        Gender: <span>{user.gender}</span>
      </h3>
      <h3>
        DoB: <span>{formatDate(user.dob.date)}</span>
      </h3>
      <h3>
        Role: <span>{user.seed}</span>
      </h3>
    </div>
  );
}

export default Profile;
