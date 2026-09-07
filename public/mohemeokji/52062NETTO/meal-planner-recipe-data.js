/* Recipes for the 07.09.2026 sale week. Ingredient names match the package
   catalog where a current offer was found; pantry staples stay in missing. */
(function () {
  function menu(id, store, cuisine, title, time, sale, missing, tags, filters, steps) {
    return {
      id, store, cuisine, title, time, tags,
      filter: [cuisine].concat(filters || []), sale, missing, steps
    };
  }

  const vegetarianQuick = ['quick', 'vegetarian'];
  const onePan = ['onepan'];
  const recipes = [
    menu('netto-fresh-chicken', 'Netto', 'korean', '닭안심 토마토·당근 볶음', 18,
      ['닭고기', '토마토', '당근'], ['마늘', '기름'], ['이번 주', '한 팬'], ['quick', 'onepan'],
      ['닭안심과 당근을 한입 크기로 썹니다.', '팬에 닭고기와 당근을 볶습니다.', '토마토와 마늘을 넣고 닭고기가 익을 때까지 볶습니다.']),
    menu('netto-chicken-potato', 'Netto', 'western', '닭고기 감자·당근 오븐구이', 35,
      ['닭고기', '감자', '당근'], ['허브', '기름'], ['오븐', '고단백'], [],
      ['감자와 당근을 큼직하게 썹니다.', '닭고기와 채소에 기름과 허브를 버무립니다.', '200°C에서 닭고기가 속까지 익도록 굽습니다.']),
    menu('netto-mince-tomato-pasta', 'Netto', 'western', '다짐육 토마토 파스타', 30,
      ['다진고기', '토마토', '파스타'], ['마늘', '양파'], ['든든한', '이번 주'], [],
      ['양파와 다짐육을 볶습니다.', '토마토를 넣고 소스를 졸입니다.', '삶은 파스타와 섞어 냅니다.']),
    menu('netto-pork-schnitzel', 'Netto', 'western', '돼지 슈니첼 + 레몬 감자', 30,
      ['돼지고기', '감자', '레몬'], ['밀가루', '버터'], ['독일식', '고단백'], [],
      ['감자를 삶거나 웨지로 굽습니다.', '슈니첼에 소금과 후추를 뿌립니다.', '팬에 구운 고기와 레몬 감자를 함께 냅니다.']),
    menu('netto-chicken-mushroom-zucchini', 'Netto', 'western', '닭고기 버섯·주키니 팬구이', 22,
      ['닭고기', '버섯', '주키니'], ['마늘', '올리브유'], ['한 팬', '채소 듬뿍'], onePan,
      ['닭고기를 먼저 볶아 덜어둡니다.', '버섯과 주키니를 센불에 볶습니다.', '닭고기를 되넣고 간을 맞춥니다.']),
    menu('netto-tomato-cheese-pasta', 'Netto', 'western', '토마토 치즈 파스타', 20,
      ['토마토', '치즈', '파스타'], ['마늘', '올리브유'], ['채식', '빠른 메뉴'], vegetarianQuick,
      ['파스타를 삶아 면수를 남깁니다.', '토마토와 마늘을 볶습니다.', '파스타와 치즈를 넣고 면수로 농도를 맞춥니다.']),
    menu('netto-chicken-rice-bowl', 'Netto', 'asian', '닭고기 당근 바스마티 덮밥', 25,
      ['닭고기', '쌀', '당근'], ['양파', '간장'], ['한 그릇', '고단백'], ['asian'],
      ['쌀을 씻어 밥을 짓습니다.', '닭고기와 당근을 볶습니다.', '간장으로 간해 밥 위에 올립니다.']),
    menu('netto-lentil-tomato', 'Netto', 'western', '토마토 당근 렌틸 스튜', 30,
      ['토마토', '당근'], ['렌틸', '채소 육수'], ['채식', '한 냄비'], onePan,
      ['당근과 토마토를 볶습니다.', '렌틸과 육수를 넣고 끓입니다.', '부드러워질 때까지 졸여 냅니다.']),
    menu('netto-roast-chicken-lemon', 'Netto', 'western', '레몬 닭고기 감자구이', 35,
      ['닭고기', '레몬', '감자'], ['허브', '올리브유'], ['오븐', '주말'], [],
      ['닭고기에 레몬즙을 뿌립니다.', '감자를 웨지로 잘라 함께 담습니다.', '오븐에서 노릇하게 굽습니다.']),
    menu('netto-bruschetta', 'Netto', 'western', '토마토 마늘 브루스케타', 12,
      ['토마토', '빵', '마늘'], ['올리브유', '치즈'], ['채식', '간단식'], vegetarianQuick,
      ['토마토와 마늘을 잘게 썹니다.', '빵을 바삭하게 굽습니다.', '토마토를 올려 바로 냅니다.']),
    menu('netto-yogurt-fruit', 'Netto', 'western', '요거트 바나나·사과 볼', 5,
      ['요거트', '바나나', '사과'], ['오트밀', '꿀'], ['아침', '채식'], vegetarianQuick,
      ['요거트와 오트밀을 담습니다.', '바나나와 사과를 썹니다.', '과일과 꿀을 올립니다.']),
    menu('netto-grape-cheese', 'Netto', 'western', '포도 치즈 브레드 플레이트', 10,
      ['포도', '치즈', '빵'], ['견과', '후추'], ['초간단', '채식'], vegetarianQuick,
      ['빵을 먹기 좋게 자릅니다.', '치즈와 포도를 곁들입니다.', '후추를 살짝 뿌려 냅니다.']),

    menu('edeka-chicken-tomato', 'EDEKA', 'western', '닭가슴살 토마토·파프리카 구이', 22,
      ['닭고기', '토마토', '파프리카'], ['마늘', '올리브유'], ['고단백', '한 팬'], onePan,
      ['닭가슴살과 파프리카를 썹니다.', '팬에서 닭고기를 먼저 익힙니다.', '토마토를 넣고 수분이 줄 때까지 볶습니다.']),
    menu('edeka-turkey-apple', 'EDEKA', 'korean', '칠면조 사과구이', 25,
      ['칠면조', '사과'], ['머스터드', '감자'], ['담백한 단백질'], [],
      ['칠면조를 먹기 좋은 크기로 썹니다.', '사과를 얇게 썹니다.', '팬에서 함께 구워 냅니다.']),
    menu('edeka-chicken-fruit-salad', 'EDEKA', 'western', '닭고기 토마토 과일 샐러드', 18,
      ['닭고기', '토마토', '파프리카'], ['레몬', '요거트'], ['가벼운', '고단백'], ['quick'],
      ['닭고기를 구워 식힙니다.', '토마토와 파프리카를 썹니다.', '요거트나 레몬 드레싱과 섞습니다.']),
    menu('edeka-grape-protein-roll', 'EDEKA', 'western', '포도·사과 프로틴 브레드', 8,
      ['포도', '사과', '빵'], ['요거트', '견과'], ['아침', '채식'], vegetarianQuick,
      ['빵을 반으로 가릅니다.', '사과와 포도를 썹니다.', '과일을 올려 바로 먹습니다.']),
    menu('edeka-berry-fruit-bowl', 'EDEKA', 'western', '블루베리 바나나 과일볼', 5,
      ['블루베리', '바나나', '사과'], ['요거트', '오트밀'], ['아침', '채식'], vegetarianQuick,
      ['과일을 씻어 준비합니다.', '요거트와 오트밀을 담습니다.', '과일을 올려 냅니다.']),
    menu('edeka-butter-tomato-toast', 'EDEKA', 'western', '버터 토마토 브레드', 10,
      ['버터', '토마토', '빵'], ['치즈', '허브'], ['간단식', '채식'], vegetarianQuick,
      ['빵에 버터를 바릅니다.', '토마토를 얇게 썹니다.', '빵을 굽고 토마토를 올립니다.']),
    menu('edeka-peach-yogurt', 'EDEKA', 'western', '복숭아 요거트 볼', 5,
      ['복숭아', '요거트'], ['오트밀', '꿀'], ['아침', '채식'], vegetarianQuick,
      ['복숭아를 한입 크기로 썹니다.', '요거트와 오트밀을 담습니다.', '복숭아와 꿀을 올립니다.']),
    menu('edeka-steak-grape', 'EDEKA', 'western', '스테이크 포도 샐러드', 25,
      ['소고기', '포도', '사과'], ['양상추', '올리브유'], ['특식', '고단백'], [],
      ['스테이크에 소금과 후추를 뿌립니다.', '팬에서 원하는 굽기로 익힙니다.', '포도와 사과를 곁들입니다.']),
    menu('edeka-chicken-paprika', 'EDEKA', 'asian', '닭고기 파프리카 볶음', 18,
      ['닭고기', '파프리카', '토마토'], ['쌀', '마늘'], ['빠른 메뉴', '한 팬'], ['quick', 'onepan'],
      ['닭고기를 얇게 썹니다.', '파프리카와 함께 볶습니다.', '토마토를 넣고 밥과 냅니다.']),
    menu('edeka-protein-bread-breakfast', 'EDEKA', 'western', '프로틴 브레드 버터·바나나', 8,
      ['빵', '버터', '바나나'], ['요거트', '꿀'], ['아침', '채식'], vegetarianQuick,
      ['빵을 토스트합니다.', '버터를 얇게 바릅니다.', '바나나를 올려 냅니다.']),
    menu('edeka-tomato-sauce-pasta', 'EDEKA', 'western', '토마토 소스 파스타', 20,
      ['토마토'], ['파스타', '마늘', '올리브유'], ['채식', '한 냄비'], ['vegetarian', 'onepan'],
      ['토마토 소스를 데웁니다.', '파스타를 삶아 면수를 남깁니다.', '소스와 면수를 섞어 마무리합니다.']),
    menu('edeka-chicken-legs', 'EDEKA', 'korean', '닭다리 토마토 조림', 35,
      ['닭고기', '토마토'], ['감자', '간장', '마늘'], ['한 냄비', '주말'], onePan,
      ['닭고기를 노릇하게 굽습니다.', '토마토와 양념을 넣습니다.', '뚜껑을 덮고 속까지 익힙니다.'])
  ];

  window.expandedMealExtras = recipes;
}());
