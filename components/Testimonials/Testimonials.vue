<template>
  <div class="testimonial-wrap">
    <h3 class="use-text-title text-center mb-4">
      {{ $t('edaInc.dataBase') }}
    </h3>
    <p style="width: 80%;margin-left:10%;" class="use-text-subtitle2 text-center mb-4">
      {{ $t('edaInc.dataBaseIntroduction') }}
    </p>
    <div>
      <table>
        <thead>
          <tr>
            <th>{{ $t('table.ipType') }}</th>
            <th>{{ $t('table.nummber') }}</th>
            <th>{{ $t('table.dataA') }}</th>
            <th>{{ $t('table.dataB') }}</th>
            <!-- <th>包含数据</th> -->
            <!-- <th>主要结构</th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="red-text">
              {{ $t('table.ipTypeSix') }}
            </td>
            <td>34</td>
            <!-- <td>GDS、原理图（网表）、版图布局标注、前后方仿真对比</td> -->
            <td>{{ $t('table.dataType6') }}</td>
            <td> {{ $t('table.dataType7') }}</td>
          </tr>
          <tr>
            <td class="red-text">
              {{ $t('table.ipTypeSev') }}
            </td>
            <td>930</td>
            <td> {{ $t('table.dataType8') }}</td>
            <td> {{ $t('table.dataType7') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="carousel">
      <splide :options="slickOptions">
        <splide-slide
          v-for="(item, index) in testiContent"
          :key="index"
        >
          <div class="item">
            <img :src="item.avatar" :alt="item.name" class="testimonial-image">
            <div class="testimonial-text">
              <p>{{ item.text }}</p>
              <p><strong>{{ item.name }}</strong></p>
            </div>
          </div>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './testimonials-style';

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.testimonial-image {
  width: 300px; /* Adjust the size as needed */
  height: 300px;

  margin-bottom: 10px;
}

.testimonial-text {
  margin-top: 10px;
}
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// import imgAPI from '@/assets/images/imgAPI';
import dataBase1 from '../../assets/images/icon/database1.png';
import dataBase2 from '../../assets/images/icon/database2.png';
import dataBase3 from '../../assets/images/icon/database3.png';
import dataBase4 from '../../assets/images/icon/database4.png';
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      testiContent: [
        {
          text: '',
          avatar: dataBase1,
          name: '',
        },
        {
          text:
            '',
          avatar: dataBase2,
          name: '',
        },
        {
          text:
            '',
          avatar: dataBase3,
          name: '',
        },
        {
          text: '',
          avatar: dataBase4,
          name: '',
        },
      ],
      slickOptions: {
        perPage: 3,
        perMove: 1,
        pagination: false,
        arrows: false,
        type: 'loop',
        breakpoints: {
          600: {
            perPage: 2,
          },
          800: {
            perPage: 3,
          },
        },
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
          autoplay: true,
        },
      },
    };
  },
};
</script>
