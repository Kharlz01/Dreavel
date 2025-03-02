Page({

  // Datos, en caso de ser primera vez asignar el arreglo de prueba
  data: {
    // places:[
    //   { name: 'Cuba', status: 'V', description: 'Un lugar bonito', pic: "" },
    //   { name: 'Paris', status: 'P', description: 'Un lugar romantico', pic: "" },
    //   { name: 'Roma', status: 'P', description: 'Muy italiano', pic: "" },
    // ],
    places: [],
  },

  // Funcion que muestra los detallles del lugar
  showDetails(e) {
    my.navigateTo({
      url: '/pages/cardInfo/cardInfo?data='+e
    })
  },

  // Funcion para agregar un nuevo lugar
  addDestination() {
    my.navigateTo({
      url: "../../pages/edit/edit?data="+this.data.places.length
    })
  },

  onLoad(query) {

    // // En caso de querer guardar informacion se descomenta el 
    // // arreglo de prueba de arriba junto con este:

    // my.setStorageSync({
    //   key: "dataBase", data: this.data.places
    // })

    // Aqui carga la informacion del storage
    let res = my.getStorageSync({
      key: 'dataBase'
    });

    // Almacena los lugares en las variables asignadas
    this.setData({
      places: res.data,
    })

    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // Page loading is complete
  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'Dreavel',
      desc: 'Tu app de viajes soñados',
      path: 'pages/index/index',
    };
  },
});