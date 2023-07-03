import "./shop.css";
import React from "react";
import {Shop} from "./shop";
import {Redirect} from "../redirect/redirect";

export const ShopsFrame = ({onDeleteShop, shouldRedirect}) => {
    return (
        <div className="shops-frame">
            {shouldRedirect && <Redirect url={'/results'} text={'Generating Results...'}/>}

            {JSON.parse(localStorage.getItem("shops") || "[]").map((shop) => (
                <Shop
                    key={shop.id}
                    data={shop}
                    onDeleteShop={onDeleteShop}
                    shouldRedirect={shouldRedirect}
                />
            ))}
        </div>
    );
};
