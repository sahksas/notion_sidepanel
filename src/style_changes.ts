import * as consts from "./constants";

export function styleChange() {
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

  const notion_app = document.querySelector(consts.NOTION_APP_PATH) as HTMLElement;
  notion_app.style.width = "60%";

  const notion_frame = document.querySelector(consts.NOTION_FRAME) as HTMLElement;
  notion_frame.style.maxWidth = "60%";

  const overlay = document.querySelector(consts.OVERLAY_PATH) as HTMLElement;
  overlay.style.zIndex = "0";

  const closeButtonElm = document.getElementById("closeButton");
  if (!closeButtonElm) {
    notion_app.insertAdjacentHTML("beforeend", consts.CLOSE_BUTTON);
  }
}

export function undoStyleChange() {
  const overlayBody = document.querySelector(consts.OVERLAY_BODY_PATH) as HTMLElement;
  const closePanel = document.querySelector(consts.CLOSE_PANEL_PATH) as HTMLElement;
  if (overlayBody) {
    closePanel.click();
  }

  const notion_app = document.querySelector(consts.NOTION_APP_PATH) as HTMLElement;
  notion_app.style.width = "";

  const notion_frame = document.querySelector(consts.NOTION_FRAME) as HTMLElement;
  notion_frame.style.maxWidth = "";

  const overlay = document.querySelector(consts.OVERLAY_PATH) as HTMLElement;
  overlay.style.zIndex = "999";

  const closeButtonElm = document.getElementById("closeButton");
  if (closeButtonElm) {
    closeButtonElm.remove();
  }
}
