import styles from './App.module.css';
import './global.css'

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostProps } from "./components/Post";

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joaohenriquefernandes.png',
      name: 'Joao Henrique Fernandes',
      role: 'Desenvolvedor FullStack'
    },
    publishedAt: new Date('2023-05-03 18:00:00'),
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de terminar mais um módulo do curso de React do Ignite'},
      {type: 'link', content: '#novoprojeto#nlw#rocketseat'}
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    publishedAt: new Date('2023-03-09 15:00:00'),
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de terminar mais um módulo do curso de React do Ignite'},
      {type: 'link', content: '#novoprojeto#nlw#rocketseat'}
    ]
  }
]

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
