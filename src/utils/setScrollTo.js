const setScrollTo = value => {
  window.scrollTo({
    top: value,
    behavior: 'smooth',
  });
};

export { setScrollTo };
