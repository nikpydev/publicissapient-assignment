import "./homepage.styles.scss";
import React, { useState } from "react";
import Heading from "../../components/heading/heading.component";
import Filter from "../../components/filter/filter.component";
import SpaceProgramsDetails from "../../components/space-programs-details/space-programs-details.component";
import QueryParamsContext from "../../providers/query-params/query-params.provider";
import { QueryParams } from "../../typescript-interfaces/query-params.interface";

const Homepage = () => {
  const [queryParams, setQueryParams] = useState<QueryParams>({
    launchYear: "",
    launchSuccess: "",
    landSuccess: "",
  });
  const value = { queryParams, setQueryParams };

  return (
    <div className={"homepage"}>
      <QueryParamsContext.Provider value={value}>
        <Heading />
        <Filter />
        <SpaceProgramsDetails />
      </QueryParamsContext.Provider>
    </div>
  );
};

export default Homepage;
