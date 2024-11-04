<template>
  <div class="banner-wrap">
    <div class="carousel">
      <splide ref="splide" :options="slickOptions" @splide:active="handleAfterChange">
        <splide-slide v-for="(image, index) in images" :key="index">
          <div class="slide">
            <div class="inner">
              <v-container fluid>
                <v-row align="center" justify="space-between">
                  <v-col sm="7" lg="6" cols="12">
                    <div class="text">
                      <h4 class="use-text-title">
                        {{ $t('starter.banner_title') }}
                      </h4>
                      <h5 class="use-text-subtitle2">
                        {{ $t('starter.banner_subtitle') }}
                      </h5>
                    </div>
                  </v-col>
                  <v-col sm="5" lg="6" cols="12">
                    <div class="image-container">
                      <img :src="image" class="responsive-image" alt="illustration">
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </splide-slide>
      </splide>
    </div>
    <hidden point="mdDown">
      <v-container class="max-md">
        <nav class="slide-nav">
          <v-btn
            :class="{ active: currentSlide === 0 }"
            variant="text"
            @click="gotoSlide(0)"
          >
            <strong>{{ $t('starter.project_create') }}</strong>
            {{ $t('starter.project_inc') }}
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 1 }"
            variant="text"
            @click="gotoSlide(1)"
          >
            <strong>{{ $t('starter.annotation_tools') }}</strong>
            {{ $t('starter.annotation_inc') }}
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 2 }"
            variant="text"
            @click="gotoSlide(2)"
          >
            <strong>{{ $t('starter.layout_routing') }}</strong>
            {{ $t('starter.layout_routing_inc') }}
          </v-btn>
        </nav>
      </v-container>
    </hidden>
  </div>
</template>

<style scoped lang="scss">
@import './slider-styles';

.inner {
  display: flex;
  align-items: center;
}

.image-container {
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
}

.responsive-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio */
}
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Hidden from '../Hidden';
import start from '../../assets/images/icon/start.png';
import layout01 from '../../assets/images/icon/dev01.png';
import routing1 from '../../assets/images/icon/routing1.png';
export default {
  components: {
    Splide,
    SplideSlide,
    Hidden,
  },
  data() {
    return {
      currentSlide: 0,
      images: [
        start,
        layout01,
        routing1,
      ],
      slickOptions: {
        pagination: false,
        arrows: false,
        perPage: 1,
        type: 'loop',
        autoplay: false,
        interval: 10000,
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
          autoplay: true,
        },
        breakpoints: {
          800: {
            pagination: true,
          },
        },
      },
    };
  },
  methods: {
    handleAfterChange(slide) {
      this.currentSlide = slide.index;
    },
    gotoSlide(index) {
      this.$refs.splide.go(index);
    },
  },
};
</script>
