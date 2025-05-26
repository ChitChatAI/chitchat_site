export const initCustomCursor = () => {
  const cursor = document.createElement('div');
  // cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  const reactiveBg = document.querySelector('.mouse-reactive-bg');
  const bgElements = reactiveBg?.querySelectorAll('.bg-element') as NodeListOf<HTMLElement>;

  const updateCursor = (e: MouseEvent) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    bgElements?.forEach((el, index) => {
      const speed = (index + 1) * 0.05;
      el.style.transform = `translate(${e.clientX * speed}px, ${e.clientY * speed}px)`;
    });
  };

  const handleHover = (e: MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('hover-target')) {
      cursor.classList.add('hover');
    } else {
      cursor.classList.remove('hover');
    }
  };

  const handleClick = () => {
    cursor.classList.add('click');
    setTimeout(() => cursor.classList.remove('click'), 150);
  };

  if (window.innerWidth > 768) {
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mousedown', handleClick);
  }

  return () => {
    document.removeEventListener('mousemove', updateCursor);
    document.removeEventListener('mouseover', handleHover);
    document.removeEventListener('mousedown', handleClick);
    cursor.remove();
  };
};
