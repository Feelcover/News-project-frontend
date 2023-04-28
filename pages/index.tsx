import { Header } from '@/components/Header';
import { LeftSideBar } from '@/components/LeftSideBar';
import { Post } from '@/components/Post';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
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
