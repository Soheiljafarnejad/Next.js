import axios from "axios";
import Link from "next/link";
import User from "../../components/User";

export default function UserPage({ userList }) {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userList.map((user) => {
          return <User user={user} key={user.id} />;
        })}
      </ul>
      <Link href="/">
        <a>back to home page !</a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return {
    props: {
      userList: data.results,
    },
  };
}
