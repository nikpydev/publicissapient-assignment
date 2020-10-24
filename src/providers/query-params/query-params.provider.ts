import { createContext } from "react";
import { QueryParams } from "../../typescript-interfaces/query-params.interface";

const QueryParamsContext = createContext<{
  queryParams: QueryParams;
  setQueryParams: Function;
}>({
  queryParams: {
    launchYear: "",
    launchSuccess: "",
    landSuccess: "",
  },
  setQueryParams: () => {},
});

export default QueryParamsContext;
