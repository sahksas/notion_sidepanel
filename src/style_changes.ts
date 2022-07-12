import * as consts from "./constants";

export function styleChange() {
  /**
   * Change the style of the notion screen.
   * The main changes are as follows
   * - Change the width of the edit screen
   * - Change the height of the edit screen
   * - Change the display position of the edit screen
   * - Change the padding of the edit screen
   * - Adjustment of z-index of each element
   */
  const overlay = document.querySelector(consts.OVERLAY_PATH) as HTMLElement;
  overlay.style.zIndex = "100"; // <- "999"
  overlay.style.position = ""; // <- "fixed"

  const overlayInner = document.querySelector(consts.OVERLAY_INNER_PATH) as HTMLElement;
  overlayInner.style.maxWidth = "";
  overlayInner.style.width = "40%";
  overlayInner.style.top = "0px";
  overlayInner.style.right = "0px";
  overlayInner.style.left = "auto";
  overlayInner.style.height = "100%";
  overlayInner.style.borderLeft = "1px solid gray";
  overlayInner.style.borderRadius = "";
  const overlayTitleLeft = document.querySelector(consts.OVERLAY_TITLE_LEFT_PATH) as HTMLElement;
  overlayTitleLeft.style.paddingLeft = "4%";
  const overlayTitleRight = document.querySelector(consts.OVERLAY_TITLE_RIGHT_PATH) as HTMLElement;
  overlayTitleRight.style.paddingRight = "4%";
  const overlayProperties = document.querySelector(consts.OVERLAY_PROPERTIES_PATH) as HTMLElement;
  overlayProperties.style.paddingRight = "4%";
  overlayProperties.style.paddingLeft = "4%";
  const overlayPageContentPath = document.querySelector(consts.OVERLAY_PAGECONTENT_PATH) as HTMLElement;
  overlayPageContentPath.style.paddingRight = "4%";
  overlayPageContentPath.style.paddingLeft = "4%";

  const mainBody = document.querySelector(consts.MAIN_BODY_PATH) as HTMLElement;
  mainBody.style.zIndex = "100";
  mainBody.style.position = "";

  const notionApp = document.querySelector(consts.NOTION_APP_PATH) as HTMLElement;
  notionApp.style.width = "60%"; // <- ""

  const notionFrame = document.querySelector(consts.NOTION_FRAME_PATH) as HTMLElement;
  notionFrame.style.maxWidth = "60%"; // <- ""

  const notionPageContent = document.querySelector(consts.NOTION_PAGE_CONTENT_PATH) as HTMLElement;
  if (notionPageContent) {
    const children = Array.from(notionPageContent.children) as HTMLElement[];
    for (const child of children) {
      child.style.width = "calc(60vw - 10px)"; // <- "calc(100vw - 10px)"
      child.style.maxWidth = "calc(60vw - 10px)"; // <- "calc(100vw - 10px)"
    }
  }

  const headbar = document.querySelector(consts.HEAD_BAR_PATH) as HTMLElement;
  headbar.style.zIndex = "1"; // <- "100"

  const sidebar = document.querySelector(consts.SIDE_BAR_PATH) as HTMLElement;
  sidebar.style.zIndex = "1"; // <- "99"

  const helpButton = document.querySelector(consts.HELP_BUTTON_PATH) as HTMLElement;
  helpButton.style.display = "none"; // <- "flex"

  const closeButtonElm = document.getElementById("closeButton");
  if (!closeButtonElm) {
    helpButton.insertAdjacentHTML("beforebegin", consts.CLOSE_BUTTON);
  }
}

export function undoStyleChange() {
  /**
   * Revert changes made with `styleChange`.
   */
  const overlayBody = document.querySelector(consts.OVERLAY_BODY_PATH) as HTMLElement;
  const closePanel = document.querySelector(consts.CLOSE_PANEL_PATH) as HTMLElement;
  if (overlayBody) {
    closePanel.click();
  }

  const overlay = document.querySelector(consts.OVERLAY_PATH) as HTMLElement;
  overlay.style.zIndex = "999";
  overlay.style.position = "fixed";

  const notionApp = document.querySelector(consts.NOTION_APP_PATH) as HTMLElement;
  notionApp.style.width = "";

  const notionFrame = document.querySelector(consts.NOTION_FRAME_PATH) as HTMLElement;
  notionFrame.style.maxWidth = "";

  window.resizeBy(screen.width, screen.height);

  const headbar = document.querySelector(consts.HEAD_BAR_PATH) as HTMLElement;
  headbar.style.zIndex = "100";

  const sidebar = document.querySelector(consts.SIDE_BAR_PATH) as HTMLElement;
  sidebar.style.zIndex = "99";

  const helpButton = document.querySelector(consts.HELP_BUTTON_PATH) as HTMLElement;
  helpButton.style.display = "flex";

  const closeButtonElm = document.getElementById("closeButton");
  if (closeButtonElm) {
    closeButtonElm.remove();
  }
}
