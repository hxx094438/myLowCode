import { toRefs, defineComponent, onMounted, ref, computed } from "vue";

export default defineComponent({

  name: 'grid-item',
  props: {
  options: Object,
  nums: Number,
  index: Number
},

setup(props) {
  const { options ,index } = toRefs(props)
  const { gridArea,title } = options.value
  return () => (
    <>
      <div class="ddd" style={{ gridArea: gridArea, background: '#eee', border: '1px solid #000'}}>
        子元素{title}, 索引： { index,value}

      </div>
    </>
    )
}


})