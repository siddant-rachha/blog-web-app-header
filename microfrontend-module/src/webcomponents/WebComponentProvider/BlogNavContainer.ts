import r2wc from '@r2wc/react-to-web-component';
import { BlogNavContainer } from '../../components/BlogNavContainer/BlogNavContainer';

const BlogNavContainerWC = r2wc(BlogNavContainer, {
  props: {
    imgSrc: 'string',
    navItems: 'json',
    navActive: 'string',
    avatarItems: 'json',
    searchItems: 'json',
  },
  events: {
    handleAvatarItem: { bubbles: true },
    handleNavItem: { bubbles: true },
    handleSearchInput: { bubbles: true },
    handleSearchItem: { bubbles: true },
  },
});

customElements.define('blog-nav-container', BlogNavContainerWC);
