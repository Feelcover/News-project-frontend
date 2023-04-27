import { Header } from '@/components/Header';
import { Post } from '@/components/Post';
import { Paper, Typography } from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>News-Project</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div>
        <div className="leftContainer"></div>
        <div className="main">
          
        <Post/>
        </div>
        <div className="rightContainer"></div>
      </div>
    </div>
  );
}
