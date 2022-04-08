import {useState, useEffect} from 'react';
import {Container} from './stylesHome';

import PostList from '../../componets/PostList';

import getPosts from '../../services/api';

type Props = {
  id: number;
  titulo: string;
  capa: string;
  subtitulo: string;
  categoria: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Props[]>([]);

  useEffect(() => {
    const requestPost = async () => {
      let postsRequested = await getPosts('rn-api/?api=posts/');
      setPosts(postsRequested.data);
      console.log(postsRequested.data);
    }

    requestPost();
  }, []);

  return (
    <Container>
      <ul>
        {posts.map(item => (
          <PostList key={item.id} itemList={item} />
        ))}
      </ul>
    </Container>
  )
}
