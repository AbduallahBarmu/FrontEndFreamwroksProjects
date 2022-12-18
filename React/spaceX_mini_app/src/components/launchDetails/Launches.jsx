import React from "react";
import { useHistory, useParams } from "react-router";
import "./style.css";

import gql from "graphql-tag";
import { Query } from "react-apollo";


const Launches = () => {
  const { id } = useParams();

  // Define launches Query
  const GET_LAUNCHES = gql`
  {
    launch(id: ${id}) {
      mission_name  
      links {
        flickr_images
        article_link
        video_link
        wikipedia
      }  
      launch_date_utc
      id
      details
      launch_year
      launch_success
      rocket {
        rocket_name 
      }
      launch_site {
        site_name
      }
    }
  }
  
  `;

  const history = useHistory();

  function handelHomeButton() {
    return history.goBack();
  }

  function renderLaunch(launch) {
    if (!launch.links.flickr_images.length) {
      return null; // in case there is no Image will redirect into 404 page
    }

    return (
      <>
        <div className="container">
          <div className="row">
            <header className="header"> Launch Details </header>
            <section className="info-form">
              <h5>Launch Name:</h5>
              <span key={launch.id}>{launch.launch_site.site_name} </span>
              <h5>Launch Date:</h5>
              <span>{launch.launch_date_utc}</span>
              <h5>launch year: </h5>
              <span>{launch.launch_year} </span>
              <h5>Details: </h5>
              <p>{launch.details} </p>
              <h5> Rocket Name: </h5>
              <span> {launch.rocket.rocket_name}</span>
              <h5> Site Name: </h5>
              <span>{launch.launch_site.site_name}</span>
            </section>
          </div>

          <section className="gallery ">
            {launch.links.flickr_images.map((img) => (
              <img className="card-img" src={img} alt="" />
            ))}
          </section>

          <section className="links">
            <a
              href={launch.links.article_link}
              target="_blank"
              rel="noreferrer"
            >
              Article link
            </a>
            <a href={launch.links.video_link} target="_blank" rel="noreferrer">
              video link
            </a>
            <a href={launch.links.wikipedia} target="_blank" rel="noreferrer">
              wikipedia Linke
            </a>
            <br />
            <button className="btn" onClick={handelHomeButton}>
              Back Home
            </button>
          </section>
        </div>
      </>
    );
  }

  return (
    <Query query={GET_LAUNCHES}>
      {({ loading, data }) => {
        // console.log(data);
        return (
          !loading && (
            <div>
              <div>{renderLaunch(data.launch)}</div>
            </div>
          )
        );
      }}
    </Query>
  );
};

export default Launches;
