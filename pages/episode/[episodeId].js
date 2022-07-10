import axios from "axios";

const Episode = ({ episode }) => {
  return (
    <div>
      {episode.id} / name :{episode.name} - date: {episode.air_date}
    </div>
  );
};

export default Episode;

export async function getStaticPaths() {
  
  // const { data } = await axios.get(`https://rickandmortyapi.com/api/episode`);
  // const paths = data.results.map((item) => {
  //   return { params: { episodeId: item.id.toString() } };
  // });

  return {
    paths: [
      { params: { episodeId: "1" } },
      { params: { episodeId: "2" } },
      { params: { episodeId: "3" } },
      { params: { episodeId: "4" } },
    ],
    fallback: "blocking", //such as "fallback:true" but without loading...
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${params.episodeId}`);
  return {
    props: {
      episode: data,
    },
  };
}
