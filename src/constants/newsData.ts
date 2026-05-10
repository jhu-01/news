import { CategoryData } from '@/types/news';

export const LISTVIEW_TIMER_DURATION = 6000; // 6초

export const CATEGORIES: CategoryData[] = [
  {
    id: 'total',
    name: '종합',
    pressList: [
      {
        name: '연합뉴스',
        color: '#14212B',
        weight: 'bold',
        lastEditTime: '2024.05.10. 10:00',
        mainArticle: {
          title: "구글, 역대 최대 성능 '제미나이 1.5 프로' 공개... 100만 토큰 처리",
          thumbnail: "",
          link: "#"
        },
        subArticles: [
          { title: "긴 문맥 이해 능력 비약적 향상... 영상·음성 분석도 가능", link: "#" },
          { title: "개발자 위한 API 출시... 구글 클라우드와 연동 강화", link: "#" },
          { title: "멀티모달 성능 벤치마크 압도적 1위 기록", link: "#" },
          { title: "제미나이 나노, 모바일 기기 탑재 가속화", link: "#" },
          { title: "구글, 'AI 에이전트' 시대로의 대전환 선언", link: "#" },
          { title: "연합뉴스 바로가기", link: "#" }
        ]
      },
      {
        name: '조선일보',
        color: '#000000',
        fontFamily: 'serif',
        weight: 'bold',
        lastEditTime: '2024.05.10. 11:20',
        mainArticle: {
          title: "AI가 코딩하는 시대... '제미나이 코드 어시스트' 개발 효율 2배 높인다",
          thumbnail: "",
          link: "#"
        },
        subArticles: [
          { title: "코드 자동 완성부터 리팩토링까지... 개발자의 'AI 부사수'", link: "#" },
          { title: "기존 코드베이스 분석해 버그 수정 제안... 생산성 극대화", link: "#" },
          { title: "기업용 보안 강화된 제미나이 엔터프라이즈 버전 출시", link: "#" },
          { title: "전 세계 개발자 80% 'AI 코딩 도구 도입 긍정적'", link: "#" },
          { title: "조선일보 바로가기", link: "#" }
        ]
      }
    ]
  },
  { id: 'broadcast', name: '방송/IT', pressList: [] },
  { id: 'economy', name: '경제', pressList: [] },
  { id: 'news', name: '인터넷/신문', pressList: [] },
  { id: 'sports', name: '스포츠/연예', pressList: [] },
  { id: 'magazine', name: '매거진/전문지', pressList: [] }
];