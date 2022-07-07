const User = ({ user }) => {
  return (
    <li>
      <span>
        {user.id} - {user.name}
      </span>
    </li>
  );
};

export default User;
