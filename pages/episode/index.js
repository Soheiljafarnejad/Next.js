import axios from "axios";
import Link from "next/link";

export default function EpisodePage({ episodeList }) {
  return (
    <div>
      <h1>Episode List</h1>
      <ul>
        {episodeList.map((episode) => {
          return (
            <li key={episode.id} className="border-b border-gray-400 py-2">
              <Link href={`/episode/${episode.id}`}>
                <a>
                  {episode.id} - {episode.episode} / {episode.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href="/">
        <a>back to home page !</a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
  return {
    props: {
      episodeList: data.results,
    },
  };
}
