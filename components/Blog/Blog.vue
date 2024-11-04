<template>
  <v-container>
    <h3 class="use-text-title text-center mb-4">
      <!-- 下载EDA工具&数据库 -->
      {{ $t('blog.downInc') }}
    </h3>
    <p class="use-text-subtitle2 text-center mb-4">
      {{ $t('blog.downOverview') }}
    </p>
    <div
      id="blog-list"
      class="blog-wrap"
    >
      <v-row justify="center">
        <v-col md="9" cols="12">
          <v-row justify="center">
            <v-col
              v-for="(item, index) in blogData"
              :key="index"
              md="4"
              cols="12"
              class="px-4"
            >
              <post-card
                :title="item.title"
                :desc="item.desc"
                :date="item.date"
                :img="item.image"
                :on-download="() => handleDownload(item.downloadLink, item.fileName)"
                :href="item.downloadLink"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import './blog-style';
</style>

<script>
import axios from 'axios';
import PostCard from '../Cards/PostCard';
import windowsImage from '../../assets/images/Windows.png';
import linuxImage from '../../assets/images/icon/OSLogoai_Linux.png';
import dataBase from '../../assets/images/icon/database.png';
export default {
  components: {
    PostCard,
  },
  data() {
    return {
      blogData: [
        {
          title: 'Windows',
          date: '19 June 2024',
          desc: this.$t('blog.downOverview'),
          image: windowsImage,
          downloadLink: 'http://192.168.1.21:5000/download/windows', // 添加下载链接
          fileName: 'GdsMaster_windows.zip',
        },
        {
          title: 'Linux',
          date: '19 June 2024',
          desc: this.$t('blog.linuxVersion'),
          image: linuxImage,
          downloadLink: 'http://192.168.1.21:5000/download/linux', // 添加下载链接
          fileName: 'GdsMaster_linux.zip',
        },
        {
          title: 'Database',
          date: '19 June 2024',
          desc: this.$t('blog.dataBaseVersion'),
          image: dataBase,
          downloadLink: 'http://192.168.1.21:5000/download/database', // 添加下载链接
          fileName: 'GdsMaster_process_library.zip',
        },
      ],
    };
  },
  methods: {
    handleDownload(href, fileName) {
      axios.get(href, { responseType: 'blob' })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();
          link.remove();
        })
        .catch((error) => {
          console.error('Download error:', error);
        });
    },
  },
};
</script>
