# [2.0.0](https://github.com/eorsjr/codex-websight/compare/v1.0.0...v2.0.0) (2025-08-10)


### Features

* **dialog:** :dizzy: add animated transitions ([d30278c](https://github.com/eorsjr/codex-websight/commit/d30278ce8073d939b3876438970423baa76a59eb))
* **fonts:** :zap: self-host web fonts for performance ([6eb0cc8](https://github.com/eorsjr/codex-websight/commit/6eb0cc80ec4e34de446724be419ae9694f5c8c81))
* **navigation:** :sparkles: centralize navigation item management ([fb66105](https://github.com/eorsjr/codex-websight/commit/fb6610521465ae5cb9117309cd0e39a59c43cb43))



# 2.0.0-rc.8 (2025-08-09)


### Bug Fixes

* **fab:** :bug: fix positioning ([3ca737a](https://github.com/eorsjr/codex-websight/commit/3ca737a4a907f6c404c24192ccd3eaf40e49ff5a))
* **navigation-bar:** :bug: fix navigation item spacing ([61963d4](https://github.com/eorsjr/codex-websight/commit/61963d47b73c6cbefc7b816496917948949d5ed0))
* **navigation-bar:** :bug: update z-index ([066d6f5](https://github.com/eorsjr/codex-websight/commit/066d6f57b6c7b69fbe32fa76ce81e64f295f041e))


### Code Refactoring

* :truck: rename ScrollingService to ScrollService ([82b6b15](https://github.com/eorsjr/codex-websight/commit/82b6b158d4b4613402cabf6ee330ab674ed8989d))
* **theme:** :truck: rename functions in ThemeService ([bfef99b](https://github.com/eorsjr/codex-websight/commit/bfef99bfae23cef45fcddd86b5e20634bab4ec59))


### Features

* **animation:** :dizzy: use motion tokens and state layers ([c9cbfe6](https://github.com/eorsjr/codex-websight/commit/c9cbfe605905f1e43f9ff642b3abc2b19fceb124))
* **tokens:** :sparkles: introduce motion tokens ([67e96ca](https://github.com/eorsjr/codex-websight/commit/67e96ca8615c0afb6be7b8d45008c2eb42fcbfeb))


### BREAKING CHANGES

* **theme:** The ThemeService has been refactored. The following functions have been renamed:

- `setInitialTheme()` is now `initColorPalette()`
- `setIntitialFont()` is now `initFont()`
- `setIntialColorScheme()` is now `initColorScheme()`
- `switchToTheme()` is now `switchToColorPalette()`
* ScrollingService has been renamed to ScrollService.



# 2.0.0-rc.7 (2025-08-05)


### Bug Fixes

* **a11y:** :wheelchair: add missing ARIA roles to dialogs ([4c614ab](https://github.com/eorsjr/codex-websight/commit/4c614ab5faa97b5e8e974d450c0f1540847bba4e))
* **a11y:** :wheelchair: remove ARIA role from app-bar ([00632e6](https://github.com/eorsjr/codex-websight/commit/00632e66eb998a9e9154263322aba2a1000406e1))



# 2.0.0-rc.6 (2025-08-04)


### Bug Fixes

* **slideshow:** :bug: replace clearTimeout with clearInterval ([e308317](https://github.com/eorsjr/codex-websight/commit/e3083175d973d6f5c9530d2f833b364a856a87ac))


### Code Refactoring

* **lightbox:** :dizzy: refine image fade transition and BEM naming ([0e80e00](https://github.com/eorsjr/codex-websight/commit/0e80e00e6952c23d501a75029cd381290f304d79))


### BREAKING CHANGES

* **lightbox:** - External CSS targeting `.lightbox__image.fade-in` will no longer apply. Update selectors to `.lightbox__image--fade-in`.
- Any external CSS targeting `div.lightbox__caption` will no longer apply. Update selectors to `span.lightbox__caption` or `.lightbox__caption` to match the new element.



# 2.0.0-rc.5 (2025-08-03)



# 2.0.0-rc.4 (2025-08-03)


### Code Refactoring

* **navigation-rail:** :lipstick: update layout and adjust colors ([58c5d9e](https://github.com/eorsjr/codex-websight/commit/58c5d9e17bd697cc7f8d93242d110c4ddb5be29a))
* **styles:** :truck: rename token related css files ([e841354](https://github.com/eorsjr/codex-websight/commit/e841354d1677336c23ce9e8b94b6627e0718c366))


### Features

* **a11y:** :wheelchair: add ARIA roles to lightbox buttons ([bce827d](https://github.com/eorsjr/codex-websight/commit/bce827d763b00caa48419990a3f2af1c327593f3))
* **a11y:** :wheelchair: add ariaCurrentWhenActive to navigation items ([1a04d12](https://github.com/eorsjr/codex-websight/commit/1a04d12f9fe6dc87a8af0690ca77b0435d32893d))
* **a11y:** :wheelchair: add option to attach aria-label to basic-dialog ([1e7efd9](https://github.com/eorsjr/codex-websight/commit/1e7efd9ead05fe6550e7c3551314c52540b8cfef))
* **a11y:** :wheelchair: improve scrim accessibility ([2d3dd32](https://github.com/eorsjr/codex-websight/commit/2d3dd329fa5f7e6cf466441cf8cab12d78cdfbb4))
* **a11y:** :wheelchair: update App Bar with ARIA roles and labels ([0ac3342](https://github.com/eorsjr/codex-websight/commit/0ac3342d9b4208673c9d8469dff4725fa276a182))
* **a11y:** :wheelchair: update app component with ARIA roles and labels ([8165c40](https://github.com/eorsjr/codex-websight/commit/8165c40ddc8a20bd4d55619794b384c6bc0f4686))


### BREAKING CHANGES

* **navigation-rail:** The menu button is removed from the Navigation Rail. Use the scrim to close instead.
* **styles:** Rename custom-shape-tokens.css to shape-tokens.css. Rename custom-elevation-levels.css to elevation-level-tokens.css.



# 2.0.0-rc.3 (2025-08-02)


### Bug Fixes

* **buttons:** :pencil2: replace common-button with button ([3b35dde](https://github.com/eorsjr/codex-websight/commit/3b35dde79643a68570d25cf59e87792e689028a7))
* **card:** :bug: add border-radius to clickable-image ([4acf20d](https://github.com/eorsjr/codex-websight/commit/4acf20d6d0f7a55fde0302a1d7047aa1f77d8d76))


### Code Refactoring

* **elevation:** :fire: remove ElevationService ([0e8717e](https://github.com/eorsjr/codex-websight/commit/0e8717e9e73f1c24a4784bf7d1addbe586bd4dbc))
* **layout:** :zap: refine scrolling with fixed body and scrollable pane ([90e4c05](https://github.com/eorsjr/codex-websight/commit/90e4c05c3e426f41e0d080b6c71f32647bc90506))


### Features

* **lightbox:** :lipstick: set text color to white ([dad268f](https://github.com/eorsjr/codex-websight/commit/dad268f579705b3c091a070070998cf5edaaf752))
* **scrim:** remove blur effect ([4748ef6](https://github.com/eorsjr/codex-websight/commit/4748ef6373d2125e0756f0299c8140214e996e19))


### BREAKING CHANGES

* **elevation:** `ElevationService` is now removed. Any code that relies on the service will no longer function.
* **layout:** - The global scrolling behavior has changed: `<body>` is now fixed, and main content scrolling occurs within the pane component.
- The `ScrollingService` has been completely rewritten; direct calls to its previous functions will need to be updated.
- Any code that relied on `<body>` element's scroll position or behavior (e.g., `window.scrollY`) will no longer function as expected and must be updated to target the pane.
- The pane component is now referenced as `cxw-pane` instead of `.pane`.



# 2.0.0-rc.2 (2025-08-02)


### Bug Fixes

* **FAB:** :lipstick: adjust icon size for large FAB ([64c0f6d](https://github.com/eorsjr/codex-websight/commit/64c0f6d91110891dc1a776951ed6800ebdcfd6d1))


### Features

* **card:** :lipstick: add border-radius to card images ([bc6ec5e](https://github.com/eorsjr/codex-websight/commit/bc6ec5eca66873aa5d91c010254eab279c889ec2))



# 2.0.0-rc.1 (2025-08-02)


### Code Refactoring

* **components:** :art: use descriptive BEM modifiers for visibility ([44267da](https://github.com/eorsjr/codex-websight/commit/44267da9ae8b0a88f846da965e48c6aeb110af58))
* **scrim:** :building_construction: centralize scrim logic into a generic service ([7d1377d](https://github.com/eorsjr/codex-websight/commit/7d1377deac66b5d7cb77da00722bfcd51d9641f8))


### BREAKING CHANGES

* **scrim:** The `ScrimService` API has changed. Consumers must use the new `show()` and `hide()` methods instead of directly manipulating service properties.
* **components:** The generic `.remove` and `.show` classes for controlling component visibility have been removed. They are replaced with specific BEM modifiers like `--hidden` or `--visible`.



# 2.0.0-beta.2 (2025-08-02)


### Code Refactoring

* **components:** :art: adopt BEM naming convention ([929f8e9](https://github.com/eorsjr/codex-websight/commit/929f8e9fd66bb7937563e2eb182c489a23ebb09f))
* **navigation:** :art: overhaul component structure and adopt BEM ([d531fbf](https://github.com/eorsjr/codex-websight/commit/d531fbf9a73a52c41a65d01f5c6df936895f5190))


### BREAKING CHANGES

* **navigation:** This commit introduces several breaking changes.
- All CSS class names within navigation components have been updated.
- The `NavigationComponent` and its selector have been removed.
- The `FlexibleNavigationBarComponent` has been renamed to
  `NavigationBarComponent`. All imports and template usages must be updated.
* **components:** CSS class names across multiple components have been renamed to follow BEM. All HTML templates using these components must be updated to use the new class names.



# 2.0.0-beta.1 (2025-08-02)


### Bug Fixes

* **lightbox:** :bug: remove scroll control from lightbox service ([c792d36](https://github.com/eorsjr/codex-websight/commit/c792d3625639be78fc353e86bdb33df1f5f09bad))
* **lightbox:** :bug: reset current image index on lightbox close ([b7ad899](https://github.com/eorsjr/codex-websight/commit/b7ad899cdde58924d8d89c82cd74f52d20a752d4))
* **lightbox:** :bug: reset images array on lightbox close ([414e9dd](https://github.com/eorsjr/codex-websight/commit/414e9ddd221adf97c444f86684e56bdaf99ff537))
* **scrim:** :bug: toggle scrolling based on scrim visibility ([98f5cb4](https://github.com/eorsjr/codex-websight/commit/98f5cb44286c4555709cd06e1be11d9a9de0f721))



# 2.0.0-alpha.2 (2025-08-02)


### Bug Fixes

* **navigation:** :bug: hide scrim before closing the navigation rail ([028c1fd](https://github.com/eorsjr/codex-websight/commit/028c1fd814fc10580720b3da5e92dc414e553fce))


### Features

* :lipstick: update color tokens ([1a54b31](https://github.com/eorsjr/codex-websight/commit/1a54b312d7f64fb93f15f3a7e0f978a2e4aa5c1c))
* :sparkles: introduce basic dialog component ([318144f](https://github.com/eorsjr/codex-websight/commit/318144f9ac870d3c8343d938471c14b641bab323))
* **App Bar:** :sparkles: add basic dialogs to switch theme and font ([e17bca7](https://github.com/eorsjr/codex-websight/commit/e17bca7a57909e53dc4399e5c5fd4a85afc200b1))
* **buttons:** :lipstick: update color animations ([bd54138](https://github.com/eorsjr/codex-websight/commit/bd541386b1530a4cc480b4d69e753408a17287e5))
* **buttons:** :sparkles: introduce FAB (floating action button) component ([c7b63eb](https://github.com/eorsjr/codex-websight/commit/c7b63eb6c9642acc214d4c82d409c3383199f725))
* **FAB:** :sparkles: add scroll to top FAB ([1c57c7c](https://github.com/eorsjr/codex-websight/commit/1c57c7cd1f5bba4609c4bc4b6de1bfd6731cf9c6))


### BREAKING CHANGES

* **App Bar:** Functions switchTheme() and switchFont() are replaced with switchToTheme() and switchToFont() in ThemeService. Intermediary functions in App Bar logic are also removed; use service functions directly instead.



# 2.0.0-alpha.1 (2025-08-02)


### Bug Fixes

* **seo:** :memo: add missing meta description to index.html ([cea768c](https://github.com/eorsjr/codex-websight/commit/cea768c0baebf7bf2338289cfe467c359436127e))


### Code Refactoring

* :recycle: flatten component DOM + update styling hooks ([79df9e4](https://github.com/eorsjr/codex-websight/commit/79df9e4a99d304ac3d2c35bc956a9fcb8aa6839d))
* :recycle: replace eui- component selectors with cxw- ([3ea10d4](https://github.com/eorsjr/codex-websight/commit/3ea10d4491ec640da43165480a45c43f5ee9c399))


### BREAKING CHANGES

* replace eui- component selectors with cxw-
* External CSS targeting old internal component wrappers (e.g., .card) will break. Update affected CSS to target host elements (e.g., `eui-card`).



# [1.0.0](https://github.com/eorsjr/codex-websight/compare/c02957d60b2e1b27e1a4171f7833fae34b3ed37a...v1.0.0) (2025-07-06)


:tada: First public release of **EUI Web**

### Features

**Components**
- `App Bar`
- `Button`
- `Icon Button`
- `Card`
- `Navigation Bar`
- `Navigation Rail`
- `Pane`
- `Scrim`

**Extras**
- `Copy Table`
- `Image Grid`
- `Lightbox`
- `Slideshow`
- `Toggle Color Palette`
- `Toggle Color Scheme`
- `Toggle Font`



