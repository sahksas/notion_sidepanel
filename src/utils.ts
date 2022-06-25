export const waitPageLoad = (selector: string, delay = 500, maxCheck = 15) =>
  new Promise((resolve) => {
    /**
     *
     */
    let checkCount = 0;
    const elmCheck = () => {
      checkCount++;
      const elms = document.querySelectorAll(selector);
      if (checkCount > maxCheck || elms.length > 0) {
        resolve(elms);
      } else {
        // console.log(elms)
        setTimeout(elmCheck, delay);
      }
    };
    elmCheck();
  });
