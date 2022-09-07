(function () {
  const height = document.body.scrollHeight;
  const width = document.body.scrollWidth;

  const generateCircle = () => {
    const randomHeight = Math.random() === 0 ? 0 : height / Math.random();
    const randomWidth = Math.random() === 0 ? 0 : width / Math.random();

    const newCircle = document.createElement('div');
    newCircle.offsetHeight = randomHeight;
    newCircle.offsetWidth = randomWidth;
    newCircle.className = 'circle';
    console.log({newCircle});
  };

  generateCircle();
})();
