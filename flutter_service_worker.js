'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "37cdb5658d9ac99075f8eacf8bb3737a",
".git/config": "50f1041f688fe0111d7aca50f84ab159",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a0d7dcb9ce3ac6ecf19e1208d881c443",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aa68c46020fae222c5a5b4cc1b1a2b1c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1cf45ad279d8a5c0dca9801fc494307e",
".git/logs/refs/heads/master": "1cf45ad279d8a5c0dca9801fc494307e",
".git/logs/refs/remotes/origin/master": "82f2cc1cd7ebb85ba8aff351af0d6c85",
".git/objects/06/4554ded7018bfac7637f8aa7e7db3f8ae185fb": "b8ac61c7c8d2f884e5afe60fca4255d5",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0e/5485d0b0ac9ef579550cc7a4157257e1f3e7c1": "c6c2a2c2d5077ee0a352017c148f601e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/32228e97ea12e5f9328793daa24591bbf92140": "7cefa00dd056362d5a3d34233ac5e602",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/24/08a96824d5c0ce67824fc217a13c3ffdc19bdc": "9b4790fd9f05c4342a39716e5e79555a",
".git/objects/25/68004286f97d40c55f972a7036d8db13be8e7b": "6277e8238fba5cc32f216e868604fca1",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/3c739b2f2f88a6d9d78d1bf8a85aafde51784d": "3f82683df14cdd4a1f28b68c58980f0c",
".git/objects/2e/b4b341b5491b07587f10e60a0aca71107042de": "6b12a512f3ef12b53c6f939ca8ecd05e",
".git/objects/31/95d589c633d67178cf8185311ef7ecd154425f": "2aca9ea56b911f7cf651397bc0f720fc",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/39/40c4f7dbe2791a55ab3ecb818d623988dd8455": "c3c26c1fbf14d287ae3e856d17865140",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/9c18c4dce1a62b8b7e2c3d988d80c916eb8f19": "6791bf5e549b5059e02d785b3b1023d0",
".git/objects/42/854ada82d2dd6ddddb2737ca2d6bd558c0078b": "a2af434bdd6503d40852ed8fef5d6b9d",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/95b0a7a8117a2ebfe14a045417aa456e1c9a05": "d289f33b97ac2ff0181eae0253e840a2",
".git/objects/4f/673a1216ccd7b9174407a3b66a5b95f69d6edb": "944559148e049e0d76f3a3d62dab1f4a",
".git/objects/5c/578bf8cf6b6089e9485d63ba8f36456f466c6a": "410ec44f12ed7328d784fc3a301d1678",
".git/objects/65/ecdfc4c6bb8b5c8cbbc0df5985505f6954cf41": "face7c60886a263d1a5a993243444294",
".git/objects/6a/ac8b4f9c98f36b28534ad043e355f846ee7f86": "b0c1c36ad5661f8064cc9cc0e14005c7",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/4b1b762572ac0b9290b4cc3d1456a50c24477b": "aba95d64addf4890c5f9e77f78fe8dbe",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/ab135fed4b50a88f94ca81520c53ddee98d57c": "63bc5b5478bb5e367eb0a9ef8ee3d6c4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/51b180bb6701cfc74f515a810e27846fcd7fe3": "425772992b3882a485f5c208aaff73b4",
".git/objects/8c/405d91bedae5ac9b4e90fa228f916010b64190": "5f6d58ab6087787917fc9b16d33ecaa3",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/96/d043e3e1ccb20784e97da4739a447c1bed47c1": "147d0a5bccc93a5016efc41a5e8c8526",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/f4b6e024089dab78c56d96eb5f1cf7f7b781c4": "5d4925c63c0562e95db7daa74c1ce5f5",
".git/objects/9b/4c19f21501cf680d40df866ac60c0416762851": "10986f2715da83fb3330b1339436e22d",
".git/objects/9f/0b6983a2eb5733ff151a76b02d798060b720b5": "cae9d951513bbd388efbfb9857a6b944",
".git/objects/a4/42eca1db9d821a2e6c7b3f8a16e45e8fa269cc": "e03b9a9a83df12b07aaeda55c447dfa0",
".git/objects/a5/302771c438e928cb2d1575d69446b9db838bbd": "9ce05e77c8fd4363b11a58ffebb85390",
".git/objects/a6/2326af2af48aedda25a399e8c63d74fa58a02f": "a9e11dfce784c2d0d41f026d5d36f776",
".git/objects/ae/5c7e963bd3b0f9e9150a05da4fc706fb281b02": "eb1317dbef418c178aaacb457e7e173a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/59f8a08a1887cffefed70b9b2466d7e90f7f7b": "5c8e3d26b47989765cb6c9e53bb8816b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/cc/7ddbdd279e187c2d7baf97d06d902d0209ee7c": "eef83d50e73179ac7db8665b4b893a67",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3b647c5814e4385703256b1dafb3d89284f0b2": "25bd8492d8aeeaea92e5387fdf948b78",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/fb1e9bf164195b61afbf026bd4b03d2200ad64": "ff9d9f1889410d09eb027cacd4a244cb",
".git/objects/d9/8b4f1e14164476bb04cc91b1b51b8bda8e9d99": "683bd5aa7d9e10dbc5030593cbc5a0cf",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e1/975826e079767e836cec9e27f71a0fa9b15286": "69fb2c897dd1c85e6f9251645aebfd51",
".git/objects/e4/ab66e538177f7b6eeaf6b8a9e479170bef6770": "4d6d5dd9838340840f914728977270a7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/7fd9c3f06b312a9bc9ed80711440b80b02b862": "b47582a177d8f142f2328a85932829fc",
".git/objects/ee/fa987d8679955dcf783cd77e2a2a2b07ec7bde": "e0545f5eb60588417e3d4702370c6d10",
".git/objects/f1/a53a96baa59d32dbe968336c000fc71dd7c8d4": "d800bf552bcbd780a891e371d2dc20db",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/8d52b62e59eb5928ee19f374f2dc820876a4a8": "fdec41776ca8b72dbb0b72bc96d6f29e",
".git/refs/heads/master": "ad3a10e6047c700ac83968901c4a4636",
".git/refs/remotes/origin/master": "ad3a10e6047c700ac83968901c4a4636",
".git/sourcetreeconfig.json": "b7f5ee167251d2be265aa4e1d852385b",
"assets/AssetManifest.bin": "5c34277c4bb874c3541f3d6936a16907",
"assets/AssetManifest.bin.json": "519393b338b21cd09b4417721e7f7e21",
"assets/AssetManifest.json": "6904d4f4191067cfe5aafabbecb012a1",
"assets/assets/images/basketball.jpeg": "1ce5bd7ee9d1fe36435afc294b176346",
"assets/assets/images/bb3d.png": "a16936e0fec3d7a1fc77d7f87a69afc5",
"assets/assets/images/blogo.png": "0bcb093f1a6ebb5beabc10a8d7e31f83",
"assets/assets/images/splash.png": "b7e78a815140d5e8da13cd3c400538cc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9cdc0d054a9d5e3cb2b71fab2969670a",
"assets/NOTICES": "86a1ecd5784f40315719863563a0fe15",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "31044e116dce5feb97e1f7c7993a7316",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "023a886c637b1f8a4d491eaa6e037d7d",
"/": "023a886c637b1f8a4d491eaa6e037d7d",
"main.dart.js": "8aaecfac50ef13d2968d65dfe5570743",
"manifest.json": "a43ad1adb9d5affdc0a655dddd7e1323",
"version.json": "91191874f8e2e206332085cef45bf840"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
