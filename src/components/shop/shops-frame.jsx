import React from "react";
import {Shop} from "./shop";
import "./shop.css";
import data from "../../data/mock-data.json"

export const ShopsFrame = () => {
    return (
        <div className="shops-frame">
            {data.shops.map((shop) => (
                <Shop key={shop.id} data={shop}/>
            ))}
        </div>
    );
};
