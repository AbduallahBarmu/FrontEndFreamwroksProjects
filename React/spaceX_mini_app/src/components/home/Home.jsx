import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import gql from "graphql-tag";
import { Query } from "react-apollo";


const Home = () => {
  // Define query
  const GET_LAUNCHES = gql`
    {
      launchesPast(limit: 108) {
        links {
          flickr_images
          article_link
          video_link
          wikipedia
        }
        id
        launch_site {
          site_name
        }
        launch_date_utc
        ships {
          name
          image
        }
        launch_success
        launch_year
      }
    }
  `;

  // method to handel rendering part
  function renderLaunch(launch) {
    if (!launch.links.flickr_images.length) {
      return null; // in case there is No image 
    }
    return (
      <section>
        <Link to={`launches/${launch.id}`}>
          <img alt="" src={launch.links.flickr_images[0]} />
          {/* return only the first image */}
        </Link>
      </section>
    );
  }

  return (
    <Query query={GET_LAUNCHES}>  
      {({ loading, data }) => {
        // console.log(data);
        return (
          !loading && (
            <div className="container">
              <div className="row">
                <header className="header"> Some spaceX Launches </header>
                <div className="home-gallery">
                  {data.launchesPast.map((launch) => renderLaunch(launch))}
                </div>
                <Footer />
              </div>
            </div>
          )
        );
      }}
    </Query>
  );
};

export default Home;
