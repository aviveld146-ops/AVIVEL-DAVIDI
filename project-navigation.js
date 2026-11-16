(() => {
  const worksLabel = /(?:חזרה\s+ל|לכל)\s*העבודות/;

  document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
      .project-return-link { font: 800 14px/1.2 Arial, sans-serif; text-decoration: none; }
      main > .project-return-link--top { display: inline-flex; width: fit-content; margin: 0 auto 28px 0; }
      .project-return-link--bottom { display: inline-flex; width: fit-content; margin: 48px auto 58px 0; padding: 12px 18px; border: 2px solid currentColor; border-radius: 999px; }
      .project-return-link--bottom:hover { opacity: .72; }
    `;
    document.head.append(style);

    const main = document.querySelector('main') || document.body;
    const links = [...document.querySelectorAll('a')];
    let topLink = links.find(link => worksLabel.test(link.textContent.trim()));

    if (topLink) {
      topLink.href = 'works.html';
    } else {
      topLink = document.createElement('a');
      topLink.href = 'works.html';
      topLink.textContent = 'חזרה לעבודות';
      main.prepend(topLink);
    }

    topLink.classList.add('project-return-link', 'project-return-link--top');

    if (!document.querySelector('.project-return-link--bottom')) {
      const bottomLink = document.createElement('a');
      bottomLink.className = 'project-return-link project-return-link--bottom';
      bottomLink.href = 'works.html';
      bottomLink.textContent = 'חזרה לעבודות';
      const footer = document.querySelector('footer');
      (footer || main).insertAdjacentElement('afterend', bottomLink);
    }
  });
})();
