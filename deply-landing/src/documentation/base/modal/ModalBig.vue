<script setup lang="ts">
import { ref } from 'vue'
import { modalProps, modalBig } from '/@src/data/docs/base/modal'

const modalBigOpen = ref(false)
</script>

<template>
  <Section id="modal-big-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Modal" subtitle="Modal big variation" />
          <div class="pt-4">
            <Button bold @click="modalBigOpen = true">Open Big Modal</Button>

            <Modal
              title="Big Modal"
              :open="modalBigOpen"
              size="big"
              actions="center"
              noscroll
              @close="modalBigOpen = false"
            >
              <template #content>
                <PlaceholderSection
                  title="Go Premium"
                  subtitle="Unlock more features and business tools by going premium"
                >
                  <template #image>
                    <DarkImage
                      src="/assets/illustrations/features/vr.svg"
                      src-dark="/assets/illustrations/features/vr-dark.svg"
                      alt="dark image"
                    />
                  </template>
                </PlaceholderSection>
              </template>
              <template #action>
                <Button color="primary" :long="2" raised>Confirm</Button>
              </template>
            </Modal>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="modalBig" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="modalProps" />
          </template>
          <template #sample>
            <div class="empty-text">
              <p class="paragraph rem-95">
                No data sample available for this component
              </p>
            </div>
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              Modals are a very important part of modern dynamic applications.
              Vulk Modals ship with props that help with customization. They
              also provide slots for actions (#action, #cancel) and content
              (#content). You can customize the actions alignment by using the
              <code>actions</code>
              prop. You can also make the buttons rounded using the
              <code>rounded</code>
              prop. The modal can also disable page scroll using the
              <code>noscroll</code>
              prop and disabled backdrop closing with the
              <code>noclose</code>
              prop. .
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
