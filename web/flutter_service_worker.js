'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "40280e3690db74b3017e3ed5abd4a387",
"index.html": "38cf3ae7ac13588874825aa9ec032a80",
"/": "38cf3ae7ac13588874825aa9ec032a80",
"main.dart.js": "8bdbef6979d1cde58d1c2ae71d0295fd",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2d69a42b0d1df87ab518877a9fd19247",
"assets/AssetManifest.json": "d528ad090b383f43c391604c9f4f5a28",
"assets/NOTICES": "5d36b6d54842c69f436ed13a70259c09",
"assets/FontManifest.json": "1704a285792422bff0c21711070941c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "7b019b88408ff903616bf622b98578b6",
"assets/fonts/MaterialIcons-Regular.otf": "2c51a9bfa8ac94fd47adb5dce910e3b7",
"assets/assets/anim/lt_loader.json": "39d66ffb0f9d47cf1fceb4f9c3c12cba",
"assets/assets/anim/anim1.json": "468e2cf19faa5a55869cacf29e04a18e",
"assets/assets/anim/no_data_found.json": "a48b6c619c68c7706f11f5269391d796",
"assets/assets/anim/no-connection.json": "11f999c5e698badf3416543ce11595f0",
"assets/assets/anim/confetti.gif": "e993d191d03335fd09a1987db3f8d39a",
"assets/assets/anim/loading-gray.json": "2a7bcaa2c064077cbdca0dc28916887c",
"assets/assets/images/Home_Filled.png": "d4642931833e77b1a2249b4dfe0689a9",
"assets/assets/images/img_user.png": "39ecde76cf9aaca0d91a882d9cf64e3f",
"assets/assets/images/bazinga.png": "616d170bdd906e8ed09ecdb1b8bb3fb0",
"assets/assets/images/trophy.png": "324dade4b59889abb97a0812b4b5377c",
"assets/assets/images/Vote_Outline.png": "79e2bb0533312ee73be97d4cda3e79c7",
"assets/assets/images/img_info_q.png": "897828f627605190ef999bbd67c9b77d",
"assets/assets/images/img_delete.png": "0d03cc9a2caba89b2c3cf5b00c406680",
"assets/assets/images/vote.png": "f0aceca2f102b0bd0436027636e76332",
"assets/assets/images/addverb.png": "9cc07f2157b166ac701d3df8abba1d53",
"assets/assets/images/plane.png": "f7f4a4e3a2b969ccf513e330b853d177",
"assets/assets/images/main.png": "bc7af942e007f409ceffe1fd27fda658",
"assets/assets/images/apriciateLetter.png": "a43a4456c92d900de5df527073ca4f2f",
"assets/assets/images/Bell_Filled.png": "e828b3b46658c1bb3247d48e28b9490d",
"assets/assets/images/img_upload.png": "8d0cc7cd7c998de7950f29afdc968899",
"assets/assets/images/img_camera.png": "f145ea6dde19076cda5be89cea313338",
"assets/assets/images/anouncement.png": "cb37649dbf2b4dd10b1296cda5679184",
"assets/assets/images/vector.png": "344711005520f75542cf222f7f6e2a6e",
"assets/assets/images/img_bellfreeicon.png": "282a4dba2bf8d2755429490e2a502530",
"assets/assets/images/vote_now.png": "bd0fcae81e13e5e368f378884a76a7ea",
"assets/assets/images/Login_Infographic.png": "f910dfd2ada444d5a3d43b045e22acf8",
"assets/assets/images/bgdesign.png": "ec1d52fa1f0b4bb06dcd2110021d7c04",
"assets/assets/images/addverblogo.png": "5f9090108d5e021cb001cf0dfe50baeb",
"assets/assets/images/awardhand.png": "059687d394ac86917d4a1d2885331149",
"assets/assets/images/img_info.png": "93fa28dbf31fcee7b2729eed1b9263e7",
"assets/assets/images/cruiser.png": "393f73364315cddf1c28784df6cc6346",
"assets/assets/images/sidekick.png": "0c9e41c9cd3c1fd5d99d29b0584a8188",
"assets/assets/images/bottom1.png": "6b84f28383721d9658f43202fc05df65",
"assets/assets/images/nomination.png": "29ed8183dc0b3772a6d6db292b450ab7",
"assets/assets/images/top2.png": "5ba82c2d5a07482a351172f7b5ebcfb7",
"assets/assets/images/bottom2.png": "d75870ab4305146f8f4098192422a4d2",
"assets/assets/images/img_signout.png": "4aee295ee8a8a912ac14e8c31d5dae41",
"assets/assets/images/medal152.png": "91f8ff5895b35905be9182d9089797f5",
"assets/assets/images/Bell_Outline.png": "041f813c810c73a824b109705a2dadd9",
"assets/assets/images/top1.png": "b080bce9f5b1ea61f79200807d3d154d",
"assets/assets/images/img_notebook.png": "3adacc0ab2fe929eebb65393e9e610bf",
"assets/assets/images/Home_Outline.png": "001738627b67208ddd185a43cea6dde8",
"assets/assets/images/person_voting.png": "92258601fb53c999aea3df0fac787869",
"assets/assets/images/at_logo.png": "5e2ec4f072fae6bc8058a68e0a992233",
"assets/assets/images/rookie.png": "f7c376aaf0cd7149fd3ef3ed5e0eeaf5",
"assets/assets/images/img_arrowsmalllef.png": "6ecd80a94e2af6007fa236473c31eed2",
"assets/assets/images/login_icon.png": "1a8a00e78ad1a09177e61537ff43d274",
"assets/assets/images/img_trophy.png": "51228058e7318ebdff68cd57f7e3d736",
"assets/assets/images/reset_password1.png": "5f57d9ba602cbbc13ab3db9db82a771b",
"assets/assets/images/gift.png": "851af8898c7e8fb5c7893a0e52528dc4",
"assets/assets/images/dine.png": "c89afc1896ea3cfc271aedf146f70aee",
"assets/assets/images/frame.png": "57efc36fe7e4fb9f7d2d3bdbd14cdb7c",
"assets/assets/images/cruiser2.png": "2e3578dc35003f1a7ae92ad46094c9d0",
"assets/assets/images/cash.png": "83da8e539cefc28a378ac962021771a9",
"assets/assets/images/Vote_Filled.png": "02f99694ca6b9d5d9bd4d0494bf40d93",
"assets/assets/images/img_profilepic.png": "b87aed9bd5b7eae617c8fb353fd5875a",
"assets/assets/images/Trophy_Filled.png": "c937472ec46ee7caa132e551b24b501e",
"assets/assets/images/image_not_found.png": "a88029aaad6e6ea7596096c7c451840b",
"assets/assets/images/notification_empty_state.png": "07a4a2726c2fc005bd782cb13ae57484",
"assets/assets/images/dreamteam.png": "8d6d8d0f34b7cef82f1fe866c73bc2e7",
"assets/assets/images/addverb_red.png": "88520f067179ac2d4c86ea66ee4875b4",
"assets/assets/images/publish.png": "3fd771b098c0173878cc0ea43d45a641",
"assets/assets/images/check_mark.png": "3ac3bfb34c7617e6b1cd5a967482a3ad",
"assets/assets/images/Trophy_Outline.png": "bc57bce396eb9ff6fb821bede900ecad",
"assets/assets/certificate.pem": "48d5c6702b72292a169d3f961a2d43e4",
"assets/assets/cert.txt": "48d5c6702b72292a169d3f961a2d43e4",
"assets/assets/font/JostRomanMedium.ttf": "2c2945b9da98d9b48d6104893d9558c0",
"assets/assets/font/JostRomanSemiBold.ttf": "bcac976eb8c9ec9a512ec8a53fac8be9",
"assets/assets/font/Zeyada.ttf": "ba6dd1f5d34075339dba06c690388c93",
"assets/assets/font/JostRomanRegular.ttf": "3dba44482cb4f0bfa595833a76643d93",
"assets/assets/font/JostItalicMedium.ttf": "0d7deef312dcbcb163409d7fec8c419a",
"assets/assets/confetti.flr": "dafac8cd8628cd97c4665641481ba81c",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
