const article = document.querySelector("[data-reader]");
const status = document.querySelector("[data-reader-status]");
const progress = document.querySelector("[data-reading-progress]");

const escapeHtml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const inlineMarkdown = (value) =>
  escapeHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

const renderMarkdown = (markdown) => {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const output = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      index += 1;
      continue;
    }

    if (/^\s*---\s*$/.test(line)) {
      output.push("<hr />");
      index += 1;
      continue;
    }

    if (line.startsWith(">")) {
      const quoteLines = [];
      while (index < lines.length && lines[index].startsWith(">")) {
        quoteLines.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      const quoteHtml = quoteLines
        .reduce((parts, quoteLine) => {
          if (!quoteLine.trim()) return parts;
          parts.push(`<p>${inlineMarkdown(quoteLine)}</p>`);
          return parts;
        }, [])
        .join("");
      output.push(`<blockquote class="world-log">${quoteHtml}</blockquote>`);
      continue;
    }

    output.push(`<p>${inlineMarkdown(line)}</p>`);
    index += 1;
  }

  return output.join("\n");
};

const updateProgress = () => {
  if (!progress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
  progress.style.width = `${percentage}%`;
};

const loadEpisode = async () => {
  if (!article) return;
  const source = article.dataset.source;
  try {
    const response = await fetch(source, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    article.innerHTML = renderMarkdown(markdown);
    article.classList.add("is-loaded");
    status?.remove();
    updateProgress();
  } catch (error) {
    if (status) {
      status.classList.add("is-error");
      status.innerHTML = "本文を読み込めませんでした。ローカルサーバー経由で開いてください。<code>python -m http.server 4173</code>";
    }
    console.error("Failed to load episode markdown:", error);
  }
};

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
loadEpisode();
