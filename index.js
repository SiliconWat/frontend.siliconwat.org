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

    const { TESTING, getGitHub } = await import(`${FRONTEND}/global.mjs`);
    if (!TESTING) window.clearCache();
    const github = await getGitHub();
    
    await document.querySelector('sw-main').render(github);
    document.documentElement.style.backgroundImage = "linear-gradient(90deg, rgba(5,117,230,1) 0%, rgba(2,27,121,1) 100%)";
    document.body.style.display = 'flex';
    await document.querySelector('sw-header').render(github);
    await document.querySelector('sw-progress').render(github);
};

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-CJB0YFM4F9');