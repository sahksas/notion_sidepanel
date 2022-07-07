export const NOTION_APP_PATH: string = "#notion-app";
export const NOTION_FRAME_PATH: string =
  "#notion-app > div > div.notion-cursor-listener > div:nth-child(2) > div.notion-frame";
export const MAIN_BODY_PATH: string = "#notion-app > div.notion-app-inner > div.notion-cursor-listener";

export const HEAD_BAR_PATH: string =
  "#notion-app > div.notion-app-inner > div.notion-cursor-listener > div:nth-child(2) > div:nth-child(1)";

export const SIDE_BAR_PATH: string =
  "#notion-app > div.notion-app-inner > div.notion-cursor-listener > div.notion-sidebar-container";

export const OVERLAY_PARENT_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container";
export const OVERLAY_PATH: string =
  "#notion-app > div.notion-app-inner > div.notion-overlay-container.notion-default-overlay-container";
export const OVERLAY_INNER_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2)";
export const OVERLAY_BODY_PATH: string =
  "#notion-app > div.notion-app-inner > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2) > div.notion-scroller.vertical";

export const OVERLAY_TITLE_LEFT_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2) > div.notion-scroller.vertical > div.whenContentEditable > div:nth-child(3) > div > div:nth-child(1) > div";
export const OVERLAY_TITLE_RIGHT_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2) > div.notion-scroller.vertical > div.whenContentEditable > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2)";
export const OVERLAY_PROPERTIES_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2) > div.notion-scroller.vertical > div.whenContentEditable > div:nth-child(3) > div > div:nth-child(2) > div";
export const OVERLAY_PAGECONTENT_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div:nth-child(2) > div.notion-scroller.vertical > div.whenContentEditable > div:nth-child(4) > div > div";

export const HELP_BUTTON_PATH: string =
  "#notion-app > div.notion-app-inner > div.notion-cursor-listener > div.notion-help-button.notion-focusable";

export const CLOSE_BUTTON: string =
  '\
    <div \
      id="closeButton" \
      role="button" \
      tabindex="0" \
      style="\
        user-select: none;\
        transition: opacity 700ms ease 0s, color 700ms ease 0s, transform 200ms ease 0s;\
        cursor: pointer;\
        opacity: 1;\
        position: absolute;\
        display: flex;\
        align-items: center;\
        justify-content: center;\
        background: white;\
        bottom: 26px;\
        right: 26px;\
        width: 36px;\
        height: 36px;\
        border-radius: 100%;\
        font-size: 15px;\
        box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;\
        z-index: 1;\
        transform: translateX(0px) translateZ(0px);\
      "\
    >\
      ❌\
    </div>\
  ';

export const CLOSE_PANEL_PATH: string =
  "#notion-app > div > div.notion-overlay-container.notion-default-overlay-container > div:nth-child(2) > div > div";
