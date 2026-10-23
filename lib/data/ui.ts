import { COMMON } from "./common";

// ui
export const ANIMATED_COUNTER_COPY = {
  text0: "0",
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

export const LOADING_COPY = {
  loading: "Loading content…",
  imagePreview: "Loading preview…",
} as const;

// pages
export const ERROR_COPY = {
  somethingWent: "Something went ",
  wrong: "wrong",
  weEncounteredAnUnexpectedError: "We encountered an unexpected error.",
  tryAgain: "Try again",
} as const;

export const NOT_FOUND_COPY = {
  errorCode: "404",
  pageNot: "Page not",
  found: "found",
  theRequestedPageDoesnTExist: "The requested page doesn't exist. Let's get you back home.",
  backToHome: "Back to Home",
} as const;
