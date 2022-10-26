/*  Imports  */
import "../styles/globals.scss";

import { Amplify } from "aws-amplify";
// import Auth from "@aws-amplify/auth";
import awsconfig from "../authconfig";

import dynamic from "next/dynamic";
import { Fragment } from "react";

// import LayoutMain from "../components/_layouts/main.layout";
// import LayoutAdmin from "../components/_layouts/admin.layout";

const LayoutMain = dynamic(() => import("../components/_layouts/main.layout"), { ssr: true });
const LayoutAdmin = dynamic(() => import("../components/_layouts/admin.layout"), { ssr: false });

// configure Amplify auth
Amplify.configure({ ...awsconfig, ssr: false });

const MyApp = ({ Component, pageProps }) => {
    const Layout = Component.layout == "admin" ? LayoutAdmin : Component.layout == "main" ? LayoutMain : Fragment;

    // const listener = async (data) => {
    //     switch (data.payload.event) {
    //         case "cognitoHostedUI":
    //             if (data.payload.data.authenticationFlowType == "USER_SRP_AUTH") {
    //                 const awsresp = await Auth.currentAuthenticatedUser();
    //                 console.log("awsresp dd :", awsresp);
    //                 const svrresp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
    //                     authid: data.payload.data,
    //                 });
    //             }

    //             break;
    //         case "signUp":
    //             console.log("[signUp] : ");
    //             break;
    //         case "signOut":
    //             console.log("[signOut] : ");
    //             break;

    //         default:
    //             console.warn("[default] : ", data);
    //     }
    // };

    // Hub.listen("auth", listener);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;
