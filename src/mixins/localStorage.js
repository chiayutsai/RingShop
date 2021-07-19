export default {
  methods: {
    save(favorite) {
      const favoriteString = JSON.stringify(favorite);
      localStorage.setItem('customFavorite', favoriteString);
    },
    get() {
      return JSON.parse(localStorage.getItem('customFavorite'));
    },
    addMyFavorite(id) {
      if (this.myFavorite.includes(id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(id), 1);
      } else {
        this.myFavorite.push(id);
      }
      this.save(this.myFavorite);
      this.emitter.emit('update-favorite');
    },
  },

};
