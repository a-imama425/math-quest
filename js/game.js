let hp = 100;
let level = 1;
let questionNumber = 1;

document.body.innerHTML = `
<h1>⚔️ 数学クエスト ⚔️</h1>

<p>レベル: <span id="level">${level}</span></p>
<p>HP: <span id="hp">${hp}</span></p>

<h2>問題1</h2>

<p> x² - 5x + 6 = 0 の解は？ </p>

<button onclick="correct()">2,3</button>
<button onclick="wrong()">1,6</button>
<button onclick="wrong()">-2,-3</button>
<button onclick="wrong()">解なし</button>

<p id="message"></p>
`;

function correct() {

  hp = Math.min(100, hp + 10);

  document.getElementById("hp").textContent = hp;

  document.getElementById("message").textContent =
  "正解！HP+10";

}

function wrong() {

  hp -= 10;

  document.getElementById("hp").textContent = hp;

  document.getElementById("message").textContent =
  "不正解！HP-10";

  if(hp <= 0){
    alert("ゲームオーバー");
  }

}
