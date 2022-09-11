<script setup lang="ts"></script>

<template>
  <div class="timeline-conversation">
    <!--Message-->
    <div class="conversation-message">
      <div class="message-text">
        <div class="message-box primary">
          <p>
            Ya me han pasado el archivo, ¿qué hago ahora?
          </p>
        </div>
        <span class="meta">Anna (UX)</span>
      </div>
      <AvatarSimple picture="/assets/nft/avatars/cat.svg" size="medium" />
    </div>
    <!--Message-->
    <div class="conversation-message">
      <div class="message-text">
        <div class="message-box primary">
          <p>
            Tendremos que subirlo al servidor, ¿lo haces tú? Si no, escríbele a Jorge para que lo haga cuando pueda.
          </p>
        </div>
        <span class="meta">Cristian (Backend Team)</span>
      </div>
      <AvatarSimple picture="/assets/nft/avatars/robot.svg" size="medium" />
    </div>
    <!--Message-->
    <div class="conversation-message">
      <div class="message-text">
        <div class="message-box primary">
          <p>No hace falta! Súbelo a Deply y pásame el enlace, ya está! 🤗🤗</p>
        </div>
        <span class="meta">Iván (Frontend Team)</span>
      </div>
      <AvatarSimple picture="/assets/nft/avatars/hammy.svg" size="medium" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline-conversation {
  .conversation-message {
    display: flex;
    justify-content: flex-end;

    :deep(.avatar) {
      margin-top: auto;
    }

    .message-text {
      margin-right: 2rem;

      .message-box {
        padding: 1rem;
        border-radius: 1rem 1rem 0;
        font-family: var(--font);
        font-size: 0.9rem;
        line-height: 1.3;
        margin-bottom: 0.25rem;

        &.primary {
          background: var(--primary);
          color: var(--white-smoke);
        }

        &.secondary {
          background: var(--secondary);
          color: var(--white-smoke);
        }
      }

      .meta {
        display: block;
        text-align: right;
        margin-left: auto;
        font-family: var(--font);
        font-size: 0.9rem;
        color: var(--light-text);
      }
    }

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
}
</style>
