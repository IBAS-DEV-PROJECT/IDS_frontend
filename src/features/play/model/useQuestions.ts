// import { useApi } from "@/shared/hooks/useApi";

// type Questions = {
//   id: number;
//   text: string;
//   options: string[];
// };

// export const useQuestions = () =>
//   useApi<Questions[]>({
//     queryKey: ["questions"],
//     endpoint: "/questions",
//   });

export const useQuestions = () => {
  const dummyData = [
    {
      id: 1,
      text: "생일 날 친구들이 깜짝 파티를 준비했다. 나의 반응은?",
      options: [
        { value: 0, label: "와 대박 언제 준비했어?" },
        { value: 1, label: "헐... 고마워 (당황 + 머쓱타드)" },
      ],
    },
    {
      id: 2,
      text: "쉬는 날이 생기면 나는??",
      options: [
        { value: 0, label: "집에 있기 아까워! 약속 잡아야지~" },
        { value: 1, label: "드디어 혼자다… 그 날은 집콕!" },
      ],
    },
    {
      id: 3,
      text: "새로운 모임에서 어색한 침묵이 흐른다. 당신은?",
      options: [
        { value: 0, label: "아이스 브레이킹 담당~✨" },
        { value: 1, label: "조용히 물 마시기 담당?" },
      ],
    },
    {
      id: 4,
      text: "노래 가사에 “바람이 분다”를 듣고 나는?",
      options: [
        { value: 0, label: "날씨 표현이겠지~" },
        { value: 1, label: "어쩌면… 삶의 무상함을 비유한 걸지도…?" },
      ],
    },
    {
      id: 5,
      text: "영화를 보고 기억에 남는 것은?",
      options: [
        { value: 0, label: "배우의 연기, 대사, 배경" },
        { value: 1, label: "숨겨진 의미, 메세지" },
      ],
    },
    {
      id: 6,
      text: "친구가 “나 꿈 꿨는데 네가 나한테 돈 줬어 ㅋㅋ”라고 말하면?",
      options: [
        { value: 0, label: "ㅋㅋㅋㅋ개꿈이냐?” 웃고 끝" },
        {
          value: 1,
          label: "이건 우정의 상징… 나중에 네가 나에게 큰 도움을 줄 귀인인가?.",
        },
      ],
    },
    {
      id: 7,
      text: "친구가 헤어진 썰을 늘어놓는 중…",
      options: [
        {
          value: 0,
          label: "왜 헤어졌어? 그때 대화 방식이 문제였던 것 같은데?",
        },
        { value: 1, label: "헐... 너무 속상하겠다ㅠㅠ 넌 최선을 다했어..." },
      ],
    },
    {
      id: 8,
      text: "팀플에서 의견 충돌이 생기면 나는?",
      options: [
        { value: 0, label: "누가 맞는지 논리적으로 따져본다" },
        { value: 1, label: "상대방의 감정을 먼저 이해하려 한다" },
      ],
    },
    {
      id: 9,
      text: "드라마 보면서 주인공이 말도 안 되는 선택을 한다! 당신은?",
      options: [
        { value: 0, label: "이게 말이 되냐?" },
        { value: 1, label: "하... 그래도 이해는 간다" },
      ],
    },
    {
      id: 10,
      text: "여행 일정을 짤 때 나는?",
      options: [
        {
          value: 0,
          label:
            "1일차 9:00 - 아침식사 🍳  10:00 - 박물관 11:30 - 카페 타임 ☕️",
        },
        { value: 1, label: "날씨 보고 대충 돌아다니면 되지~" },
      ],
    },
    {
      id: 11,
      text: "마감일이 아직 일주일 남았다. 당신은?",
      options: [
        { value: 0, label: "미리미리 여유롭게 끝내기" },
        { value: 1, label: "마감 하루 전 밤샘 각" },
      ],
    },
    {
      id: 12,
      text: "넷플릭스 볼 때 당신의 선택은?",
      options: [
        {
          value: 0,
          label: "미리 봐야 할 리스트 정리해두고, 평점 보고 골라본다 🎬📊",
        },
        { value: 1, label: "그냥 썸네일 보고 끌리는 거 아무거나 누른다 📺✨" },
      ],
    },
  ];

  return {
    data: dummyData,
    isLoading: false,
    error: null,
  };
};
