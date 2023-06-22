import BookmarkIcon from "../../assests/NavIcons/BookmarksIcon";
import HomeIcon from "../../assests/NavIcons/HomeIcon";
import ListsIcon from "../../assests/NavIcons/ListsIcon";
import MessageIcon from "../../assests/NavIcons/MessageIcon";
import MoreIcon from "../../assests/NavIcons/MoreIcon";
import NotificationIcon from "../../assests/NavIcons/NotificationIcon";
import ProfileIcon from "../../assests/NavIcons/ProfileIcon";
import SearchIcon from "../../assests/NavIcons/SearchIcon";
import TwitterIcon from "../../assests/NavIcons/TwitterIcon";
import VerifiedIcon from "../../assests/NavIcons/VerifiedIcon";
import {
  BOOKMARK_PATH,
  EXPLORE_PATH,
  HOME_PATH,
  LIST_PATH,
  MESSAGE_PATH,
  MORE_PATH,
  NOTIFICATION_PATH,
  PROFILE_PATH,
  VERIFIED_PATH,
} from "../../routes/route";

const ICONS = {
  twitter: TwitterIcon,
  home: HomeIcon,
  search: SearchIcon,
  notification: NotificationIcon,
  message: MessageIcon,
  list: ListsIcon,
  bookmark: BookmarkIcon,
  verified: VerifiedIcon,
  profile: ProfileIcon,
  more: MoreIcon,
};

export const NavigationList = [
  { items: [{ path: HOME_PATH.root, ICON: ICONS.twitter }] },
  { items: [{ title: "home", path: HOME_PATH.root, ICON: ICONS.home }] },
  {
    items: [{ title: "explore", path: EXPLORE_PATH.root, ICON: ICONS.search }],
  },
  {
    items: [
      {
        title: "notifications",
        path: NOTIFICATION_PATH.root,
        ICON: ICONS.notification,
      },
    ],
  },
  {
    items: [
      { title: "messages", path: MESSAGE_PATH.root, ICON: ICONS.message },
    ],
  },
  {
    items: [{ title: "lists", path: LIST_PATH.root, ICON: ICONS.list }],
  },
  {
    items: [
      { title: "bookmarks", path: BOOKMARK_PATH.root, ICON: ICONS.bookmark },
    ],
  },
  {
    items: [
      { title: "verified", path: VERIFIED_PATH.root, ICON: ICONS.verified },
    ],
  },
  {
    items: [{ title: "profile", path: PROFILE_PATH.root, ICON: ICONS.profile }],
  },
  {
    items: [{ title: "more", path: MORE_PATH.root, ICON: ICONS.more }],
  },
];
