export default {
  getEntityByName(content, name) {
    return content.filter(c => c.name === name)[0][name];
  },
};
