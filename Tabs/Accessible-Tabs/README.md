```markdown
# Accessible CSS-only Tabs

A small demo that implements tabbed content using only HTML and CSS (radio inputs + labels).  
This shows how to switch panels without JavaScript.

## Files
- `index.html` — demo HTML
- `style.css` — styles and layout
- `README.md` — this file

## How to use
1. Open `index.html` in your browser.
2. Click the tab labels to switch panels.
3. The demo uses `<input type="radio">` and `<label for="...">` to control which panel is displayed.

## Accessibility notes
- The pattern uses semantic roles: `role="tablist"`, `role="tab"` and `role="tabpanel"`.
- Keyboard navigation using Tab to focus labels works; however, arrow-key navigation between tabs and advanced focus management require JavaScript for full WAI-ARIA tab behavior. Document this limitation in the demo README so reviewers know it's intentional.
- Ensure focus-visible styles are present (they are in `style.css`).

## Contribution
- Add your name and GitHub handle to the "Contributed By" section if you submit this demo.
- Follow the repository CONTRIBUTING.md: fork → branch → add folder (`Tabs/Accessible-Tabs/`) → update top-level README index if needed → PR.

## Contributed by
- Your Name — https://github.com/itsmeananyasrivastava