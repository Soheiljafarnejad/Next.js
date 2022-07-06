import axios from "axios";

export default function Home({ userList }) {
  return (
    <div>
      <h2>home page</h2>
      <ul>
        {userList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return {
    props: {
      userList: data.slice(1, 10),
    },
  };
}
