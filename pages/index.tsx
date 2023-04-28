import { CommentsSideBar } from '@/components/CommentsSideBar';
import { Header } from '@/components/Header';
import { LeftSideBar } from '@/components/MenuSideBar';
import { Post } from '@/components/Post';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='wrapper'>
        <div className="menuContainer">
          <LeftSideBar/>
        </div>
        <div className="main">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        </div>
        <div className="commentsContainer">
          <CommentsSideBar/>
        </div>
      </div>
    </div>
  );
}
