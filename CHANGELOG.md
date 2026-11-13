# 1.4.2

- Round the top corners of the panel header and the bottom corners of the footer so they match the panel outline.

# 1.4.1

- Changing **Language** now updates the panel, Settings tab and command palette entry immediately. Note templates still at their default follow the new language; customized templates are kept.
- Default open shortcut is now **Ctrl+Shift+Comma** (matched by physical key, so Shift does not change it). A saved custom shortcut is kept.
- The **Version Studio…** menu entry shows its shortcut on the right in grey, like Roam's own **Add version**.
- New README for Roam Depot.
- Release package contains only `extension.js`, `README.md` and `CHANGELOG.md`.

# 1.4.0

- Interface available in English, Chinese, French, Italian, German and Spanish: panel, buttons, tooltips, status and error messages, command palette entry and Settings tab.
- New **Language** setting. Auto (default) follows the browser language and falls back to English.
- New revision notes use the selected language's default titles and templates. Notes created in any supported language, and legacy `修改说明` notes, are still recognized. Saved templates are unchanged.
- Dates follow the selected language.
- README in six languages, with links to Folio and Reading Desk.

# 1.3.3

- Highlight the current version (the draft displayed in the original block): accent left bar, tinted card, accent version number and a filled Current badge. Works in light and dark mode; uses `--mag-accent` when the theme defines it.
- Show **Current: Vn** in the header; click it to scroll to that version. When the current version cannot be identified, the header says so.
- Mark the current version as `(current)` in the source and baseline menus.
- The highlight follows version creation and native switching (Use in original block). No new reads or writes.

# 1.3.2

- Remove the disabled deletion control, its hover explanation and the unavailable-feature section from the current README.
- Remove the unused control state. Keep existing version editing, creation, comparisons, navigation and toolbar layout.

# 1.3.1

- Withdraw the unverified single-version deletion introduced in 1.3.0. The generic block-deletion API failed on a native version in the live graph; its implementation can expand deletion to other versions in the group.
- Remove the unsafe deletion handler and confirmation flow. Show a disabled Delete unavailable control with a clear explanation; it makes no graph writes.
- Retain the two-row toolbar, accurate action labels and all previously working functionality.
- Add a regression guard for no deletion calls, even if the disabled control is forcibly enabled.

# 1.3.0

- Add Delete version with an inline descendant-count confirmation and explicit permanent-delete action.
- Before deleting the displayed version, switch to a surviving native version and verify the switch. Keep the last remaining version.
- Use the public block deletion API; verify target removal and surviving version relationships, repair deleted-origin/baseline/source selections and recalculate timeline differences.
- Separate header controls into creation/view and comparison/refresh rows with responsive wrapping.
- Rename version actions to describe copying, baseline comparison, native selection and navigation accurately; add hover help.
- Preserve on-demand editor mounting and data reads; deletion checks run only on explicit actions.

# 1.2.0

- Keep native Add version and insert Version Studio immediately below it; allow native menu dismissal before opening the panel.
- Anchor original autocomplete results below the current native input, reset transforms, reacquire rerendered inputs, and constrain available popup height.
- Remove the redundant Edit action; click native content directly.
- Separate Compare children from Include children in new version; default to copying descendants, exclude revision notes, and verify copied parent relationships.
- Focus the newly created version at the end of its text.
- Add saved oldest/newest display order while preserving chronological timeline predecessors and baseline comparison.
- Close on outside pointer clicks; preserve autocomplete interactions and active writes.
- Add Open shortcut to extension settings (default Alt+Shift+V; empty disables it).

# 1.1.0

- Recognize numbered version bullets as well as ordinary bullets; replace the native Add version entry in place.
- Narrow and align the panel; use Magazine theme tokens with fallbacks and scope layout overrides.
- Default to chronological adjacent-version diffs; retain fixed-baseline comparison.
- Correct native editor focus using its actual render-window ID and promote the original autocomplete popup above the panel.
- Add configurable reason/evidence templates in the panel and extension settings; preserve legacy note titles.
- Replace isolated block navigation with verified native version selection in its parent context.
- Keep startup/import/unload lifecycle and on-demand data/editor/worker behavior.

# 1.0.1

- Package as a Roam Depot developer extension with extension.js and lifecycle hooks.
