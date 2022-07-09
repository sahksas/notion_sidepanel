import { waitSelectorLoad } from "./utils";
import * as consts from "./constants";
import * as styleChanges from "./style_changes";

function domManipulation() {
  waitSelectorLoad(consts.OVERLAY_INNER_PATH)
    .then(() => {
      styleChanges.styleChange();
    })
    .catch(() => {
      // console.log("err");
    });
}

waitSelectorLoad(consts.OVERLAY_PARENT_PATH).then(() => {
  const target = document.querySelector(consts.OVERLAY_PARENT_PATH)! as HTMLElement;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      const overlayInner = target.querySelector("div > div.notion-peek-renderer") as HTMLElement;
      if (overlayInner) {
        // Detects the display of the editing screen
        domManipulation();
      } else {
        // Detects the hiding of the editing screen
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
    if (clickTarget?.id == "closeButton") {
      styleChanges.undoStyleChange();
    }
  });
});
