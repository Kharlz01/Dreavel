Component({
  properties: {
    myInfo: {
      type: Object,
      value: {}
    },
    ind: {
      type: Number,
      value: 0
    }
  },
  mixins: [],
  data: {
    ref: false,
    // onCheck: () => {}
    onDelete: () => {}
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    navigateToEdit() {
      let ind = this.props.ind;
      my.navigateTo({
        url: '../../pages/edit/edit?data='+ind
      })
    },

    deleteMenu(){
      this.setData({
        ref: !this.data.ref,
      })
    },

    deletePlace(){
      // console.log(this.props.ind);
      this.props.onDelete(this.props.ind);
    }

  },
});
