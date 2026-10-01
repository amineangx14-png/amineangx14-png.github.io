try { importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js"); } catch (e) {}
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
