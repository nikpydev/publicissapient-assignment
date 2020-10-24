import "./card.styles.scss";
import React from "react";
import { LaunchDetails } from "../../typescript-interfaces/launch-details";

const Card: React.FC<LaunchDetails> = ({
  flight_number,
  mission_id,
  mission_name,
  landing_intent,
  launch_success,
  launch_year,
  image_url
}) => {
  return (
    <div className={"card-component m-2"}>
      <div className="card p-3">
        <img
        style={{backgroundColor: "#ddd"}}
          src={image_url}
          alt="spaceship"
          className={"card-img-top"}
        />
        <div className="card-body">
          <h5 className="card-title">
            {mission_name} #{flight_number}
          </h5>
          <div className="card-text heading-3">
            Mission Ids:
            {mission_id.map((id, index) => {
              return (
                <p
                  key={index}
                  style={{ textIndent: "10px", fontWeight: "lighter" }}
                >
                  &#9679; {id}
                </p>
              );
            })}
          </div>
          <p className="card-text heading-3">Launch Year: {launch_year}</p>
          <div className="card-text heading-3">
            Successful Launch: {launch_success?.toString()}
          </div>

          <p className="card-text heading-3">
            Successful Landing: {landing_intent?.toString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
