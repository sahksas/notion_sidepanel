import { waitPageLoad } from "./utils";

const NOTION_APP_PATH: string = "#notion-app";
const OVERLAY_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container";
const OVERLAY_BODY_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2)";

// 右寄せ
waitPageLoad(OVERLAY_BODY_PATH).then(() => {
  const item = document.querySelector(OVERLAY_BODY_PATH) as HTMLElement;
  item.style.width = "40%";
  item.style.top = "0px";
  item.style.right = "0px";
  item.style.left = "auto";
  item.style.height = "100%";
  item.style.borderLeft = "1px solid gray";
});

// NOTION_APPを狭く
waitPageLoad(OVERLAY_BODY_PATH).then(() => {
  const item = document.querySelector(NOTION_APP_PATH) as HTMLElement;
  item.style.width = "60%";
});

// NOTION_APPを触れるように
waitPageLoad(OVERLAY_BODY_PATH).then(() => {
  const item = document.querySelector(OVERLAY_PATH) as HTMLElement;
  item.style.zIndex = "0";
});
