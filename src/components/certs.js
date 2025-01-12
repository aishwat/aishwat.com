import React from "react";
import {ReactPictureGrid} from "react-picture-grid";
import {Fragment} from "react";

// import Back from "../assets_/back.jpg";
import SubHeader from "./SubHeader";

// Dynamically load all files from the 'certs' directory
const certs = [];
const requireCerts = require.context('../../public/certs', false, /\.(jpg)$/);

requireCerts.keys().forEach((key) => {
    const fileName = key.replace('./', '').replace(/\.(jpg)$/, ''); // Remove './' and file extension
    certs.push({
        image: requireCerts(key).default, // Will return the Webpack bundled path
        title: fileName,
        description: fileName,
    });
});

// console.log(certs);
const Pics = () => {
    return (
        <Fragment>
            <SubHeader>Certificates</SubHeader>

            <ReactPictureGrid
                showPreview
                closeOnClick
                data={certs}
                gap={20}
                backDropColor={"rgba(54, 86, 138, 0.5)"}
                // showTitle
                pattern={[
                    "small",
                    "small",
                    "small",
                    "small",
                    "small",

                    "small",
                    "small",
                    "small",
                    "small",
                    "small",
                ]}
            />
        </Fragment>
    );
};

export default Pics;
