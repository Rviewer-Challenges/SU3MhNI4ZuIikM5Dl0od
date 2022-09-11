<script setup lang="ts"></script>

<template>
  <div class="subscription-block mx-auto max-w-4 pt-6">
    <div class="field is-grouped">
      <div class="control is-expanded">
        <slot name="input">
          <input
            aria-label="Newsletter subscribe"
            type="text"
            class="input is-medium"
            placeholder="Subscribe"
          />
        </slot>
        <div class="form-icon">
          <slot name="icon">
            <i class="iconify" data-icon="feather:mail"></i>
          </slot>
        </div>
      </div>
      <div class="control">
        <slot name="actions">
          <Button color="primary" size="medium" curved raised>Subscribe</Button>
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subscription-block {
  .field {
    margin-bottom: 0;

    .control {
      position: relative;

      .input {
        padding-left: 50px;
        border-radius: 0.65rem;
        color: var(--input-base-color);
        background: var(--input-base-bg-color);
        border-color: var(--input-base-border-color);
        box-shadow: none;
        transition: border 0.3s;

        &:focus {
          box-shadow: var(--light-box-shadow);
          border-color: var(--input-base-focus-color);

          ~ .form-icon {
            .iconify {
              color: var(--primary);
            }
          }
        }

        &::placeholder {
          color: var(--input-placeholder-color);
        }
      }

      .form-icon {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;

        .iconify {
          color: var(--light-text);
          transition: color 0.3s;
        }
      }
    }
  }
}
</style>
