import React, { useState } from "react";
import "./App.scss";
import Character from "./component/character/character.component";
import SelectedContext from "./context/selected/selected.context";

function App() {
  const [content, setContent] = useState(
    "有人說邰哥你很棒啊我說這有什麼棒的剛好我會而已老天爺給你天賦你就善盡你會的東西沒什麼了不起邰智源主持的木曜四超玩成為第一個突破百萬訂閱的網路綜藝節目去年才傳出資金燒光得接業配苦撐今年七月就聯手柯讓一日幕僚該集衝出千萬點擊率如今以呈現各行各業甘苦風貌的一日系列基本都有百萬以上人次觀看這個在邰智源腦中醞釀五年的案子曾被拒於電視台門外轉往網路後反而如魚得水不僅上山下海大玩實境秀業配也接得光明正大處處可見甩脫傳統電視台包袱的靈活操作職業這種東西很多人都做過就像你拍紅樓夢已經一堆人演過不稀奇了只是由誰演從誰的角度去看如果體驗者是年輕人換成一個年過半百快掛了的人他還願意去嘗試就是一個新東西從電視跨進網路讓他重獲創作自由更藉此打造出全新商業模式電視台體制下的節目製作業務部門乃至廣告商等各自為政木曜四超玩團隊卻一條龍包辦將廣告與節目無縫接軌量身訂製的業配內容讓網友與廠商都甘願買單這是好事因為出錢是老大這件事情會被打破創作者才是老大廣告主能透過這個模式直接與創作者溝通不需透過中間商剝削身兼最老網紅資深藝人分屬新舊世代的兩種身分邰智源顯得游刃有餘此外他還主張尊重年輕人的創意聽他們的話耳朵打開不要故步自封自以為是有爭執的時候來我們好好的吵吵完以後如果你講得真的有道理那就全部聽你的而這也正是這位阿公網紅不被革命浪潮淹沒的成功祕訣"
  );
  const [inputZone, setInputZone] = useState("");
  const [start, setStart] = useState(false);
  const [selected, setSelected] = useState(null);

  const alterSelected = idx => setSelected(idx === selected ? null : idx);

  return (
    <div className="App">
      <h1>中文打字練習</h1>
      <main>
        <div className="stat">
          <span>所用時間</span>
          <span>精準度</span>
          <span>打字速度</span>
        </div>
        {start ? null : (
          <textarea
            className="inputcontent"
            value={content}
            onChange={e => setContent(e.target.value)}
          ></textarea>
        )}
        <button
          onClick={() => {
            setStart(!start);
            if (start === false) setSelected(null);
          }}
        >
          {start ? "Puase" : "Start"}
        </button>
        {start ? (
          <div className="inputarea">
            <textarea
              id="arena"
              value={inputZone}
              onChange={e => setInputZone(e.target.value)}
            ></textarea>
            <label htmlFor="arena">
              <SelectedContext.Provider
                value={{ selected: selected, setSelected: alterSelected }}
              >
                <div className="mainarticle">
                  {content.split("").map((text, idx) => {
                    return text.match(/\n/g) ? (
                      <br key={idx} />
                    ) : (
                      <Character
                        key={idx}
                        id={idx}
                        selected={selected}
                        setSelected={setSelected}
                      >
                        {text}
                      </Character>
                    );
                  })}
                </div>
              </SelectedContext.Provider>
            </label>
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default App;
