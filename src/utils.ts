export const waitSelectorLoad = (selector: string, delay = 500, maxCheck = 15) =>
  new Promise((resolve, reject) => {
    let checkCount = 0;
    const elmCheck = () => {
      checkCount++;
      const elms = document.querySelectorAll(selector);
      if (elms.length > 0) {
        resolve(elms);
      } else {
        // console.log(elms)
        if (checkCount <= maxCheck) {
          setTimeout(elmCheck, delay);
        } else {
          reject("Elm is nothing");
        }
      }
    };
    elmCheck();
  });

export const waitClassNameLoad = (className: string, delay = 500, maxCheck = 15) =>
  new Promise((resolve, reject) => {
    let checkCount = 0;
    const elmCheck = () => {
      checkCount++;
      const elms = document.getElementsByClassName(className);
      if (elms.length > 0) {
        resolve(elms);
      } else {
        // console.log(elms)
        if (checkCount <= maxCheck) {
          setTimeout(elmCheck, delay);
        } else {
          reject("Elm is nothing");
        }
      }
    };
    elmCheck();
  });
