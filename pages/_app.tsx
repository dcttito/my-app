import '../styles/globals.css'
import { Nav } from "../components"
import { Footer } from "../components"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'



function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
  }
  

function MyApp({ Component, pageProps }) {
	return (
		<div>
		<div className="min-h-screen bg-white">
      <header>
	  <Nav />
   
      </header>
      
  


      <main>
	  <Component {...pageProps} /> 
        {/* More main page content here... */}


      </main>
      <Footer />
    </div>
  
		</div>
    
	)
}

export default MyApp