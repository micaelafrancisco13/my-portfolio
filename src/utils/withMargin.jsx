export function getComponentsWithMargin(contents, currentMargin) {
  let margin = currentMargin;

  const newComponents = contents.map((c, index) => {
    if (index === contents.length - 1) margin = 0;
    return {
      content: c,
      margin: `${margin}rem`,
    };
  });

  return newComponents;
}
