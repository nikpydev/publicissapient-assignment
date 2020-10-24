import "./space-programs-details.styles.scss";
import React, { useContext, useEffect, useState } from "react";
import Card from "../card/card.component";
import axios from "axios";
import { LaunchDetails } from "../../typescript-interfaces/launch-details";
import QueryParamsContext from "../../providers/query-params/query-params.provider";

const SpaceProgramsDetails = () => {
  const [launchDetailsList, setLaunchDetailsList] = useState<
    Array<LaunchDetails>
  >([]);

  const { queryParams, setQueryParams } = useContext(QueryParamsContext);
  const { launchYear, launchSuccess, landSuccess } = queryParams;

  useEffect(() => {
    console.log("useEffect: SpaceProgramDetails");
    
    let url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchSuccess}&land_success=${landSuccess}&launch_year=${launchYear}`;

    axios({
      method: "GET",
      url,
    })
      .then((response) => {
        console.log("response: ", response.data);

        setLaunchDetailsList([]);
        response.data.forEach((item: any) => {
          const {
            flight_number,
            mission_id,
            mission_name,
            launch_success,
            launch_year,
          } = item;

          setLaunchDetailsList((prevState) => {
            return [
              ...prevState,
              {
                flight_number,
                mission_id,
                mission_name,
                landing_intent: item.rocket.first_stage.cores[0].landing_intent,
                launch_success,
                launch_year,
                image_url: item.links.mission_patch_small,
              },
            ];
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [landSuccess, launchSuccess, launchYear]);

  return (
    <div className={"space-programs-details"}>
      {launchDetailsList.map((item, index) => {
        const {
          flight_number,
          mission_id,
          mission_name,
          landing_intent,
          launch_success,
          launch_year,
          image_url,
        } = item;
        return (
          <div key={index}>
            <Card
              flight_number={flight_number}
              mission_id={mission_id}
              mission_name={mission_name}
              landing_intent={landing_intent}
              launch_success={launch_success}
              launch_year={launch_year}
              image_url={image_url}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SpaceProgramsDetails;
