import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Chart from "./Chart";
import { getData } from "./utils";
import { TypeChooser } from "react-stockcharts/lib/helper";
import ListTransaction from "./ListTransaction";
import "./index.css";
import "./style/index.scss";
import "antd/dist/antd.css";
import { Select } from "antd";
import Search from "./components/Search";
import CardView from "./components/CardView";

const { Option } = Select;
const ChartComponent = () => {
  const [data, setData] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [step, setStep] = useState(1);
  useEffect(() => {
    getData().then((data) => {
      setData(data);
      setApiData(data);
    });
  }, []);

  useEffect(() => {
    if (apiData) {
      let arrData = [];
      for (let i = 0; i < apiData.length; i += step) {
        const childArr = apiData.slice(i, i + step);
        const highChildArr = childArr.map((item) => item.high);
        const lowChildArr = childArr.map((item) => item.low);
        const volumeChildArr = childArr.map((item) => item.volume);
        const record = {
          date: childArr[0].date,
          open: childArr[0].open,
          close: childArr[childArr.length - 1].close,
          high: Math.max(...highChildArr),
          low: Math.min(...lowChildArr),
          volume: volumeChildArr.reduce((sum, item) => sum + item, 0),
        };
        arrData.push(record);
      }
      setData(arrData);
    }
  }, [step]);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="chart">
      <div className="chart-container">
        <div className="section-filter flex-end">
          <Search />
        </div>
        <div className="section-chart">
          <CardView />

          <div className="chart-box">
            <Select
              className="chart-select"
              style={{ width: "80px" }}
              value={step}
              onChange={(value) => setStep(value)}
            >
              <Option value={1}>1m</Option>
              <Option value={15}>15m</Option>
              <Option value={30}>30m</Option>
              <Option value={60}>1h</Option>
              <Option value={120}>2h</Option>
            </Select>
            <Chart data={data} />
          </div>
        </div>
        <ListTransaction />
      </div>
    </div>
  );
};

render(<ChartComponent />, document.getElementById("root"));
