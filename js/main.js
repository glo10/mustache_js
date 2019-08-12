  const containerBox = document.getElementById('container')
  // get content in tag script
  const scriptContent = document.getElementById('content').innerHTML
  //html content before loading mustache content
  let containerContent = container.innerHTML
  const colorsBox = document.getElementById('colorsBox')
  //data insert to html
  let data = {
    title: 'Titre de niveau 1',
    paragraph1: 'ceci est un paragraphe',
    paragraph2: 'hello world',
    span: 'thank',
    mySection: {
      header: true,
      body: true,
      footer: false,
    },
    colors: ['bleu','gris','orange','vert','noir','marron']
  }
  //waiting before displays data
  setTimeout(() => {
    let render = Mustache.render(scriptContent, data, {colorsBox : colorsBox.innerHTML})
    containerBox.setAttribute('class', '')
    containerBox.innerHTML = render
  }, 3000)
