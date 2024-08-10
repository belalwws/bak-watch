import React from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { Aimes } from "../Data/MovieData";
import MovieInfo from "../Components/Home/Single/MovieInfo";
import MovieCasts from "../Components/Home/Single/MovieCasts";
import MovieRates from "../Components/Home/Single/MovieRates";
import Titles from "../Components/Titles";
import { BsCollectionFill } from "react-icons/bs";
import Movie from "../Components/Movie";

const NewAnime = () => {
  const { id } = useParams();
  const Aime = Aimes.find((Aime) => Aime.name === id);
  const RealtedMovies = Aimes.filter((m) => m.category === Aime.category);
  return (
    <Layout>
      <MovieInfo Aime={Aime} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCasts />
        <MovieRates Aime={Aime} />
        <div className="mt-16">
          <Titles title="related movie " Icon={BsCollectionFill} />
          <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6 ">
            {RealtedMovies.map((Aime, index) => (
              <Aime key={index} Aime={Aime} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewAnime;
