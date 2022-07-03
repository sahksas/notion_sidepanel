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

waitSelectorLoad(consts.OVERLAY_PARENT).then(() => {
  const target = document.querySelector(consts.OVERLAY_PARENT)! as HTMLElement;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      const overlayInner = target.querySelector("div > div.notion-peek-renderer") as HTMLElement;
      if (overlayInner) {
        domManipulation();
      } else {
        styleChanges.undoStyleChange();
      }
    });
  });
  observer.observe(target, { childList: true, subtree: true });
});

waitSelectorLoad(consts.NOTION_FRAME).then(() => {
  const notion_app = document.querySelector(consts.NOTION_APP_PATH) as HTMLElement;
  notion_app.addEventListener("click", function (e) {
    const clickTarget = e.target as HTMLElement;
    // console.log(clickTarget);
    if (clickTarget?.id == "closeButton") {
      styleChanges.undoStyleChange();
    }
  });
});
