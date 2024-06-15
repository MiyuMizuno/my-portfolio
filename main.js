const onsenText = document.getElementById("onsen");
const driveText = document.getElementById("drive");
const eatText = document.getElementById("eat");
const onsenImg = document.getElementById("onsenImg");
const driveImg = document.getElementById("driveImg");
const eatImg = document.getElementById("eatImg");
onsenText.style.display = "none";

//質問① onsenImgにマウスが乗ったときのみonsenTextを表示したい。
onsenImg.onmouseover = function () {
  console.log(0);
  if (onsenText.style.display !== "none") {
    onsenText.style.display = "none";
  } else {
    onsenText.style.display = "";
  }
};

const movieButton1 = document.getElementById("movieButton1");
const movieButton2 = document.getElementById("movieButton2");
const movieButton3 = document.getElementById("movieButton3");
const movieFb = document.getElementById("movieFb");

const colorButton1 = document.getElementById("colorButton1");
const colorButton2 = document.getElementById("colorButton2");
const colorButton3 = document.getElementById("colorButton3");
const colorFb = document.getElementById("colorFb");

const aniButton1 = document.getElementById("aniButton1");
const aniButton2 = document.getElementById("aniButton2");
const aniButton3 = document.getElementById("aniButton3");
const aniFb = document.getElementById("aniFb");

const playButton1 = document.getElementById("playButton1");
const playButton2 = document.getElementById("playButton2");
const playButton3 = document.getElementById("playButton3");
const playFb = document.getElementById("playFb");

//クイズ内容
//映画
const Movie = {
  choices: [
    {
      text: "スターウォーズ",
      movieFbText: "🗣残念！違うよ〜",
    },
    {
      text: "マーベル",
      movieFbText: "🗣大正解~!!!!",
    },
    {
      text: "ハリーポッター",
      movieFbText: "🗣残念！!違うよ〜",
    },
  ],
};
//色
const Color = {
  choices: [
    {
      text: "グレー",
      colorFbText: "🗣残念！違うよ〜",
    },
    {
      text: "むらさき",
      colorFbText: "🗣大正解~!!!!",
    },
    {
      text: "オレンジ",
      colorFbText: "🗣残念！!違うよ〜",
    },
  ],
};
//動物
const Ani = {
  choices: [
    {
      text: "犬",
      aniFbText: "🗣大正解~!!!!",
    },
    {
      text: "コアラ",
      aniFbText: "🗣残念！違うよ〜",
    },
    {
      text: "きつね",
      aniFbText: "🗣残念！!違うよ〜",
    },
  ],
};
//遊び
const Play = {
  choices: [
    {
      text: "モンスト",
      playFbText: "🗣残念！違うよ〜",
    },
    {
      text: "スプラトゥーン",
      playFbText: "🗣残念！!違うよ〜",
    },
    {
      text: "ポケモンカード",
      playFbText: "🗣大正解~!!!!",
    },
  ],
};

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 選択肢（ボタン）の中身を表示
  //映画
  movieButton1.textContent = Movie.choices[0].text;
  movieButton2.textContent = Movie.choices[1].text;
  movieButton3.textContent = Movie.choices[2].text;

  //色
  colorButton1.textContent = Color.choices[0].text;
  colorButton2.textContent = Color.choices[1].text;
  colorButton3.textContent = Color.choices[2].text;

  //動物
  aniButton1.textContent = Ani.choices[0].text;
  aniButton2.textContent = Ani.choices[1].text;
  aniButton3.textContent = Ani.choices[2].text;

  //遊び
  playButton1.textContent = Play.choices[0].text;
  playButton2.textContent = Play.choices[1].text;
  playButton3.textContent = Play.choices[2].text;
};

// choiceNumber番目の選択肢を選択
const chooseMovie = function (choiceMovieNumber) {
  // フィードバックを表示
  movieFb.textContent = Movie.choices[choiceMovieNumber].movieFbText;
};
const chooseColor = function (choiceColorNumber) {
  // フィードバックを表示
  colorFb.textContent = Color.choices[choiceColorNumber].colorFbText;
};
const chooseAni = function (choiceAniNumber) {
  aniFb.textContent = Ani.choices[choiceAniNumber].aniFbText;
};
const choosePlay = function (choicePlayNumber) {
  playFb.textContent = Play.choices[choicePlayNumber].playFbText;
};
//押した時
movieButton1.onclick = function () {
  // 0 番目の選択肢を選択
  chooseMovie(0);
};
movieButton2.onclick = function () {
  // 1 番目の選択肢を選択
  chooseMovie(1);
};
movieButton3.onclick = function () {
  // 2 番目の選択肢を選択
  chooseMovie(2);
};

colorButton1.onclick = function () {
  // 0 番目の選択肢を選択
  chooseColor(0);
};
colorButton2.onclick = function () {
  // 1 番目の選択肢を選択
  chooseColor(1);
};
colorButton3.onclick = function () {
  // 2 番目の選択肢を選択
  chooseColor(2);
};

aniButton1.onclick = function () {
  // 0 番目の選択肢を選択
  chooseAni(0);
};
aniButton2.onclick = function () {
  // 1 番目の選択肢を選択
  chooseAni(1);
};
aniButton3.onclick = function () {
  // 2 番目の選択肢を選択
  chooseAni(2);
};

playButton1.onclick = function () {
  // 0 番目の選択肢を選択
  choosePlay(0);
};
playButton2.onclick = function () {
  // 1 番目の選択肢を選択
  choosePlay(1);
};
playButton3.onclick = function () {
  // 2 番目の選択肢を選択
  choosePlay(2);
};

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz();

for (let movieNumber = 0; movieNumber <= movieButton.length; movieNumber++) {
  movieButton[movieNumber].onclick = function () {
    movieFb.textContent = movieFbText[movieNumber];
  };
}

for (let aniNumber = 0; aniNumber <= aniButton.length; aniNumber++) {
  aniButton[aniNumber].onclick = function () {
    aniFb.textContent = aniFbText[aniNumber];
  };
}
for (let playNumber = 0; playNumber <= playButton.length; playNumber++) {
  playButton[playNumber].onclick = function () {
    playFb.textContent = playFbText[playNumber];
  };
}

///ここからはMood//
const moodButton = document.getElementById("moodButton");
const moodText = document.getElementById("moodText");

//質問② moodボタンを押したとき、230行目以降を適応して背景色を変更したい
moodButton.onclick = function () {
  moodText.textContent = "いい感じ！";
  changeColor();
};

function changeColor() {
  document.body.style.backgroundColor = "#202f55";
  document.body.style.color = "#f5ecf4";
  document.header.style.backgroundColor = "#bcbace";
}
