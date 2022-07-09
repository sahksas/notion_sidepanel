import { waitSelectorLoad } from "./utils";
import * as consts from "./constants";
import * as styleChanges from "./style_changes";

waitSelectorLoad(consts.OVERLAY_PARENT_PATH).then(() => {
  const target = document.querySelector(consts.OVERLAY_PARENT_PATH)! as HTMLElement;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      const overlayInner = target.querySelector("div > div.notion-peek-renderer") as HTMLElement;
      if (overlayInner) {
        styleChanges.styleChange();
      } else {
        styleChanges.undoStyleChange();
      }
    });
  });
  observer.observe(target, { childList: true, subtree: true });
});

waitSelectorLoad(consts.NOTION_FRAME_PATH).then(() => {
  const notionApp = document.querySelector(consts.NOTION_APP_PATH) as HTMLElement;
  notionApp.addEventListener("click", function (e) {
    const clickTarget = e.target as HTMLElement;
    // console.log(clickTarget);
    if (clickTarget?.id == "closeButton") {
      styleChanges.undoStyleChange();
    }
  });
});
