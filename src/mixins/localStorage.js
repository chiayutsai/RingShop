export default {
  methods: {
    saveLocalStorage(favorite) {
      const favoriteString = JSON.stringify(favorite);
      localStorage.setItem('customFavorite', favoriteString);
    },
    getLocalStorage() {
      return JSON.parse(localStorage.getItem('customFavorite'));
    },
    addMyFavorite(id) {
      if (this.myFavorite.includes(id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(id), 1);
        this.emitter.emit('push-message', {
          type: 'warning',
          message: '商品已從收藏清單移除',
        });
      } else {
        this.myFavorite.push(id);
        this.emitter.emit('push-message', {
          type: 'success',
          message: '商品已加入收藏清單',
        });
      }
      this.saveLocalStorage(this.myFavorite);
      this.emitter.emit('update-favorite');
    },
  },

};
