import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Amanda Oliveira"
            content="texto aleatório só para demonstração"
          />
          <Post
            author="Priscila Oliveira"
            content="Irmã mais velha"
          />
        </main>
      </div>
    </div>
  )
}

