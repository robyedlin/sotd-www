<template>
  <div class="list">
    <Name/>
    <Email/>
    <Teaser/>
    <Description/>
    <Website/>
    <DappUrl/>
    <Authors/>
    <License/>
    <Logo/>
    <Contracts/>
    <Status/>
    <Social/>
    <Tags/>
  </div>
</template>

<script>
  import Authors from '~/components/dapps/form/fields/Authors.vue'
  import Contracts from '~/components/dapps/form/fields/Contracts.vue'
  import DappUrl from '~/components/dapps/form/fields/DappUrl.vue'
  import Description from '~/components/dapps/form/fields/Description.vue'
  import Email from '~/components/dapps/form/fields/Email.vue'
  import License from '~/components/dapps/form/fields/License.vue'
  import Logo from '~/components/dapps/form/fields/Logo.vue'
  import Name from '~/components/dapps/form/fields/Name.vue'
  import Social from '~/components/dapps/form/fields/Social.vue'
  import Status from '~/components/dapps/form/fields/Status.vue'
  import Tags from '~/components/dapps/form/fields/Tags.vue'
  import Teaser from '~/components/dapps/form/fields/Teaser.vue'
  import Website from '~/components/dapps/form/fields/Website.vue'

  export default {
    components: {
      Authors,
      Contracts,
      DappUrl,
      Description,
      Email,
      License,
      Logo,
      Name,
      Social,
      Status,
      Tags,
      Teaser,
      Website
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/settings';

  .list {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    margin: 0 auto;
    @include tweakpoint('min-width', $tweakpoint--default) {
      margin-right: 20px;
      margin-left: 0;
    }

    .item {
      width: 100%;
      margin-bottom: 15px;
      position: relative;
      border: 1px solid transparent;
      &.-icon, &.-image {
        background: rgba(lighten($color--gray, 100%), .9);
        box-shadow: 0 0 20px rgba($color--black, .05);
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
        &.-drop {
          border-color: $color--black;
        }
      }
      &.-image {
        width: auto;
        height: auto;
        min-height: 200px;
        border-radius: 10px;
      }
      &.--has-errors {
        border-color: $color--error;
      }
    }

    /deep/ .required {
      display: inline-block;
      padding-left: 2px;
      color: $color--error;
    }

    /deep/ .label {
      position: absolute;
      left: 0;
      top: 10px;
      padding: 20px;
      pointer-events: none;
      font-size: .95rem;
      transition: top .2s ease;
    }

    /deep/ .text-input, /deep/ .text-area {
      border: none;
      padding: 30px 50px 30px 20px;
      width: 100%;
      box-shadow: 0 0 20px rgba($color--black,.05);
      background: rgba(lighten($color--gray, 100%),.9);
      transition: background .2s ease;
      &:focus {
        background: none;
        background: rgba(250, 250, 250, 0.7);
      }
      &:focus + .label,  &.--is-filled + .label {
        top: -11px;
        opacity: .65;
      }
    }

    /deep/ .text-area {
      vertical-align: top;
      min-height: 75px;
      resize: none;
    }

    /deep/ .remaining-characters {
      position: absolute;
      display: block;
      right: 20px;
      top: 30px;
    }

    /deep/ .help {
      padding: 10px 20px;
      margin: 0;
      background: none;
      background: rgba(250, 250, 250, 0.7);
      font-size: .9rem;
      line-height: 1.45;
    }

    /deep/ .error-list, /deep/ .warning-list {
      padding: 10px 20px;
      color: lighten($color--white, 100%);
    }

    /deep/ .error-list {
      background: $color--error;
    }

    /deep/ .warning-list {
      background: $color--warning;
    }

    /deep/ .error-item, /deep/ .warning-item {
      margin: .2rem 0;
    }
  }
</style>
