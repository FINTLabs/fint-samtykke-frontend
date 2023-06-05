import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import portalLogo from "../../../content/images/portal-logo.png";
//import "./Header.scss";

const useStyles = makeStyles((theme) => ({
    logoCounty: {
        //backgroundImage: "https://stflaiscdn.blob.core.windows.net/media/fint-by-vigo.svg",
        //   theme.logo.substring(0, 4) === "http"
        //     ? `url(${theme.logo})`
        //     : `url('${theme.logo === "theme-logo.png" ? imageTheme : imageVigo}')`,
        backgroundSize: "contain",
        backgroundPosition: "30px left",
        backgroundRepeat: "no-repeat",
        float: "left",
        //width: "340px",
        height: "100px",
    },
    // logo: {
    //     // display: tableCel,
    //     // display: inline-block,
    //     // height: 100px,
    //     // width: 50%,
    // },
    logoPortal: {
        backgroundImage: `url(${portalLogo})`,
        backgroundPosition: '30px center',
        backgroundRepeat: 'no-repeat',
        float: 'right',
        width: '328px',
        height: '100px',
        alignContent: 'right'
    },
    // top_seperator: {
    //     backgroundColor: theme.secondaryColor,
    //     width: "100%",
    //     border: "none",
    //     height: "3.5px",
    //     margin: "0",
    //     alignItems: "center",
    // },
    logoText: {
        backgroundColor: theme.featureColor2,
        color: theme.secondaryColor,
        fontWeight: 700,
        margin: "45px 0 0",
        padding: "6px 0px",
        textAlign: "center",
        textTransform: "uppercase",
        width: "328px",
    },
    headerRow: {
        height: "100px",
        paddingBottom: "2px",
        borderBottom: `solid ${theme.secondaryColor} 3.5px`,
    },
    header: {
        height: "100px",
        margin: "20px auto",
        padding: 0,
        position: "relative",
        width: "100%",
        display: "inline-block"
    }
}));

function Header() {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <section className={classes.headerRow}>
                    <img className={classes.logoCounty} src="https://cdn.flais.io/media/fint-by-vigo.svg" alt="FINT by Vigo logo"/>
                <section className={classes.logoPortal}>
                    <section className={classes.logoText}>Samtykke</section>
                </section>
            </section>
        </header>
    );
}

export default Header;
