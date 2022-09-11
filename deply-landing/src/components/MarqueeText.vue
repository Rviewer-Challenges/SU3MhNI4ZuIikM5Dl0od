<script lang="ts">
import { h, defineComponent, useCssModule } from 'vue'

export default defineComponent({
  name: 'MarqueeText',
  props: {
    duration: {
      type: Number,
      default: 15,
    },
    repeat: {
      type: Number,
      default: 2,
    },
    paused: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const styles = useCssModule()

    return () =>
      h('div', { class: [styles.wrap] }, [
        h(
          'div',
          {
            class: [props.paused ? styles.paused : undefined, styles.content],
          },
          Array(props.repeat).fill(
            h(
              'div',
              {
                class: styles.text,
                style: {
                  animationDuration: `${props.duration}s`,
                  animationDirection: props.reverse ? 'reverse' : undefined,
                },
              },
              slots.default?.()
            )
          )
        ),
      ])
  },
})
</script>

<style module>
.wrap {
  overflow: hidden;
}

.content {
  width: 100000px;
}

.text {
  animation-name: animation;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  float: left;
}

.paused .text {
  animation-play-state: paused;
}

@keyframes animation {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
