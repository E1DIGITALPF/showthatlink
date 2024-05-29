# Show That Link

**Show That Link** is a Chrome extension designed to reveal the real URL behind any link on a webpage. This is especially useful for identifying potentially malicious or fraudulent links before clicking on them.

## Features

- Displays the real URL of any link when you hover over it.
- Option to disable the extension on the current page to avoid interference during development or intensive link reading.
- Works in Progressive Web Apps (PWA) and with dynamically generated content.

## Installation

### From Source Code

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the folder where you downloaded the project.

### From the Chrome Web Store

[Download this extension](https://chromewebstore.google.com/detail/show-that-link/ihapnoabdilbmjicobokjkpanipkjimo)

## Usage

1. Install the extension as described in the installation section.
2. Navigate to any webpage.
3. Hover over any link to see the real URL in a small popup.
4. To disable the functionality on the current page, click on the extension icon and use the toggle switch to enable/disable the extension.

## Project Structure

```
Show-That-Link/
├── manifest.json
├── content.js
├── popup.js
├── popup.html
├── popup.css
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

### Files

- **manifest.json**: Main configuration file for the extension.
- **content.js**: Content script that handles the logic for displaying the real URL.
- **popup.js**: Script that handles the logic for the extension's popup.
- **popup.html**: HTML for the extension's popup.
- **popup.css**: CSS styles for the popup.
- **icons/**: Extension icons in various sizes.

## Development

To contribute to the development of this extension:

1. Fork this repository.
2. Create a branch for the feature you want to add (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.
