(() => {
  let v = [''], z = () => Math.round(Math.random());
  for(let i=0;i<4;i++) v.push(z());
  do {
    v.splice(0, 1); v.push(z());
    let o = '';
    v.forEach((element) => o+= element === 0 ? 'ズン' : 'ドコ、キヨシ！');
    document.write('<p>', o, '</p>');
  } while (String(v) !== String([0,0,0,0,1]));
})();
