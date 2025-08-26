import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'kimg00n\'s blog',
  description:
    'kimg00n\'s blog',
  href: 'https://pwnable.net',
  author: 'kimg00n',
  locale: 'en-US',
  featuredPostCount: 3,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/tags',
    label: 'tags',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/kimg00n',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/kimg00n',
    label: 'Twitter',
  },
  {
    href: 'https://instagram.com/kimg00n_',
    label: 'Instagram',
  },
  {
    href: 'mailto:kevin1226716@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Instagram: 'lucide:instagram',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
