import "@/styles/globals.css";

// INTERNAL IMPORT
import { TrackingProvider } from "../Conetext/Tracking";
import {NavBar,Footer} from "../Components";


export default function App({ Component, pageProps }) {
  return(
    <>
      <TrackingProvider>
      <NavBar />
        <Component {...pageProps} />;
      </TrackingProvider>
      <Footer />
    </>
  );
 
}