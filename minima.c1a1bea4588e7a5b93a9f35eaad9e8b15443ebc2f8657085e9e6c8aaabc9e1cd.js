(()=>{var l={artalk:{server:"https://artalk.linsnow.cn",site:"L1nSn0w's Log"},disqus:{shortname:"hugo-minima"},enable:!0,giscus:{category:"Comments",categoryid:"DIC_kwDOFxMJvc4CScQm",inputposition:"buttom",mapping:"pathname",metadata:!1,reactions:!0,repo:"mivinci/hugo-theme-minima",repoid:"MDEwOlJlcG9zaXRvcnkzODcxMjM2NDU="},provider:"twikoo",twikoo:{envid:"https://comment.linsnow.cn",lang:"zh-CN",region:"ap-guangzhou"},utterances:{issueterm:"pathname",label:"comment",repo:"mivinci/hugo-theme-minima"},waline:{placeholder:"\u8BF4\u70B9\u4EC0\u4E48\u5427...",serverurl:null}},c="light";var b=l.provider,m=c,u=`
<svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="28" height="28" stroke-width="1.75">
  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
</svg>
`,h=`
<svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="28" height="28" stroke-width="1.75">
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
</svg>
`,s=m==="system"?"light":m,v="dark",n,a,i;function d(e){n||(n=document.getElementById(e)),n.innerHTML=localStorage.theme===s?h:u,n.addEventListener("click",k)}function k(){let e=localStorage.getItem("theme"),t=e===s?v:s;switch(x(e,t),b){case"utterances":y(`github-${t}`);break;case"giscus":_(t);break;default:}}function x(e,t){let{classList:r}=document.documentElement,w=t===s?h:u;r.remove(e),r.add(t),localStorage.setItem("theme",t),n.innerHTML=w}function y(e){e!=="dark"&&(e="light"),a=a||document.querySelector("iframe.utterances-frame"),a&&a.contentWindow.postMessage({type:"set-theme",theme:e},"https://utteranc.es")}function _(e){e!=="dark"&&(e="light_protanopia"),i=i||document.querySelector("iframe.giscus-frame"),i&&i.contentWindow.postMessage({giscus:{setConfig:{theme:e}}},"https://giscus.app")}var g=!0;function p(){g||(document.documentElement.style="user-select:none")}d("theme-switch");p();})();