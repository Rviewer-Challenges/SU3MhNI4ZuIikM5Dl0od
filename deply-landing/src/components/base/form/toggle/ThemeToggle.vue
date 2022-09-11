<script setup lang="ts">
import { useDarkmode } from '/@src/stores/darkmode'

const darkmode = useDarkmode()
</script>

<template>
  <label for="theme-toggle" class="custom-toggle">
    <input id="theme-toggle" v-model="darkmode.isDark" type="checkbox" />
    <span class="no-margin">
      <span class="track">
        <span class="track-inner"></span>
        <span class="track-knob">
          <i-feather-sun class="inactive iconify" />
          <i-feather-moon class="active iconify" />
        </span>
      </span>
    </span>
  </label>
</template>

<style lang="scss" scoped>
.custom-toggle {
  position: relative;

  input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;

    &:checked {
      + span {
        span {
          &.track {
            .track-knob {
              margin-left: 22px;
              transform: rotate(360deg);
              background: var(--primary);
              border-color: var(--primary);
              box-shadow: var(--primary-box-shadow);

              i {
                opacity: 1;
              }

              svg {
                &.inactive {
                  display: none;
                  stroke-width: var(--dark-text);
                }

                &.active {
                  display: block;
                  stroke: var(--white-smoke);
                  color: var(--white-smoke);
                }
              }
            }
          }
        }
      }
    }
  }

  span {
    display: block;
    cursor: pointer;

    span {
      display: block;

      &.track {
        position: relative;

        .track-inner {
          height: 11px;
          width: 42px;
          background: var(--custom-toggle-track-bg);
          border-radius: 100px;
        }

        .track-knob {
          position: absolute;
          top: -8px;
          left: -2px;
          height: 26px;
          width: 26px;
          border-radius: 50%;
          border: 1px solid var(--border);
          box-shadow: var(--light-box-shadow);
          background: var(--white);
          display: flex;
          justify-content: center;
          align-items: center;
          transform: rotate(0);
          transition: all 0.3s;

          i {
            color: var(--white);
            opacity: 0;
            transition: all 0.3s;
          }

          svg {
            height: 14px;
            width: 14px;
            stroke-width: 2px;
            stroke: var(--dark-text);

            &.inactive {
              display: block;
              color: var(--dark-text);
            }

            &.active {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
