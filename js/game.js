const questions = [
  {
    q:"x²-5x+6=0 の解は？",
    choices:["2,3","1,6","-2,-3","解なし"],
    answer:0
  },
  {
    q:"√144 = ?",
    choices:["10","11","12","13"],
    answer:2
  },
  {
    q:"3x+5=20",
    choices:["5","4","3","2"],
    answer:0
  }
];

let hp = 100;
let maxHp = 100;
let level = 1;
let current = 0;

function showQuestion(){

  const q = questions[current];

  document.body.innerHTML = `
    <h1>⚔️ 数学クエスト ⚔️</h1>

    <p>Lv:${level}</p>
    <p>HP:${hp}/${maxHp}</p>

    <h2>${q.q}</h2>

    ${q.choices.map((c,i)=>
      `<button onclick="answer(${i})">${c}</button>`
    ).join("<br><br>")}

    <p>${current+1} / ${questions.length}</p>
  `;
}

function answer(index){

  if(index === questions[current].answer){
    hp = Math.min(maxHp,hp+10);
    alert("正解！");
  }else{
    hp -= 10;
    alert("不正解！");
  }

  if(hp <= 0){
    alert("ゲームオーバー");
    return;
  }

  current++;

  if(current >= questions.length){

    level++;
    maxHp += 20;
    hp = maxHp;

    alert("レベルアップ！");

    current = 0;
  }

  showQuestion();
}

questions.sort(() => Math.random() - 0.5);

showQuestion();
