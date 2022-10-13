import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import "react-slideshow-image/dist/styles.css";
import Navbar2 from "../components/navbar2";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Navbar2 />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
