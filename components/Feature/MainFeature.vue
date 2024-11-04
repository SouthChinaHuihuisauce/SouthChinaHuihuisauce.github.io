<template>
  <div class="page-section">
    <v-row>
      <v-col
        class="px-6"
        sm="4"
        cols="12"
      >
        <div class="feature-list">
          <img style="width: 100px;" src="../../assets/images/eda/yuan.png" alt="">
          <h5 class="text-h5">
            {{ $t('edaInc.device') }}
          </h5>
          <p class="text-body-1">
            {{ $t('edaInc.deviceGeneration') }}
          </p>
        </div>
      </v-col>
      <v-col
        class="px-6"
        sm="4"
        cols="12"
      >
        <div class="feature-list">
          <img src="../../assets/images/eda/layout.png" alt="">
          <h5 class="text-h5">
            {{ $t('edaInc.Layout') }}
          </h5>
          <p class="text-body-1">
            {{ $t('edaInc.autoLayout') }}
          </p>
        </div>
      </v-col>
      <v-col
        class="px-6"
        sm="4"
        cols="12"
      >
        <div class="feature-list">
          <img src="../../assets/images/eda/routing.png" alt="">
          <h5 class="text-h5">
            {{ $t('edaInc.routing') }}
          </h5>
          <p class="text-body-1">
            {{ $t('edaInc.autoRouting') }}
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
@import './feature-styles';
</style>
