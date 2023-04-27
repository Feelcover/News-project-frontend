import { Header } from '@/components/Header';
import { LeftSideBar } from '@/components/LeftSideBar';
import { Post } from '@/components/Post';
import Head from 'next/head';

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
      <div className='wrapper'>
        <div className="leftContainer">
          <LeftSideBar/>
        </div>
        <div className="main">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        </div>
        <div className="rightContainer"></div>
      </div>
    </div>
  );
}
