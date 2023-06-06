import {makeStyles} from "@material-ui/core/styles";
import ConsentTable from "../consentTable/ConsentTable";
import {useEffect, useState} from "react";
import axios from "axios";
//import "./Consent.scss";

const useStyles = makeStyles((theme) => ({
    errorHandler: {
        color: "#ff3333",
        marginBottom: "20px",
    },
    headerColor: {
        color: theme.primaryColor,
    },
    headerColor2: {
        color: theme.secondaryColor,
    },
    spinner: {
        paddingTop: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}));

const Consent = ({
                     isFetching,
                     setIsFetching,
                 }) => {
    const [consents, setConsents] = useState([]);
    const handleChange = (event, index, consent) => {
        setIsFetching(true);
        fetch(
            `consents/${consent.systemIdValue}/${consent.processing.systemId.identifikatorverdi}/${event.target.checked}`,
            {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((consentPut) => {
                setConsents((prevConsents) => {
                    let tempArr = [...prevConsents];
                    tempArr[index] = consentPut;
                    return [...tempArr];
                });
                setIsFetching(false);
            })
            .catch(console.log);
    };

    const createConsent = (index, consent) => {
        setIsFetching(true);
        fetch(`consents/${consent.processing.systemId.identifikatorverdi}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((consentPost) => {
                setConsents((prevConsents) => {
                    let tempArr = [...prevConsents];
                    tempArr[index] = consentPost;
                    return [...tempArr];
                });
                setIsFetching(false);
            })
            .catch(console.log);
    };
    useEffect(() => {
        axios.get(`/consents`)
            .then(result => {
                setConsents(result.data)
            })
            .finally(() => setIsFetching(false));
    }, [setIsFetching])

    const classes = useStyles();
    return (
        <section className="consent">
            <section className="row">
                <section className="row-1">
                    <h1 className={classes.headerColor}>Velkommen!</h1>
                    <p>
                        Denne siden gir deg oversikt over dine samtykker
                    </p>
                </section>
                <section className="row-3">
                    <h2 className={classes.headerColor2}>Samtykker</h2>
                    <section>
                        <ConsentTable
                            consents={consents}
                            handleChange={handleChange}
                            isFetching={isFetching}
                            createConsent={createConsent}
                        />
                    </section>
                </section>
            </section>
        </section>
    );
};
export default Consent;
