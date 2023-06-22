const path = (root, sublink) => {
  if (sublink) {
    return `${root}${sublink}`;
  }
  return `${root}`;
};

const ROOT_HOME = path("/home");
const ROOT_EXPLORE = path("/explore");
const ROOT_NOTIFICATION = path("/notifications");
const ROOT_LIST = path("/lists");
const ROOT_MESSAGE = path("/messages");
const ROOT_BOOKMARK = path("/bookmarks");
const ROOT_VERIFIED = path("/verified");
const ROOT_PROFILE = path("/profile");
const ROOT_MORE = path("/more");

export const HOME_PATH = {
  root: ROOT_HOME,
};

export const EXPLORE_PATH = {
  root: ROOT_EXPLORE,
};

export const NOTIFICATION_PATH = {
  root: ROOT_NOTIFICATION,
};

export const MESSAGE_PATH = {
  root: ROOT_MESSAGE,
};

export const LIST_PATH = {
  root: ROOT_LIST,
};

export const BOOKMARK_PATH = {
  root: ROOT_BOOKMARK,
};

export const VERIFIED_PATH = {
  root: ROOT_VERIFIED,
};

export const PROFILE_PATH = {
  root: ROOT_PROFILE,
};

export const MORE_PATH = {
  root: ROOT_MORE,
};
