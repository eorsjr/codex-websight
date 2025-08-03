# [2.0.0-rc.4](https://github.com/eorsjr/codex-websight/compare/v2.0.0-rc.3...v2.0.0-rc.4) (2025-08-03)


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



# [2.0.0-rc.3](https://github.com/eorsjr/codex-websight/compare/v2.0.0-rc.2...v2.0.0-rc.3) (2025-08-02)


### Bug Fixes

* **buttons:** :pencil2: replace common-button with button ([0b71323](https://github.com/eorsjr/codex-websight/commit/0b71323c838ae3c6da0fcca2b9625f1c60d9594b))
* **card:** :bug: add border-radius to clickable-image ([910dd82](https://github.com/eorsjr/codex-websight/commit/910dd822e36b5e17f430d6ffbf90f035e1c5ae10))


### Code Refactoring

* **elevation:** :fire: remove ElevationService ([92a38a7](https://github.com/eorsjr/codex-websight/commit/92a38a7fc49cff0e38c6d05104fb1125d443825a))
* **layout:** :zap: refine scrolling with fixed body and scrollable pane ([4e82f2f](https://github.com/eorsjr/codex-websight/commit/4e82f2f58de2e98ccbb5f378fa33121bb5f0041e))


### Features

* **lightbox:** :lipstick: set text color to white ([4882eb5](https://github.com/eorsjr/codex-websight/commit/4882eb5f3447bf375f6cfcf5fe3def5b3d99c645))
* **scrim:** remove blur effect ([f16d6dc](https://github.com/eorsjr/codex-websight/commit/f16d6dc0e1851a8ced0ca544ced027bc9a06b8e8))


### BREAKING CHANGES

* **elevation:** `ElevationService` is now removed. Any code that relies on the service will no longer function.
* **layout:** - The global scrolling behavior has changed: `<body>` is now fixed, and main content scrolling occurs within the pane component.
- The `ScrollingService` has been completely rewritten; direct calls to its previous functions will need to be updated.
- Any code that relied on `<body>` element's scroll position or behavior (e.g., `window.scrollY`) will no longer function as expected and must be updated to target the pane.
- The pane component is now referenced as `cxw-pane` instead of `.pane`.



# [2.0.0-rc.2](https://github.com/eorsjr/codex-websight/compare/v2.0.0-rc.1...v2.0.0-rc.2) (2025-07-26)


### Bug Fixes

* **FAB:** :lipstick: adjust icon size for large FAB ([fdee818](https://github.com/eorsjr/codex-websight/commit/fdee8182eda8840756336cb61ef284ced0a6eeca))


### Features

* **card:** :lipstick: add border-radius to card images ([41a652a](https://github.com/eorsjr/codex-websight/commit/41a652a2212707c2081e441c57d3210883b1a06e))



# [2.0.0-rc.1](https://github.com/eorsjr/codex-websight/compare/v2.0.0-beta.2...v2.0.0-rc.1) (2025-07-19)


### Code Refactoring

* **components:** :art: use descriptive BEM modifiers for visibility ([da8d25b](https://github.com/eorsjr/codex-websight/commit/da8d25b51b266b4df370b55044cce808744c263a))
* **scrim:** :building_construction: centralize scrim logic into a generic service ([65ba92d](https://github.com/eorsjr/codex-websight/commit/65ba92d5cd0f7f19549704f0a894b6b0afe080b2))


### BREAKING CHANGES

* **scrim:** The `ScrimService` API has changed. Consumers must use the new `show()` and `hide()` methods instead of directly manipulating service properties.
* **components:** The generic `.remove` and `.show` classes for controlling component visibility have been removed. They are replaced with specific BEM modifiers like `--hidden` or `--visible`.



# [2.0.0-beta.2](https://github.com/eorsjr/codex-websight/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2025-07-17)


### Code Refactoring

* **components:** :art: adopt BEM naming convention ([f1dcf3c](https://github.com/eorsjr/codex-websight/commit/f1dcf3c3d6c5dcc788e927b83a8834f268d2b6a5))
* **navigation:** :art: overhaul component structure and adopt BEM ([94703e5](https://github.com/eorsjr/codex-websight/commit/94703e5d9e394a120d671d782fea40b0c0009f93))


### BREAKING CHANGES

* **navigation:** This commit introduces several breaking changes.
- All CSS class names within navigation components have been updated.
- The `NavigationComponent` and its selector have been removed.
- The `FlexibleNavigationBarComponent` has been renamed to
  `NavigationBarComponent`. All imports and template usages must be updated.
* **components:** CSS class names across multiple components have been renamed to follow BEM. All HTML templates using these components must be updated to use the new class names.



# [2.0.0-beta.1](https://github.com/eorsjr/codex-websight/compare/v2.0.0-alpha.2...v2.0.0-beta.1) (2025-07-15)


### Bug Fixes

* **lightbox:** :bug: remove scroll control from lightbox service ([07954e8](https://github.com/eorsjr/codex-websight/commit/07954e8faeec678aa9aed48ede69e249fda8ae59))
* **lightbox:** :bug: reset current image index on lightbox close ([b6dffac](https://github.com/eorsjr/codex-websight/commit/b6dffac55c44c0f486b1b61ffe9f6d6038c682c8))
* **lightbox:** :bug: reset images array on lightbox close ([2da159a](https://github.com/eorsjr/codex-websight/commit/2da159a3a8737bb1819fdefcfe969017382548a7))
* **scrim:** :bug: toggle scrolling based on scrim visibility ([e8528c2](https://github.com/eorsjr/codex-websight/commit/e8528c21fce9bb3c4e8df5b16f2e04203f28606b))



# [2.0.0-alpha.2](https://github.com/eorsjr/codex-websight/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2025-07-13)


### Bug Fixes

* **navigation:** :bug: hide scrim before closing the navigation rail ([15837c6](https://github.com/eorsjr/codex-websight/commit/15837c6e079e26343082e6e342e12204aa540fa6))


### Features

* :lipstick: update color tokens ([e8d49b2](https://github.com/eorsjr/codex-websight/commit/e8d49b24b6ae13f3813e0d40393db2aa9599be2c))
* :sparkles: introduce basic dialog component ([6bf69f3](https://github.com/eorsjr/codex-websight/commit/6bf69f3bfcdd3b3a68ab068618615cc2b2f388e2))
* **App Bar:** :sparkles: add basic dialogs to switch theme and font ([de85a3e](https://github.com/eorsjr/codex-websight/commit/de85a3e7636eecfea13d739477d760ea76c0c8ad))
* **buttons:** :lipstick: update color animations ([df96d81](https://github.com/eorsjr/codex-websight/commit/df96d8136531f24d08a5b40c924181870dc8e907))
* **buttons:** :sparkles: introduce FAB (floating action button) component ([7e5d629](https://github.com/eorsjr/codex-websight/commit/7e5d629fad20269adc0330267a68817cc662f2a9))
* **FAB:** :sparkles: add scroll to top FAB ([e4f1d95](https://github.com/eorsjr/codex-websight/commit/e4f1d95f63186c7d4c76deaa6be23640d3a80efa))


### BREAKING CHANGES

* **App Bar:** Functions switchTheme() and switchFont() are replaced with switchToTheme() and switchToFont() in ThemeService. Intermediary functions in App Bar logic are also removed; use service functions directly instead.



# [2.0.0-alpha.1](https://github.com/eorsjr/codex-websight/compare/v1.0.0...v2.0.0-alpha.1) (2025-07-10)


### Bug Fixes

* **seo:** :memo: add missing meta description to index.html ([200c264](https://github.com/eorsjr/codex-websight/commit/200c2649fc7140ce604e7e83757f491ba5a7cbc9))


### Code Refactoring

* :recycle: flatten component DOM + update styling hooks ([7498ced](https://github.com/eorsjr/codex-websight/commit/7498cedd693b2cb7f8b11cd171fd8231933ccb2a))
* :recycle: replace eui- component selectors with cxw- ([b5cb82d](https://github.com/eorsjr/codex-websight/commit/b5cb82dbf8be5bf506f46b50434d7a10de1d31da))


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