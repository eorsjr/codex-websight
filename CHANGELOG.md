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