# Overrides for Extension Preferences
# Tor Browser Bundle
# Do not edit this file.

# Torbutton Preferences:
pref("extensions.torbutton.fresh_install", false);
pref("extensions.torbutton.tor_enabled", true);
pref("extensions.torbutton.proxies_applied", true);
pref("extensions.torbutton.settings_applied", true);
pref("extensions.torbutton.socks_host", "127.0.0.1");
pref("extensions.torbutton.socks_port", 9150);
pref("extensions.torbutton.tz_string", "UTC+00:00");

# HTTPS Everywhere Preferences:
pref("extensions.https_everywhere._observatory.popup_shown", true);
pref("extensions.https_everywhere.toolbar_hint_shown", true);

# NoScript Preferences:
pref("capability.policy.maonoscript.javascript.enabled", "allAccess");
pref("capability.policy.maonoscript.sites", "about: chrome: resource:");
pref("noscript.ABE.enabled", false);
pref("noscript.ABE.notify", false);
pref("noscript.ABE.wanIpAsLocal", false);
pref("noscript.autoReload", false);
pref("noscript.confirmUnblock", false);
pref("noscript.contentBlocker", true);
pref("noscript.default", "about: chrome: resource:");
pref("noscript.firstRunRedirection", false);
pref("noscript.global", true);
pref("noscript.gtemp", "");
pref("noscript.opacizeObject", 3);
pref("noscript.forbidWebGL", true);
pref("noscript.forbidFonts", false);
pref("noscript.options.tabSelectedIndexes", "5,0,0");
pref("noscript.policynames", "");
pref("noscript.secureCookies", true);
pref("noscript.showAllowPage", false);
pref("noscript.showBaseDomain", false);
pref("noscript.showDistrust", false);
pref("noscript.showRecentlyBlocked", false);
pref("noscript.showTemp", false);
pref("noscript.showTempToPerm", false);
pref("noscript.showUntrusted", false);
pref("noscript.STS.enabled", false);
pref("noscript.subscription.lastCheck", -142148139);
pref("noscript.temp", "");
pref("noscript.untrusted", "");
pref("noscript.forbidMedia", false);
// Now handled by plugins.click_to_play
pref("noscript.forbidFlash", false);
pref("noscript.forbidSilverlight", false);
pref("noscript.forbidJava", false);
pref("noscript.forbidPlugins", false);
// Usability tweaks
pref("noscript.showPermanent", false);
pref("noscript.showTempAllowPage", true);
pref("noscript.showRevokeTemp", true);
pref("noscript.notify", false);
# Tor Launcher preferences (default bridges):
pref("extensions.torlauncher.default_bridge_recommended_type", "obfs3");

// Default bridges.
pref("extensions.torlauncher.default_bridge.obfs3.1", "obfs3 83.212.101.3:80 A09D536DD1752D542E1FBB3C9CE4449D51298239");
pref("extensions.torlauncher.default_bridge.obfs3.2", "obfs3 169.229.59.74:31493 AF9F66B7B04F8FF6F32D455F05135250A16543C9");
pref("extensions.torlauncher.default_bridge.obfs3.3", "obfs3 169.229.59.75:46328 AF9F66B7B04F8FF6F32D455F05135250A16543C9");
pref("extensions.torlauncher.default_bridge.obfs3.4", "obfs3 209.141.36.236:45496 58D91C3A631F910F32E18A55441D5A0463BA66E2");
pref("extensions.torlauncher.default_bridge.obfs3.5", "obfs3 208.79.90.242:35658 BA61757846841D64A83EA2514C766CB92F1FB41F");
pref("extensions.torlauncher.default_bridge.obfs3.6", "obfs3 109.105.109.163:38980 1E05F577A0EC0213F971D81BF4D86A9E4E8229ED");
pref("extensions.torlauncher.default_bridge.obfs3.7", "obfs3 109.105.109.163:47779 4C331FA9B3D1D6D8FB0D8FBBF0C259C360D97E6A");

pref("extensions.torlauncher.default_bridge.flashproxy.1", "flashproxy 0.0.1.0:1");
pref("extensions.torlauncher.default_bridge.flashproxy.2", "flashproxy 0.0.1.0:2");
pref("extensions.torlauncher.default_bridge.flashproxy.3", "flashproxy 0.0.1.0:3");
pref("extensions.torlauncher.default_bridge.flashproxy.4", "flashproxy 0.0.1.0:4");
pref("extensions.torlauncher.default_bridge.flashproxy.5", "flashproxy 0.0.1.0:5");

// <ipv4>
pref("extensions.torlauncher.default_bridge.fte.1", "fte 54.244.94.118:80 6E6298B85B171FEA4E36ADB15D6FF95DA0B37C89");
pref("extensions.torlauncher.default_bridge.fte.2", "fte 131.252.210.150:8080 0E858AC201BF0F3FA3C462F64844CBFFC7297A42");
pref("extensions.torlauncher.default_bridge.fte.3", "fte 128.105.214.161:8080 1E326AAFB3FCB515015250D8FCCC8E37F91A153B");
pref("extensions.torlauncher.default_bridge.fte.4", "fte 128.105.214.162:8080 FC562097E1951DCC41B7D7F324D88157119BB56D");
pref("extensions.torlauncher.default_bridge.fte.5", "fte 128.105.214.163:8080 A17A40775FBD2CA1184BF80BFC330A77ECF9D0E9");
pref("extensions.torlauncher.default_bridge.fte.6", "fte 79.125.3.12:8080 272465348803EE2546A9BB8EE37D462915531F09");
// </ipv4>

//pref("extensions.torlauncher.default_bridge.scramblesuit.1", "scramblesuit 188.40.121.112:39707 5DE8D363D8F150C99E1A2D7237368D614838132C password=L5POGQONBPS2HZUR6GXBIDS4CMIYYOTI");
//pref("extensions.torlauncher.default_bridge.scramblesuit.2", "scramblesuit 188.226.213.208:54278 AA5A86C1490296EF4FACA946CC5A182FCD1C5B1E password=MD2VRP7WXAMSG7MKIGMHI4CB4BMSNO7T");
//pref("extensions.torlauncher.default_bridge.scramblesuit.3", "scramblesuit 83.212.101.3:443 A09D536DD1752D542E1FBB3C9CE4449D51298239 password=XTCXLG2JAMJKZW2POLBAOWOQETQSMASH");
