Component({
  properties: {
    myData: {
      type: Object,
      value: {}
    },
  },
  mixins: [],
  data: {},
  props: {
    onShow: () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    showDetails(e)  {
      const key = e.currentTarget.dataset.value;
      this.props.onShow(key)
    },
  },
});