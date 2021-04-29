import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const { BLOG_URL, CONTENT_API_KEY } = process.env

type Post = {
  title: string
  slug: string
  description: string
  datetime: string
  date: string
  href: string
  custom_excerpt: string

}

async function getPosts () {
  // curl ""

  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,description,datetime,date,href,custom_excerpt,author`).then((res) => res.json())
  
  const posts = res.posts

  return posts
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts()
  return {
    revalidate: 10,
    props: { posts }
  }
}




const Home: React.FC <{ posts: Post[] }> = (props) => {

  const { posts } = props

  return (
    <div >
      <div>
         <div >
        
         <div className="relative py-10">
         
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700" style={{ mixBlendMode: 'multiply' }} />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Take control of your</span>
                    <span className="block text-indigo-200">customer support</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                      >
                        Get started
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                Trusted by over 5 very average small businesses
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="bg-white container mx-auto pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="px-4">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Press</h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="text-xl text-gray-500">Get weekly articles in your inbox on how to grow your business.</p>
            <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                <button
                  type="button"
                  className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
                >
                  Notify me
                </button>
              </div>
            </form>
          </div>
        
        <div className="max-w-7xl mt-6 pt-10  grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12  ">
          {posts.map((post) => {
            return (
            <div key={post.title}>
              
              <p className="text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.custom_excerpt}</p>
              </a>
               </Link>
              <div className="mt-3">
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <a href={post.slug} className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                  Read full story
                </a>
                </Link>
              </div>
             
            </div>
            
         )
            })}
          </div>

          <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Sign up for our newsletter</h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="emailAddress" className="sr-only">
              Email address
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-500">
            We care about the protection of your data. Read our{' '}
            <a href="#" className="font-medium underline">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>

    

        </div>
      </div>
      </div>
      </div>
    )
  }

export default Home;