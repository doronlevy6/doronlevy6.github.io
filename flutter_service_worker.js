'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "84cbc713cd661f5d82a9f3f7f69b16b3",
".git/config": "50f1041f688fe0111d7aca50f84ab159",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7d1fab620ba0842aba46f959324cd96d",
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
".git/index": "9140d281e30a1b80657caf1041e164cc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "382937bcd49bccc2796b1903ce563c96",
".git/logs/refs/heads/master": "382937bcd49bccc2796b1903ce563c96",
".git/logs/refs/remotes/origin/master": "049018f6892bf627c82f714f44def814",
".git/objects/04/24ce354c9ce23d0466010a6dcb55f338ca47ef": "70f8c328c8bf3aa118ea8e75e809eed9",
".git/objects/06/4554ded7018bfac7637f8aa7e7db3f8ae185fb": "b8ac61c7c8d2f884e5afe60fca4255d5",
".git/objects/06/f4406da343a1cfa9c1fa6274bc9d605e734991": "19462f78ceb3beaaaaaa8d44866ee59e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/8e63caf28a18aa4a85e1f6a762340cdeedbfe2": "ef89b39897035b1e362ae11be6a4d587",
".git/objects/0e/5485d0b0ac9ef579550cc7a4157257e1f3e7c1": "c6c2a2c2d5077ee0a352017c148f601e",
".git/objects/14/1f9f2e0aaf5938dd7ff85a99a477d24d0901e5": "20482db0a8cfb0827139a2a6879daac7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/32228e97ea12e5f9328793daa24591bbf92140": "7cefa00dd056362d5a3d34233ac5e602",
".git/objects/23/959e2fcdbf4d137a7b96febc96edae37af32d9": "00f0a97c5626eea42ba0c9d724541f3a",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/24/08a96824d5c0ce67824fc217a13c3ffdc19bdc": "9b4790fd9f05c4342a39716e5e79555a",
".git/objects/25/68004286f97d40c55f972a7036d8db13be8e7b": "6277e8238fba5cc32f216e868604fca1",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/c4d364b347314cec7be9b0c5b4db7c2f333e88": "3d1efbc053734ce0b51ea398e25d9cee",
".git/objects/29/3c739b2f2f88a6d9d78d1bf8a85aafde51784d": "3f82683df14cdd4a1f28b68c58980f0c",
".git/objects/2e/b4b341b5491b07587f10e60a0aca71107042de": "6b12a512f3ef12b53c6f939ca8ecd05e",
".git/objects/31/95d589c633d67178cf8185311ef7ecd154425f": "2aca9ea56b911f7cf651397bc0f720fc",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/39/40c4f7dbe2791a55ab3ecb818d623988dd8455": "c3c26c1fbf14d287ae3e856d17865140",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/e7cd499dbacd4f8251d4ddc9713e24994a19cb": "e3f2fe07bb44c43e695f1c4dc051f461",
".git/objects/3c/757faa57fa83c6b777b71105a16a0ac4890768": "0f359a5e9f197cc3e4b097a196f76298",
".git/objects/3d/6ae719afae6fab03503ba5b4575759a5f017e3": "7231451fae06b570f9517a8210cf5bf2",
".git/objects/3f/eb80c7a8b59bddfae470c5821318e7c8d5e318": "196178211f000fb23ac15a9031811183",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/d684df4262a1f0121a071f81b7d46b4fae34e7": "ec0fd1ba5d3f9db0d8b11cf599a0573a",
".git/objects/41/9c18c4dce1a62b8b7e2c3d988d80c916eb8f19": "6791bf5e549b5059e02d785b3b1023d0",
".git/objects/42/854ada82d2dd6ddddb2737ca2d6bd558c0078b": "a2af434bdd6503d40852ed8fef5d6b9d",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/f6c134e8ee4023c9884fd4021489ac48c16911": "a153eebba25588f86647f1b557a6b15e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/b3faa5b0be745730ea8af54bf9531113110577": "1e283f96a899d7ad49761b249f4231c4",
".git/objects/4b/95b0a7a8117a2ebfe14a045417aa456e1c9a05": "d289f33b97ac2ff0181eae0253e840a2",
".git/objects/4f/673a1216ccd7b9174407a3b66a5b95f69d6edb": "944559148e049e0d76f3a3d62dab1f4a",
".git/objects/50/1faad0f20af032068d4e20cc642338ab90abcb": "dd497c6d07ee126e9ab85195aab2326f",
".git/objects/59/277ec9bafb53e8a0a98ab36850aa3ee69e5249": "5025c59a7ff6473a9767ab6a9d1b6a49",
".git/objects/5c/547f01ec629ee82f1a869e9be10c09860768f4": "120fce4517a7df0622005eb3c6cc2a27",
".git/objects/5c/578bf8cf6b6089e9485d63ba8f36456f466c6a": "410ec44f12ed7328d784fc3a301d1678",
".git/objects/61/9b290f3939675ab9d53963ea9208bd34a9fbea": "fcb3d1d7b286db82a883ebfee229dc59",
".git/objects/65/ecdfc4c6bb8b5c8cbbc0df5985505f6954cf41": "face7c60886a263d1a5a993243444294",
".git/objects/68/7a568d2121b9bbe8d7853e714947bff72d0327": "533d8a34a875ac0a6d025a8a1a9d8552",
".git/objects/6a/ac8b4f9c98f36b28534ad043e355f846ee7f86": "b0c1c36ad5661f8064cc9cc0e14005c7",
".git/objects/6b/0c2f77627ecdfc6ef44f172a0a6ea37652eef2": "76e5ebc6f2b51101ebbbff6e7a281828",
".git/objects/6b/e6d31854f6d8f40fd8b3f0e234dab680ab2ee2": "ebbe22e6f74cb2a5c09d5dca300d9ab0",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/4b1b762572ac0b9290b4cc3d1456a50c24477b": "aba95d64addf4890c5f9e77f78fe8dbe",
".git/objects/72/e0d5e8fe3109242fb00f38290c5c930787fef9": "507954947a6430fe1bd7622b37075c98",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/48ae9cf82dc17ddb8dd890554d46ccb21279a2": "08e7a233cc8883aada72d28661c58aa0",
".git/objects/86/ab135fed4b50a88f94ca81520c53ddee98d57c": "63bc5b5478bb5e367eb0a9ef8ee3d6c4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/51b180bb6701cfc74f515a810e27846fcd7fe3": "425772992b3882a485f5c208aaff73b4",
".git/objects/8c/405d91bedae5ac9b4e90fa228f916010b64190": "5f6d58ab6087787917fc9b16d33ecaa3",
".git/objects/8e/8ea1d624534858a6fd72a720280e0d6a45cb2b": "6d1ad3e27c2bb33594b4872c836c652c",
".git/objects/90/701d04dc3a6e2fe136d7c4d4a67251051b2a97": "70dcc5fcb5edde96ac83d7c1fbcc1098",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/224ed9029f997907aebef0a1e54dfd3ebb8d44": "ee560cd094463a2070be90250a24d0e7",
".git/objects/94/0308ce31f9d41553f6b3d8e4f7d57fcc61393b": "ea06c182ed024b55e218cf1043220df4",
".git/objects/95/561a3048274d2569517307999638555fdc7268": "572716ea030fde3fec446ab4501c2027",
".git/objects/96/d043e3e1ccb20784e97da4739a447c1bed47c1": "147d0a5bccc93a5016efc41a5e8c8526",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/333989af0160adc11f659c73b96ca701469d9b": "7dc5149de356fdf87be29a020be22804",
".git/objects/99/f4b6e024089dab78c56d96eb5f1cf7f7b781c4": "5d4925c63c0562e95db7daa74c1ce5f5",
".git/objects/9b/4c19f21501cf680d40df866ac60c0416762851": "10986f2715da83fb3330b1339436e22d",
".git/objects/9f/0b6983a2eb5733ff151a76b02d798060b720b5": "cae9d951513bbd388efbfb9857a6b944",
".git/objects/a2/229846056a15228a7d1e6e60bbb2df7dc9defd": "3c1551fe32c6ac3da336e545e5590c5d",
".git/objects/a4/42eca1db9d821a2e6c7b3f8a16e45e8fa269cc": "e03b9a9a83df12b07aaeda55c447dfa0",
".git/objects/a5/302771c438e928cb2d1575d69446b9db838bbd": "9ce05e77c8fd4363b11a58ffebb85390",
".git/objects/a6/2326af2af48aedda25a399e8c63d74fa58a02f": "a9e11dfce784c2d0d41f026d5d36f776",
".git/objects/ae/3563a1b33e6b8600b1f44ebc902fe9cd173af9": "30ec4ea9a4fbb38c390597c8e5b9233c",
".git/objects/ae/5c7e963bd3b0f9e9150a05da4fc706fb281b02": "eb1317dbef418c178aaacb457e7e173a",
".git/objects/af/5f495549c4b5e03fe87ec40c885014666c34a9": "5602926949ce57223a157048e6382afe",
".git/objects/b0/f491145df338d3dfa1a4cd35754a799b24a37b": "299c15aeb4809a977c8b7c3607b6d239",
".git/objects/b1/1dd974e15cd73fda271c490789eac16c35d435": "ede08f16a751b92d985966328e35a6ca",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/0cc5194ae6cc0f394e33de6a1f5a92f58530aa": "febe6b7306d2598919aa91620f06a223",
".git/objects/b6/c702dcba5874330ce8b45304690509ce265984": "2917eee6828adeb0884e7af8acf13985",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/59f8a08a1887cffefed70b9b2466d7e90f7f7b": "5c8e3d26b47989765cb6c9e53bb8816b",
".git/objects/b7/be75d75693b838918fa77151c55e0e9a173fd8": "2824ef99131a82cbfd70d83f0cf3d4c4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/b3b69139b9e10b47ec589e6cabd15bd626af7b": "f56afd45c9aac15f4abba35a8cdb4e92",
".git/objects/c2/14ffda8fdffaffe269697b1afacf5631fd952c": "35de5cb9baf20e2eecdbecf1e9edbed1",
".git/objects/c2/37269bf16ba3a45b45fea99082e773110024af": "9100de398f9164baead28e7916eedd08",
".git/objects/c6/4d310805f67b4303fb54e4b2e249a21eff8553": "69567b50202fa785920eba182490dab8",
".git/objects/cc/7ddbdd279e187c2d7baf97d06d902d0209ee7c": "eef83d50e73179ac7db8665b4b893a67",
".git/objects/ce/069f76c49ba9893fa4a16dac263dbcfff3e0d0": "d1e7d42f4596c2f1a799357054b546f6",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3b647c5814e4385703256b1dafb3d89284f0b2": "25bd8492d8aeeaea92e5387fdf948b78",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b0b84b93d1d8bf79d18fd082e52ccbef6720bc": "b1a5d0800df2826848e2afe8fcbdecb8",
".git/objects/d7/fb1e9bf164195b61afbf026bd4b03d2200ad64": "ff9d9f1889410d09eb027cacd4a244cb",
".git/objects/d9/8b4f1e14164476bb04cc91b1b51b8bda8e9d99": "683bd5aa7d9e10dbc5030593cbc5a0cf",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/df/73f1b81e0b572e1063f9ca13cb46e5ef551928": "940310e2c87b67cf09687e71600e8632",
".git/objects/e0/25fd192dc913342c2c87a56d837bff5a163e3c": "442c096f4268004e9c26f89f3e461e5f",
".git/objects/e1/975826e079767e836cec9e27f71a0fa9b15286": "69fb2c897dd1c85e6f9251645aebfd51",
".git/objects/e1/ba99cb5630e06a5948179ce84543dbfad880ba": "9727beb0f2d2526a75c94bcf28b36e4b",
".git/objects/e4/ab66e538177f7b6eeaf6b8a9e479170bef6770": "4d6d5dd9838340840f914728977270a7",
".git/objects/e6/054ae07750ea5f89e6e8b6598f87994559f2aa": "da317beb6a65deb8605c977d9cf139de",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/7fd9c3f06b312a9bc9ed80711440b80b02b862": "b47582a177d8f142f2328a85932829fc",
".git/objects/ec/c436c5c1c1c85bd9284928a3a4ffcbc220c2a4": "6ea77e87967244a073fba8ba358431e3",
".git/objects/ee/973b5ae37d664e3af5d4d922711f363a5eb606": "7a1cc73aa5d428d2e77d2d54139ad49b",
".git/objects/ee/fa987d8679955dcf783cd77e2a2a2b07ec7bde": "e0545f5eb60588417e3d4702370c6d10",
".git/objects/f1/a53a96baa59d32dbe968336c000fc71dd7c8d4": "d800bf552bcbd780a891e371d2dc20db",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/a2f4c6180903c5a1f2ead2c36eee063dd8645b": "452cc3ea872e236e1086758b42cef930",
".git/objects/f6/8d52b62e59eb5928ee19f374f2dc820876a4a8": "fdec41776ca8b72dbb0b72bc96d6f29e",
".git/objects/fc/6fb3bb5241812ffe82704a3c95058d16bc6878": "0fecf6e5164c73cf7973ae7144fb339b",
".git/refs/heads/master": "c3901e39ec3ea65ddbe54498b6ab34f3",
".git/refs/remotes/origin/master": "c3901e39ec3ea65ddbe54498b6ab34f3",
".git/sourcetreeconfig.json": "32b297a87c68de6f50275342c4634090",
"assets/AssetManifest.bin": "05b5b3ba65f6d9a3b908f57154514043",
"assets/AssetManifest.bin.json": "4cf56e194dc9267db4dbd74fbb495464",
"assets/AssetManifest.json": "265b0f29104c9a718833ee888e84e19d",
"assets/assets/images/app_icon.png": "fe2e61ab28ce72bf1519ac6da322d6f3",
"assets/assets/images/basketball.jpeg": "1ce5bd7ee9d1fe36435afc294b176346",
"assets/assets/images/bb3d.png": "a16936e0fec3d7a1fc77d7f87a69afc5",
"assets/assets/images/blogo.png": "0bcb093f1a6ebb5beabc10a8d7e31f83",
"assets/assets/images/ic_background.png": "22439b5147224d7d2d20b5d1a9f19e4e",
"assets/assets/images/ic_foreground.png": "c34c3f222eaee440392cb409c83004a2",
"assets/assets/images/logos.png": "c34c3f222eaee440392cb409c83004a2",
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
"favicon.png": "d436b2bd5f741b694a29c196c55ce90d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "92c6d8e146909108daf042e314d2eda1",
"icons/favicon.png": "d436b2bd5f741b694a29c196c55ce90d",
"icons/Icon-192.png": "8cb3196f99a87e9b3602885d07fd5876",
"icons/Icon-512.png": "61cc4f157cd1d0e7654d460516eb0bed",
"icons/Icon-maskable-192.png": "8cb3196f99a87e9b3602885d07fd5876",
"icons/Icon-maskable-512.png": "61cc4f157cd1d0e7654d460516eb0bed",
"index.html": "023a886c637b1f8a4d491eaa6e037d7d",
"/": "023a886c637b1f8a4d491eaa6e037d7d",
"main.dart.js": "2acc41f6f171a29b54c8e341eff40470",
"manifest.json": "709239aa40e86d8baea9266044865898",
"version.json": "e2699656e7de6a21b0dfe501edf8d208"};
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
