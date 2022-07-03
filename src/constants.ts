export const NOTION_APP_PATH: string = "#notion-app";
export const NOTION_FRAME: string =
  "#notion-app > div > div.notion-cursor-listener > div:nth-child(2) > div.notion-frame";

export const OVERLAY_PARENT: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container";
export const OVERLAY_PATH: string = "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container";
export const OVERLAY_INNER_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2)";
export const OVERLAY_BODY_PATH: string =
  "#notion-app > div.notion-app-inner.notion-light-theme > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2) > div.notion-scroller.vertical";

export const OVERLAY_TITLE_LEFT_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2) > div.notion-scroller.vertical > div.whenContentEditable > div:nth-child(3) > div > div:nth-child(1) > div";
export const OVERLAY_TITLE_RIGHT_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2) > div.notion-scroller.vertical > div.whenContentEditable > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2)";
export const OVERLAY_PROPERTIES_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2) > div.notion-scroller.vertical > div.whenContentEditable > div:nth-child(3) > div > div:nth-child(2) > div";
export const OVERLAY_PAGECONTENT_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2) > div.notion-scroller.vertical > div.whenContentEditable > div:nth-child(4) > div > div";

export const CLOSE_BUTTON: string =
  '\
    <div \
      id="closeButton" \
      class="notion-help-button notion-focusable" \
      role="button" \
      tabindex="0" \
      style="\
        user-select: none;\
        position: fixed;\
        bottom: 4%;\
        right: 41.5%;\
        transition: opacity 700ms ease 0s, color 700ms ease 0s, transform 200ms ease 0s;\
        cursor: pointer;\
        opacity: 1;\
        display: flex;\
        align-items: center;\
        justify-content: center;\
        background: white;\
        width: 36px;\
        height: 36px;\
        border-radius: 100%;\
        font-size: 20px;\
        box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;\
        z-index: 101;\
        transform: translateX(0px) translateZ(0px);\
      "\
    >\
      &gt;\
    </div>\
  ';

export const CLOSE_PANEL_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div";
