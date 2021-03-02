const imageCreator: Function = (source: string): HTMLImageElement => {
  var img = document.createElement("img");
  img.src = source;
  return img;
};

export default imageCreator;
