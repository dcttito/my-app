import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from '../../styles/Home.module.css'
import { useState } from 'react'

const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPost(slug: string) {
	const res = await fetch(
		`${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,author`
	).then((res) => res.json())

	const posts = res.posts

	return posts[0]
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
	const post = await getPost(params.slug)
	return {
		props: { post },
		revalidate: 10
	}
}

// hello-world - on first request = Ghost CMS call is made (1)
// hello-world - on other requests ... = filesystem is called (1M)

export const getStaticPaths = () => {
	// paths -> slugs which are allowed
	// fallback ->
	return {
		paths: [],
		fallback: true
	}
}

type Post = {
	title: string
	html: string
	slug: string
  category: string
  author: string
}

const Post: React.FC<{ post: Post }> = (props) => {
	console.log(props)

	const { post } = props
	const [enableLoadComments, setEnableLoadComments] = useState<boolean>(true)

	const router = useRouter()

	if (router.isFallback) {
		return <h1>Loading...</h1>
	}

	function loadComments() {
		setEnableLoadComments(false)
		;(window as any).disqus_config = function () {
			this.page.url = window.location.href
			this.page.identifier = post.slug
		}

		const script = document.createElement('script')
		script.src = 'https://bp-disqus.disqus.com/embed.js'
		script.setAttribute('data-timestamp', Date.now().toString())

		document.body.appendChild(script)
	}

	return (
    
		<div >
      <div className="relative">
      
       <div className="space-y-8 container mx-auto px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        
        <div className="text-lg max-w-prose mx-auto">

        <p className={styles.goback}>
				<Link href="/">
        
        <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Go back
      </button>
				
				</Link>
			</p>
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              {post.author}
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {post.title}
            </span>
          </h1>
          <div className="space-y-4  mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto" dangerouslySetInnerHTML={{ __html: post.html }}></div>

          {enableLoadComments && (
            <button
            type="button"
            className="mt-8 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={loadComments}
          >
            Show Comments
          </button>
				
			)}

        </div>
      
      </div>
    </div>
			
			
	
			<div className="mt-8 container mx-auto px-4 sm:px-6 lg:px-8" id="disqus_thread"></div>
		</div>
    </div>
	)
}

export default Post