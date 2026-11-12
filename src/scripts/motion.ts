// Section entrances. Each entry tags elements with the animation they play the
// first time they scroll into view; the keyframes live in overrides.css.
//
// Nothing is hidden until this script has run, so a page without scripts shows
// everything. Elements already on screen at load are left alone, so nothing
// visible blinks out and back.

type Entry = {
  selector: string;
  animation: 'heading' | 'rise' | 'pop' | 'grow' | 'wipe' | 'wipe-up' | 'settle' | 'tilt' | 'draw' | 'bar';
  /** Delay each match after the one before it, counted within its parent. */
  stagger?: boolean;
  /** For "bar": where the red bar sits in the illustration, from top and bottom. */
  bar?: [top: string, bottom: string];
};

const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 5;

const plan: Entry[] = [
  // Section headings share one entrance so the page keeps a rhythm.
  { selector: '.centered-heading, .centered-heading-3, .heading-with-sub', animation: 'heading' },
  { selector: '.centered-subheading-copy', animation: 'rise' },

  // Five signs: a list, so it arrives as one, icon first.
  { selector: '.services-grid .services-cdp', animation: 'rise', stagger: true },
  { selector: '.services-grid .pricing-image', animation: 'pop' },

  // Reach: the map and the logo wall are drawn across, left to right.
  { selector: '.image-7, .image-6', animation: 'wipe' },
  { selector: '.clients-caption', animation: 'rise' },

  // The slider moves as one piece: cards on later pages are off screen, and
  // tagging them one by one would leave them waiting to be seen.
  { selector: '.testimonial-slider', animation: 'rise' },

  // Services and values columns, then each illustration in its own way: the
  // worker opens from his red bar like the hero, the compass swings to rest,
  // the fingerprint is pressed on from the bottom.
  { selector: '.features-table .services-cdp', animation: 'rise', stagger: true },
  { selector: '.image-13', animation: 'bar', bar: ['26%', '65%'] },
  { selector: '#philosophy .services-cdp:nth-child(1) img', animation: 'settle' },
  { selector: '#philosophy .services-cdp:nth-child(2) img', animation: 'pop' },
  { selector: '#philosophy .services-cdp:nth-child(3) img', animation: 'wipe-up' },

  // The magazine cover is dropped onto the red, then its text follows.
  { selector: '.testimonial-image-four', animation: 'tilt' },
  { selector: '.testimonial-right > *', animation: 'rise', stagger: true },

  { selector: '.paragraph-10', animation: 'rise' },
  { selector: '.container-35 img', animation: 'settle' },

  { selector: '.team-card', animation: 'rise', stagger: true },
  { selector: '.team-member-image', animation: 'grow' },

  { selector: '.footer-brand, .form-block', animation: 'rise', stagger: true },

  // Case studies
  { selector: '.container-20 > *', animation: 'rise', stagger: true },
  { selector: '.image-9, .image-12', animation: 'wipe' },
  { selector: '.container-21 > *, .container-25 > *', animation: 'rise', stagger: true },
  { selector: '.paragraph-8', animation: 'rise' },
  { selector: '.case-steps > li', animation: 'rise', stagger: true },
  { selector: '.image-11', animation: 'pop' },
  { selector: '.heading-19, .text-block-14, .case-cta', animation: 'rise' },
  { selector: '.divider', animation: 'draw' },

  // Blog
  { selector: '.blog-list li', animation: 'rise', stagger: true },
];

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
);

for (const { selector, animation, stagger, bar } of plan) {
  const perParent = new Map<Element | null, number>();

  for (const element of document.querySelectorAll<HTMLElement>(selector)) {
    if (element.dataset.animate) continue;
    if (element.getBoundingClientRect().top < window.innerHeight) continue;

    element.dataset.animate = animation;
    if (bar) {
      element.style.setProperty('--bar-top', bar[0]);
      element.style.setProperty('--bar-bottom', bar[1]);
    }
    if (stagger) {
      const index = perParent.get(element.parentElement) ?? 0;
      perParent.set(element.parentElement, index + 1);
      element.style.setProperty('--delay', `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
    }
    observer.observe(element);
  }
}
