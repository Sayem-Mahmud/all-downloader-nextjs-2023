if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/541-9aa5b33787c0c5f9.js",revision:"9aa5b33787c0c5f9"},{url:"/_next/static/chunks/557-48667bf43a5c6a8f.js",revision:"48667bf43a5c6a8f"},{url:"/_next/static/chunks/7112840a-51cb1fa874a98a8a.js",revision:"51cb1fa874a98a8a"},{url:"/_next/static/chunks/826-43c77a9d96a9ffa3.js",revision:"43c77a9d96a9ffa3"},{url:"/_next/static/chunks/974-16702fac5130f598.js",revision:"16702fac5130f598"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-130dcf3b0e412a4e.js",revision:"130dcf3b0e412a4e"},{url:"/_next/static/chunks/pages/_app-05217e6ad485a7e2.js",revision:"05217e6ad485a7e2"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/downloader/%5Bdownloader%5D-ded8827fa6bf2144.js",revision:"ded8827fa6bf2144"},{url:"/_next/static/chunks/pages/index-a4b7b0c92147f9d3.js",revision:"a4b7b0c92147f9d3"},{url:"/_next/static/chunks/pages/richit/stark-5fb44e79535e6ce2.js",revision:"5fb44e79535e6ce2"},{url:"/_next/static/chunks/pages/richit/xavier-3687f105c248fd01.js",revision:"3687f105c248fd01"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-59c5c889f52620d6.js",revision:"59c5c889f52620d6"},{url:"/_next/static/css/8900905a9606120c.css",revision:"8900905a9606120c"},{url:"/_next/static/css/9459a23f8c62c934.css",revision:"9459a23f8c62c934"},{url:"/_next/static/css/a8e2b3e155c5b200.css",revision:"a8e2b3e155c5b200"},{url:"/_next/static/gtUvznBhu9rcZrWfRWlH1/_buildManifest.js",revision:"c3255aff7c8a5d20572b68700b891546"},{url:"/_next/static/gtUvznBhu9rcZrWfRWlH1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/ads.txt",revision:"518ca48a54bfe53b32ab8450b37043e8"},{url:"/icon-192x192.png",revision:"506485c71be1edac3606d7c0f96feec9"},{url:"/icon-256x256.png",revision:"e63290dcd16b04a18759d65ddd47f4bc"},{url:"/icon-384x384.png",revision:"8a15737dad50893e439446a187fe5ea7"},{url:"/icon-512x512.png",revision:"96275dfe294385b5181633ae6a72ffd2"},{url:"/images/Left.svg",revision:"289dd3a14d2bb8fa3aa8b1c4cb0e5615"},{url:"/images/Right.svg",revision:"89ae17cc0ee8a7a8dd2252bcfd02a63c"},{url:"/images/Userpic - Initials.png",revision:"2a685b7af83417f19fac9ec1d94c9294"},{url:"/images/android.svg",revision:"59814b657b09d9fdf33b70298420dbb7"},{url:"/images/apple-find.svg",revision:"d56a9ff81952a08bda695888024d80e0"},{url:"/images/apple-finder.svg",revision:"a3fb2336328a24fde93bc1f0acb671cc"},{url:"/images/apple-ios.svg",revision:"9e642e589c74a1fba25b870b529983e5"},{url:"/images/check.svg",revision:"6d6848a0e27ea29caaec6c8b1d16c4e9"},{url:"/images/close.svg",revision:"52b044b048ff17c983a95724b685be7b"},{url:"/images/copy.png",revision:"895cf0a3158ded08e15a8900a369f7a0"},{url:"/images/google-chrome.svg",revision:"748ff2a39bde21b8c894e6e17028c447"},{url:"/images/icons.svg",revision:"069f6c9b78f9950a05c0688d956716d6"},{url:"/images/instagram.svg",revision:"356b1ff44c437ec6eec2f6769098151e"},{url:"/images/microsoft-internet-explorer.svg",revision:"a00139a9bfcd749d409e27810337b5d8"},{url:"/images/microsoft-windows-classic.svg",revision:"50359b6c45b16bcd456a4e92a74c51c4"},{url:"/images/microsoft-windows.svg",revision:"25633d49fe90b7b99c5ad4848b6d2f7e"},{url:"/images/pinterest.svg",revision:"4e3f90b4ba1828a4927114b89138f7e7"},{url:"/images/telegram.svg",revision:"1cb974fdd30b6a99e6e1e4409860ed81"},{url:"/images/twitter.svg",revision:"faadcc3d34a8d8b147e8631ccfa766f0"},{url:"/images/ubuntu.svg",revision:"2d86e3cb3b9ead0def733c2bc1b33ad0"},{url:"/images/vector.svg",revision:"59ead8bc546664c4cc953207a8ecde07"},{url:"/images/viber.svg",revision:"fd13455832783f76d0368d5aeb880653"},{url:"/images/youtube.svg",revision:"baaca2bdcec87aa47a0211623f6b72a6"},{url:"/manifest.json",revision:"8afbf8038d32f5ef3701b4d9d1517b3d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
