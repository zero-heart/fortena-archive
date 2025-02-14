// stores/setList.ts
import { defineStore } from 'pinia';

export const useSetListStore = defineStore('setList', {
  state: () => ({
    data: null as any,
    error: null as any,
    loading: false,
  }),
  actions: {
    initData() {
      this.data = null;
      this.error = null;
      this.loading = false;
    },
    resetIsOpen() {
      this.data.forEach((item: any) => {
        item.isOpen = false;
      });
    },
    async fetchData() {
      this.loading = true;
      this.error = null; // 새로운 요청 전에 에러 초기화

      try {
        const response = await $fetch<any[]>( // 데이터 가져오기
          'https://opensheet.elk.sh/1LxyqXIJPJoN0LJsGAxR-zriXWVXuf4AGoyLfEI8qlsI/data'
        );
        this.data = response.map((item: any, index: number) => {
          const [yy, m, d] = item.DATE.split('/').map((val: string) => parseInt(val, 10));
          const fullYear = 2000 + yy;

          return {
            id: index + 1,
            isOpen: false,
            date: new Date(fullYear, m - 1, d),
            songTitle: item.SONG_TITLE,
            singers: item.SINGERS,
            concertName: item.CONCERT_NAME,
            city: item.CITY,
            hall: item.PERFOMANCE_HALL,
            songTitleKR: item.SONG_TITLE_KR,
            author: item.AUTHOR,
            workTitle: item.WORK_TITLE,
            type: item.TYPE,
            isEncore: item.IS_ENCORE,
            collaboration: item.COLLABORATION,
            description: item.DESCRIPTION,
            country: item.COUNTRY,
            link: item.LINK,
          };
        });
      } catch (err) {
        this.error = err; // 에러 저장
      } finally {
        this.loading = false;
      }
    },
  },
});
