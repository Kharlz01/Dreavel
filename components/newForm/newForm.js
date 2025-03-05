Component({
  properties: {
    myReq: {
      type: Object,
      value: {}
    },
    buttonInfo: {
      type: String,
      value: "",
    },
    opKey: {
      type: Number,
      value: 0,
    },
  },
  mixins: [],
  data: {
    myData: [],
    filePath: "",
    flag: false,
    message: "",
  },
  props: {
    onSave: () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {

    handleFile() {
      my.chooseImage({
        success: (res) => {
          console.log(res);
          this.setData({
            filePath: res.apFilePaths[0]
          })
        }
      })
    },

    formSubmit(e) {

      let myData = my.getStorageSync({
        key: 'dataBase'
      }).data;

      let form = e.detail.value; let duplicate = "";

      if ((myData.length == this.props.opKey)){
        duplicate = myData.some(
          (item) => item.name === form.name
        );
      } else {
        duplicate = 0;
      }

      if (form.name == "") {
        this.setData({
          flag: true,
          message: "El espacio de nombre no puede estar vacio.",
        })
      } else {
        if (duplicate) {
          this.setData({
            flag: true,
            message: "El lugar ya existe en la lista.",
          })
        } else {
          let data = {
            name: form.name,
            status: form.status,
            description: form.description,
            pic: this.data.filePath,
          }
          this.props.onSave(data);
        }
      }
    },
  },
});