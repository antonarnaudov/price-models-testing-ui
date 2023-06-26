import "./shop.css";
import React from "react";
import {Shop} from "./shop";

export const ShopsFrame = ({onDeleteShop}) => {
    return (
        <div className="shops-frame">
            {JSON.parse(localStorage.getItem("shops") || "[]").map((shop) => (
                <Shop key={shop.id} data={shop} onDeleteShop={onDeleteShop}/>
            ))}
        </div>
    );
};
