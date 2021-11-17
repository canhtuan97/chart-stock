import React from "react";
import {
  ShareAltOutlined,
  StarOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { Progress } from "antd";
const CardView = (props) => {
  const textLeft = (
    <span>
      Looks like the owner can mint new tokens. ** The owner may have renounced.
    </span>
  );
  return (
    <div className="card-view">
      <div className="card-container">
        <div className="card-head">
          <button>
            <ShareAltOutlined />
          </button>
          <button>
            <StarOutlined />
          </button>
          <button className="button-new">
            Buy/Sell
            <span>NEW</span>
          </button>
        </div>
        <div className="card-price">
          <p>
            <i class="fas fa-arrow-circle-up"></i>$0.0160681
          </p>
          <p>
            <span style={{ color: "#c4183c" }}>(24h: -5.58%) </span>
            <span style={{ color: "#17c671" }}>0.00003046 BNB</span>
          </p>
        </div>
        <div className="card-total">
          <ul>
            <li>
              <span>Total liquidity:</span>
              <span>$1,379,109.77</span>
            </li>
            <li>
              <span>Daily volume:</span>
              <span>$871,648.61</span>
            </li>
            <li>
              <span>Pooled WBNB:</span>
              <span>43,396,236.48</span>
            </li>
            <li>
              <span>Pooled TRAVA:</span>
              <span>9,109.77</span>
            </li>
            <li>
              <span>Total tx:</span>
              <span>40233</span>
            </li>
            <li>
              <span>Holders:</span>
              <span>40233</span>
            </li>
            <li>
              <span>Market Cap:</span>
              <span>$8,855,654.0</span>
            </li>
            <li>
              <span>Diluted Market Cap:</span>
              <span>$75,815,347.91</span>
            </li>
          </ul>
        </div>
        <div className="button-info">
          <button>
            <InfoCircleOutlined style={{ paddingRight: "5px" }} />
            View more info
          </button>
        </div>
        <div className="card-progress">
          <div className="card-progress-left">
            <div className="progress-box">
            <Tooltip placement="top" title={`Transactions: ${80}`}>
              <Progress percent={80} success={{percent: 80}} size="small" />
            </Tooltip>
            <Tooltip placement="top" title={`Holders: ${90}`}>
              <Progress percent={90} success={{percent: 90}} size="small" />
            </Tooltip>
            <Tooltip placement="top" title={`Creation: ${95}`}>
              <Progress percent={95} success={{percent: 95}} size="small" />
            </Tooltip>
            <Tooltip placement="top" title={`Pool: ${95}`}>
              <Progress percent={95} size="small" />
            </Tooltip>
            </div>
            <div className="progress-text">
              <p>DEXT Score</p>
              <h3>99</h3>
            </div>
          </div>
          <div className="card-progress-right">
            <p> Contract Details</p>
            <div className="card-progress-icon">
              <Tooltip placement="left" title={textLeft}>
                <div className="dflex">
                  <i class="fas fa-plus-square"></i>
                </div>
              </Tooltip>

              <i class="fas fa-lock"></i>
              <i class="fas fa-cubes"></i>
              <i class="fas fa-money-bill-alt"></i>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <p>
            {" "}
            <InfoCircleOutlined
              style={{ paddingRight: "5px", color: "#008da5" }}
            />
            Community trust (10 votes)
          </p>
          <div className="card-footer-like">
            <span><i class="far fa-thumbs-up"></i>90%</span>
            <Progress percent={90} size="small" showInfo={false}  />
        
            <span>    <i class="far fa-thumbs-down"></i>10%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardView;
