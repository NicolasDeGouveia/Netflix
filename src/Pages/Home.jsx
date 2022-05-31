import Main from "../components/Main/Main";
import Row from "../components/Row/Row";
import requests from "../Requests";

export default function Home() {
  return (
    <div className="">
      <Main />
      <Row rowID="1" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="2" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Family" fetchURL={requests.requestFamily} />
    </div>
  );
}
