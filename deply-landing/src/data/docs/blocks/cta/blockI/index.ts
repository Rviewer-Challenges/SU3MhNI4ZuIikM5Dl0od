export const ctaBlockIProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'subtitle',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
  ],
  slots: [],
}

export const ctaBlockI = `
<template>
  <CtaBlockI
    title="Get Started"
    subtitle="Fill in the form below to get started with our application."
  >
    <template #content>
      <p class="paragraph rem-125 max-w-5 b-centered-tablet-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit quis est tam
        dissimile homini. Quae cum.
      </p>
    </template>
    <template #form>
      <form class="py-4">
        <div class="columns is-multiline">
          <div class="column is-6">
            <Field>
              <FieldLabel label="First Name">First Name</FieldLabel>
              <Control icon="feather:user">
                <VInput />
              </Control>
            </Field>
          </div>
          <div class="column is-6">
            <Field>
              <FieldLabel label="Last Name">Last Name</FieldLabel>
              <Control icon="feather:user">
                <VInput />
              </Control>
            </Field>
          </div>
          <div class="column is-12">
            <Field>
              <FieldLabel label="Email Address">Email Address</FieldLabel>
              <Control icon="feather:mail">
                <VInput />
              </Control>
            </Field>
          </div>
          <div class="column is-6">
            <Field>
              <FieldLabel label="Password">Password</FieldLabel>
              <Control icon="feather:lock">
                <VInput type="password" />
              </Control>
            </Field>
          </div>
          <div class="column is-6">
            <Field>
              <FieldLabel label="Password">Repeat Password</FieldLabel>
              <Control icon="feather:lock">
                <VInput type="password" />
              </Control>
            </Field>
          </div>
          <div class="column is-12">
            <Field class="pt-4">
              <Control>
                <Buttons alignment="centered">
                  <Button :to="'index'" color="primary" fullwidth bold raised>Get Started</Button>
                </Buttons>
              </Control>
            </Field>
          </div>
        </div>
      </form>
    </template>
  </CtaBlockI>
</template>  
`
