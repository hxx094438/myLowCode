/ eslint-disable no-unused-vars /
import { toRefs, defineComponent, getCurrentInstance, onMounted, ref, computed } from 'vue'
import './grid-container.scss'
import gridItem from '@/components/main/gridItem/index';
import { useStore } from '@/store/index';
import { storeToRefs } from 'pinia';

/*
 * interface gridItem {
 *   row: number;
 *   col: number;
 *   gridArea: string;
 *   full?: boolean; // 是否铺满
 * }
 */


/**
 *  一个容器中如果满足拆分的情况下，那么会再初始化一个容器
 */
export default defineComponent({
  name: 'grid-container',
  props: {
    title: String,
    options: Object,
  },
  components: { gridItem },
  setup(props, { expose }) {

    /*
     * const opts = ref<gridItem>({
     *   row: 1,
     *   col: 2,
     *   gridArea: "1/1/1/1"
     * })
     */


    const store = useStore()
    const { name, counter, splitLimit } = storeToRefs(store)
    console.log('store', store, name, counter)
    const { proxy } = getCurrentInstance();
    console.log('proxy ', proxy, proxy.$root)

    const { options } = toRefs(props)
    const { columns, rows, gap } = options.value

    function canSplit() {
      const { row: minRow, column: minColumn } = splitLimit.value
      if (rows < minRow || columns < minColumn) {
        console.log('不允许拆分')
        return false
      }
      return true
    }

    const allowSplit = canSplit()
    console.log('allowSplit', allowSplit)

    const containerStyle: any = {
      gridTemplateColumns: `repeat(${columns},1fr)`,
      gridTemplateRows: `repeat(${rows},1fr)`,
      gridGap: `${gap || 0}px`,
      width: '90%',
      height: '800px',
      display: 'grid',
      position: 'absolute'
    }
    const nums = rows * columns
    const childList = [
      {
        gridArea: '1 / 2 / 5 / 4'
      }, {
        gridArea: '1 / 4 / 3 / 6'
      }, {
        gridArea: '1 / 6 / 3 / 18'
      },

    ]

    // 容器中子元素


    const box1El = ref()
    const box2El = ref()
    const isActivity = ref(false)
    const isActive = computed(() => isActivity)
    onMounted(() => {
      const val1 = box1El.value
      const val2 = box2El.value
        console.log('挂载', 'box2El', val1, 'box1El', val2)

    })
    function isContainerEl (e) {
      return e.className === 'grid-container-box'
    }

   function clickHandler(e) {
      if(!isContainerEl(e.target)) return
      console.log('el', e.target.className)
      if(!isActive.value) isActivity.value = true
      console.log('isActive',isActive.value.value)
      e.target.style.boxShadow = '#999 0 0 8px'
    }

    return () => (
      <>
        <div style="padding: 50px">
          <div class="grid-container-box" style={
            containerStyle
          } ref={box1El}>
            {
              Array.from({ length: nums }, (index) => {
                return (
                  // eslint-disable-next-line max-len
                  <div data-index={index}
                       style={{ background: '#e3e3e3', cursor: 'pointer', border: '1px dotted #000' }}></div>
                )
              })
            }

          </div>

          <div class="grid-container-box" style={
            containerStyle
          } onClick={clickHandler} ref={box2El}>
            {
              <>
                {
                  childList.map((child, index) => {
                    return (
                      <grid-item nums={rows * columns} index={index} options={child}/>
                    )
                  })
                }


              </>
            }
          </div>
        </div>
      </>
    )
  }


})