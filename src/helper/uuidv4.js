class uuidv4 {
  id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  makeID() {
    return this.id.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 || 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      v.toString(16);
    });
  }
}

export default uuidv4;
