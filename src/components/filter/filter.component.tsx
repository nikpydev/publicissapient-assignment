import "./filter.styles.scss";
import React, { useContext } from "react";
import QueryParamsContext from "../../providers/query-params/query-params.provider";

const Filter = () => {
  const { queryParams, setQueryParams } = useContext(QueryParamsContext);

  const handleSetYear = (year: number) => {
    setQueryParams({ ...queryParams, launchYear: year });
  };

  const handleChangeSuccessfulLaunch = (value: boolean) => {
    setQueryParams({ ...queryParams, launchSuccess: value });
  };

  const handleChangeSuccessfulLanding = (value: boolean) => {
    setQueryParams({ ...queryParams, landSuccess: value });
  };

  return (
    <div className={"filter rounded"}>
      <h4 className={"heading-1 m-2"}>Filters</h4>
      <h5 className={"text-center"}>Launch Year</h5>
      <hr />
      <div className="row">
        <div className="col-6 text-center">
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2006);
            }}
          >
            2006
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2008);
            }}
          >
            2008
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2010);
            }}
          >
            2010
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2012);
            }}
          >
            2012
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2014);
            }}
          >
            2014
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2016);
            }}
          >
            2016
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2018);
            }}
          >
            2018
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2020);
            }}
          >
            2020
          </button>
        </div>

        <div className="col-6 text-center">
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2007);
            }}
          >
            2007
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2009);
            }}
          >
            2009
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2011);
            }}
          >
            2011
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2013);
            }}
          >
            2013
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2015);
            }}
          >
            2015
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2017);
            }}
          >
            2017
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleSetYear(2019);
            }}
          >
            2019
          </button>
        </div>
      </div>
      <br />
      <h5 className="text-center">Successful Launch</h5>
      <hr />
      <div className="row">
        <div className="col-6 text-center">
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleChangeSuccessfulLaunch(true);
            }}
          >
            True
          </button>
        </div>
        <div className="col-6 text-center">
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleChangeSuccessfulLaunch(false);
            }}
          >
            False
          </button>
        </div>
      </div>
      <br />
      <h5 className="text-center">Successful Landing</h5>
      <hr />
      <div className="row">
        <div className="col-6 text-center">
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleChangeSuccessfulLanding(true);
            }}
          >
            True
          </button>
        </div>
        <div className="col-6 text-center">
          <button
            className="btn btn-success m-3"
            onClick={() => {
              handleChangeSuccessfulLanding(false);
            }}
          >
            False
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
