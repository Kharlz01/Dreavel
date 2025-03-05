Page({
  data: {
    places: [],
    origin: "",
    index: 0,
  },

  onSaveData(e){

    // Toma los datos del componente y almacena en el local
    this.setData({
      [`places[${this.data.index}]`]: e,
    })

    my.setStorageSync({
      key: "dataBase", data: this.data.places
    })

    // Redirige al home luego de guardar
    my.navigateTo({
      url: '/pages/index/index'
    })

  },

  onLoad(e) {
    // Llama los datos de local y asigna a variables
    let res = my.getStorageSync({
      key: 'dataBase'
    }).data;

    this.setData({
      places: res,
      index: e.data,
      origin: e.data ? "Guardar" : "Crear",
    });

  },

  uploadImage() {
    // Logic to upload an image
  },

  create() {
    // Logic to create the entry
  }
});