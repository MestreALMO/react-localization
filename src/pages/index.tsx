import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { LanguageSelection } from "../components/languageSelection";
import { TranslateThis } from "../components/translateThis";
import CtxLanguageSelectedProvider from "../context/ctxLanguageSelected";

const Home: NextPage = () => {
  return (
    <CtxLanguageSelectedProvider>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Typography variant="h1">DevALMO, YouTube channel</Typography>

          <LanguageSelection />
          <TranslateThis />
        </main>

        <footer></footer>
      </div>
    </CtxLanguageSelectedProvider>
  );
};

export default Home;
