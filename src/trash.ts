import { waitSelectorLoad } from "./utils";
import * as consts from "./constants";

export function itemTrash() {
  const more = document.querySelector(consts.MORE_PATH) as HTMLElement;
  more.click();
  waitSelectorLoad(consts.TRASH_PATH).then(() => {
    const trash = document.querySelector(consts.TRASH_PATH) as HTMLElement;
    trash.click();
  });
}
