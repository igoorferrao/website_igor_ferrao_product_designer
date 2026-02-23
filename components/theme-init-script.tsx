export function ThemeInitScript() {
  const script = `
(() => {
  try {
    const root = document.documentElement;

    const storedMode = localStorage.getItem('site_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const mode = storedMode === 'dark' || storedMode === 'light' ? storedMode : (prefersDark ? 'dark' : 'light');
    root.classList.toggle('dark', mode === 'dark');

    const storedColorTheme = localStorage.getItem('site_color_theme');
    const allowed = new Set(['nature', 'modern', 'claude']);
    if (storedColorTheme && allowed.has(storedColorTheme)) {
      root.dataset.theme = storedColorTheme;
    } else {
      delete root.dataset.theme;
    }
  } catch {}
})();
`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
