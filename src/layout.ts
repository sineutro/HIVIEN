type DocumentMetadata = {
  title: string
  description: string
  path?: string
}

type RenderLayoutOptions = DocumentMetadata & {
  body: string
  scripts?: string[]
}

const SITE_URL = 'https://hivien.com'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function normalizePath(path = '/') {
  if (!path.startsWith('/')) return `/${path}`
  return path
}

function renderHeadMetadata({ title, description, path = '/' }: DocumentMetadata) {
  const normalizedPath = normalizePath(path)
  const canonicalUrl = `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`
  const safeTitle = escapeHtml(title)
  const safeDescription = escapeHtml(description)

  return `  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${safeTitle}</title>
  <meta name="description" content="${safeDescription}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Hivien" />
  <meta property="og:title" content="${safeTitle}" />
  <meta property="og:description" content="${safeDescription}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${safeTitle}" />
  <meta name="twitter:description" content="${safeDescription}" />`
}

function renderStyleIncludes() {
  return `  <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet" />
  <link href="/static/style.css" rel="stylesheet" />`
}

function renderScriptIncludes(scripts: string[] = []) {
  return scripts.map((src) => `\n<script src="${src}"></script>`).join('')
}

export function renderLayout({ title, description, path, body, scripts = [] }: RenderLayoutOptions) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
${renderHeadMetadata({ title, description, path })}
${renderStyleIncludes()}
</head>
<body>
${body}${renderScriptIncludes(scripts)}
</body>
</html>`
}
