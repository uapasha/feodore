export default {
  getEntityByName(content, name) {
    // TODO uapasha fix, reafactor.
    return content.filter(c => c.name === name)[0];
  }
}

