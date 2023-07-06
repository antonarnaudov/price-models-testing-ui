import "./shop.css";
import React from "react";

import {Shop} from "./Shop";
import {Redirect} from "../redirect/Redirect";

import {getShops} from "../../data/local-storage";

export const ShopsFrame = ({onDeleteShop, shouldRedirect}) => {
    return (
        <div className="shops-frame">
            {shouldRedirect && <Redirect url={'/results'} text={'Generating Results...'}/>}

            {getShops().map((shop) => (
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
