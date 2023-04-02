import React from "react";
import CatCard from "../../components/CatCard/CatCard";
import Featured from "../../components/featured/Featured";
import Features from "../../components/Features/Features";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Slide from "../../components/Slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import { cards, projects } from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <Features />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
