import netflix from "../assets/netflix-image.jpg";
import SavedShows from "../components/SavedShows/SavedShows";

export default function Account() {
  return (
    <>
      <div className="w-full text-white">
        <img className="w-full h-[400px] object-cover" src={netflix} alt="/" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold ">My Favorites</h1>
          </div>
        </div>
      </div>
      <SavedShows />
    </>
  );
}
