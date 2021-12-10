import React from "react";

function StatisticItem(props){

    return(
        <div className="statistic_item">
            {props.statisticList.map((item) => {
                return(
                    <div key={new Date().getTime() * Math.random(0, 100) / Math.random(0, 100)}>
                        <span>
                            {item.name}
                        </span>
                        <span>
                            {item.createDate}
                        </span>
                        {item.finishingDate &&
                            <span>
                                {item.finishingDate}
                            </span>
                        }
                    </div>
                );
            })}
        </div>
    );
}

export default StatisticItem;