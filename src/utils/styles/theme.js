import palette from './palette';

export const lightMode = {
  // 화면
  page_bg: {
    default: palette.white[0],
    point: palette.blue[6],
  },
  // 캐릭터 컬러
  butter: {
    todo_bg: palette.yellow[1],
    icon_bg: palette.yellow[0],
    icon_border: palette.yellow[2],
  },
  strawberry: {
    todo_bg: palette.pink[1],
    icon_bg: palette.pink[0],
    icon_border: palette.pink[2],
  },
  water: {
    todo_bg: palette.blue[1],
    icon_bg: palette.blue[0],
    icon_border: palette.blue[2],
  },
  nutella: {
    todo_bg: palette.brown[1],
    icon_bg: palette.brown[0],
    icon_border: palette.brown[2],
  },
  // 폰트 컬러
  text: {
    deep: palette.black[0],
    mute: palette.gray[4],
    light: palette.gray[8],
    bg_main: palette.blue[6], // ex.반복 요일 bg
    kakao: palette.brown[3], // kakao 폰트 컬러
  },
  // 기본 아이콘 컬러
  icon: {
    deep: palette.black[0],
    mute: palette.black[1],
    light: palette.gray[3],
    border: palette.gray[0], // 캐릭터 아이콘 border
  },
  check_box: {
    incomplete: {
      bg: palette.gray[1],
      icon: palette.gray[2],
    },
    complete: {
      bg: palette.blue[5],
      icon: palette.white[0],
    },
  },
  switch: {
    enable: {
      ball: palette.blue[4],
      bg: palette.blue[3],
    },
    disable: {
      ball: palette.gray[5],
      bg: palette.blue[6],
    },
  },
  progress_bar: {
    bg: palette.gray[7],
    bar: palette.blue[5],
  },
  // 버튼
  button: {
    main: {
      bg: palette.blue[6],
      text: palette.white[0],
    },
    // 비활성화 버튼 컬러 디자인 나오면 변경
    disable: {
      bg: palette.gray[10],
      text: palette.gray[11],
    },
    kakao: palette.yellow[3],
    google: palette.white[0],
  },
  // input line
  input: {
    default: palette.gray[9],
    focus: palette.blue[6],
  },
};

export const darkMode = {};
