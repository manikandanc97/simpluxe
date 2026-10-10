import { COMMON } from "./common";

// ui
export const ANIMATED_COUNTER_COPY = {
  text0: "0",
} as const;

export const ANIMATED_TEXT_COPY = {
  symbol: " ",
} as const;

export const COMMAND_PALETTE_MODAL_COPY = {
  startAProject: COMMON.actions.startProject,
  commandMenu: "Command menu",
  typeACommandOrSearch: "Type a command or search...",
  commands: "Commands",
  noResultsFound: "No results found.",
} as const;

export const DIALOG_COPY = {
  close: "Close",
} as const;

export const FORM_COPY = {
  symbol: "*",
} as const;

export const PAGE_BANNER_BREADCRUMB_COPY = {
  breadcrumb: "Breadcrumb",
} as const;

export const SCROLL_TO_TOP_COPY = {
  scrollToTop: "Scroll to top",
} as const;

// pages
export const ERROR_COPY = {
  somethingWent: "Something went ",
  wrong: "wrong",
  weEncounteredAnUnexpectedError: "We encountered an unexpected error.",
  tryAgain: "Try again",
} as const;

export const NOT_FOUND_COPY = {
  text404PageNot: "404 — Page Not ",
  found: "Found",
  theRequestedPageDoesnTExist: "The requested page doesn't exist. Let's get you back home.",
  backToHome: "Back to Home",
} as const;
