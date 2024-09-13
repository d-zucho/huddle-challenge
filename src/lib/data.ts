import GrowTogetherImg from '../assets/images/illustration-grow-together.svg'
import FlowingConversationImg from '../assets/images/illustration-flowing-conversation.svg'
import YourUsersImg from '../assets/images/illustration-your-users.svg'

interface Feature {
  image: string
  title: string
  description: string
}

export const CardFeatures: Feature[] = [
  {
    image: GrowTogetherImg,
    title: 'Grow Together',
    description:
      'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
  },
  {
    image: FlowingConversationImg,
    title: 'Flowing Conversations',
    description:
      "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
  },
  {
    image: YourUsersImg,
    title: 'Your Users',
    description:
      "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
  },
]

export const NavLinks: string[] = [
  'About Us',
  'What We Do',
  'FAQ',
  'Career',
  'Blog',
  'Contact Us',
]
