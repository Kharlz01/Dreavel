Page({
  data: {
    places: [],
    infoData: {},
    indexer: 0
  },

  deletePlace(e){
    // console.log(e);
    // console.log(this.data.places);
    const newPlaces = this.data.places.slice();
    
    newPlaces.splice(e, 1);

    // console.log(this.data.places);
    // console.log(newPlaces);

    my.setStorageSync({
      key: "dataBase", data: newPlaces,
    })
    
    my.navigateTo({
      url: '/pages/index/index'
    })
  },

  onLoad(e) {
    let res = my.getStorageSync({
      key: 'dataBase'
    }).data;

    let ind = e.data;
    
    this.setData({
      places: res,
      infoData: res[ind],
      indexer: ind,
    })
  },
});
