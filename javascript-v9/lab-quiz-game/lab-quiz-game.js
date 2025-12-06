const questions = [
    {
      category: "诗经",
      question: "《诗经》中“关关雎鸠，在河之洲”出自下列哪一篇?",
      choices: [ "A.《蒹葭》", "B.《关雎》", "C.《桃夭》" ],
      answer: "B.《关雎》",
    },
    {
      category: "文学常识",
      question: "被称为“诗仙”的诗人是?",
      choices: [ "A.杜甫", "B.白居易", "C.李白" ],
      answer: "C.李白",
    },
    {
      category: "文学理论",
      question: "“文章合为时而著，歌诗合为事而作”的主张来自?",
      choices: [ "A.韩愈", "B.柳宗元", "C.白居易" ],
      answer: "C.白居易",
    },
    {
      category: "古代小说",
      question: "以下哪部作品被认为是中国第一部长篇章回小说?",
      choices: [ "A.《水浒传》", "B.《三国演义》", "C.《红楼梦》" ],
      answer: "B.《三国演义》",
    },
    {
      category: "诗词",
      question: "“山河破碎风飘絮，身世浮沉雨打萍”出自陆游的?",
      choices: [ "A.《示儿》", "B.《秋夜将晓出篱门迎凉有感》", "C.《书愤》" ],
      answer: "C.《书愤》",
    },
    {
      category: "文学",
      question: "《出师表》的作者是?",
      choices: [ "A.刘备", "B.诸葛亮", "C.司马迁" ],
      answer: "B.诸葛亮",
    },
    {
      category: "元杂剧",
      question: "《窦娥冤》的作者是?",
      choices: [ "A.王实甫", "B.关汉卿", "C.白朴" ],
      answer: "B.关汉卿",
    },
    {
      category: "诗词",
      question: "“横看成岭侧成峰，远近高低各不同”写的是哪座山?",
      choices: [ "A.黄山", "B.华山", "C.庐山" ],
      answer: "C.庐山",
    },
    {
      category: "文学",
      question: "《史记》体例被称为?",
      choices: [ "A.紀传体", "B.编年体", "C.国别体" ],
      answer: "A.紀传体",
    },
    {
      category: "文学",
      question: "下列哪位不是“竹林七贤”成员?",
      choices: [ "A.嵇康", "B.阮籍", "C.王羲之" ],
      answer: "C.王羲之",
    }
  ];
  
  function getRandomQuestion(questions) {
    const idx = Math.floor(Math.random() * questions.length);
    return questions[idx];
  }
  
  function getRandomComputerChoice(choices) {
    const idx = Math.floor(Math.random() * choices.length);
    return choices[idx];
  }
  
  function getResults(question, choice) {
    if (question.answer === choice) {
      return "The computer's choice is correct!";
    } else {
      return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
  }