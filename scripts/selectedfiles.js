function processSelectedFiles(fileInput) {
  const files = fileInput.files
  let result = []
  for (let i = 0; i < files.length; i++) {
    result.push(files[i].name)
  }
  result.join(',')
  document.querySelector('.form__item_el_file').innerText = result
}