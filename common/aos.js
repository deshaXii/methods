import * as AOS from "../public/js/aos.js";

let AOSS = null
setTimeout(() => {
  if (AOS.init.length) {
    AOSS = AOS.init({
      duration: 1000,
    });
  }
}, 500);

export default AOSS;
