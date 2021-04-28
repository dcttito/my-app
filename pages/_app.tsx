import '../styles/globals.css'
import { Nav } from "../components"
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

const solutions = [
  {
    name: 'Inbox',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: AnnotationIcon,
  },
  { name: 'Live Chat', description: "Your customers' data will be safe and secure.", href: '#', icon: ChatAlt2Icon },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
]




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
    </div>
			
		</div>
	)
}

export default MyApp