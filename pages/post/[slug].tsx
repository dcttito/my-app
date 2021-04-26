import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from '../../styles/Home.module.css'
import { useState } from 'react'

const {BLOG_URL, CONTENT_API_KEY} = process.env

async function getPost (slug: string) {
  

    const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/slug/?key=${CONTENT_API_KEY}&fields=title,slug,html`).then((res) => res.json())
    
    const posts = res.posts
  
    return posts[0]
  }

  export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.slug)
    return {
      props: { post },
      revalidate: 10
    }
  }
  //hello-world ~ on first request = Ghost CMS in made
  export const getStaticPaths = () => {
    //paths -> slugs which are allowed
    //fallback -> 
 
    return {
      paths: [],
      fallback: true
    }
  }

type Post = {
  title: string
  html: string
  slug: string
}
const Post: React.FC <{post: Post }> = (props)=>{

    console.log(props)
    const { post } = props
    const router = useRouter()

    if (router.isFallback){
      return <h1>loading...</h1>
    }

    return (
      <div className={styles.container}>
        <Link href="/">
            <a>Go Back </a>
            <h1>Hello</h1>
        </Link>
        <h1>My Blog</h1>
        <div dangerouslySetInnerHTML={{__html: post.html }}></div>
        </div>
    )
}

export default Post