import React, {useEffect, useState} from "react";
import {ThemeProvider} from "@material-ui/styles";
import {createTheme} from "@material-ui/core/styles";

import {Consent, Header} from "./components/common";
import "./App.scss";
import axios from "axios";

const defaultTheme = createTheme();

function App() {
    const theme = {
        ...defaultTheme,
        //logo: "",
        primaryColor: "#7a1668",
        secondaryColor: "#513f35",
        featureColor1: "#0b8797",
        featureColor2: "#d0eaed",
    };

    const [isFetching, setIsFetching] = useState(false);
    const [basePath, setBasePath] = useState("/");


    useEffect(() => {
        setIsFetching(true);

        axios.get('api/application/configuration')
            .then(result => {
                setBasePath(result.data.basePath);
                axios.defaults.baseURL = result.data.basePath;
            })
            .catch(reason => {
                console.log(reason);
                setBasePath('/');
            })

    }, [basePath]);

    return <ThemeProvider theme={theme}>
        <div className="App">
            <Header/>
            <div className="main">
                <div className="row">
                    <Consent
                        isFetching={isFetching}
                        setIsFetching={setIsFetching}
                    />
                </div>
            </div>
        </div>
    </ThemeProvider>


}

export default App;
