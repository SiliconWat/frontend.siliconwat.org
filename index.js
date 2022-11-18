import "/components/sw-header/element.mjs";

//import "./components/sw-main/sw-learn/element.mjs";
//import "./components/sw-main/sw-practice/element.mjs";
//import "./components/sw-main/sw-review/element.mjs";
//import "./components/sw-main/element.mjs";

import "/components/sw-footer/element.mjs";
import { FRONTEND } from "/global.mjs";

window.onload = async () => {
    await import(`${FRONTEND}/components/sw-auth/element.mjs`);

    await import(`${FRONTEND}/components/sw-main/sw-learn/element.mjs`);
    await import(`${FRONTEND}/components/sw-main/sw-practice/element.mjs`);
    await import(`${FRONTEND}/components/sw-main/sw-review/element.mjs`);
    await import(`${FRONTEND}/components/sw-main/sw-home/element.mjs`);
    await import(`${FRONTEND}/components/sw-main/element.mjs`);

    await import(`${FRONTEND}/components/sw-progress/element.mjs`);
    await import(`${FRONTEND}/components/sw-music/element.mjs`);
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-CJB0YFM4F9');