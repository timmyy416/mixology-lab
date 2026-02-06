import { useState } from "react";
import DrinkCard from "./DrinkCard";

// 1. 模拟数据库：这里可以放你以后喜欢的调酒配方
const COCKTAILS = [
  { id: 1, name: "Gimlet (琴蕾)", base: "Gin", taste: "酸甜清爽" },
  { id: 2, name: "Martini (马天尼)", base: "Gin", taste: "干练强劲" },
  { id: 3, name: "Mojito (莫吉托)", base: "Rum", taste: "薄荷清香" },
  { id: 4, name: "Highball (嗨棒)", base: "Whiskey", taste: "气泡十足" },
  { id: 5, name: "Negroni(尼尔罗尼)", base: "Gin", taste: "苦甜平衡" },
  { id: 6, name: "Old Fashioned (古典)", base: "Whiskey", taste: "醇厚经典" },
  { id: 7, name: "Daiquiri (大吉利)", base: "Rum", taste: "酸甜平衡" },
];

function App() {
  // 2. 定义状态：记录用户当前点击了哪个基酒按钮
  // useState('All') 表示初始状态是显示“全部”
  const [activeBase, setActiveBase] = useState("All");

  const [searchQuery, setSearchQuery] = useState(""); // 初始是空字符串

  // 3. 计算过滤结果：如果选了 All 就显示全部，否则只显示匹配的基酒
  const displayList = COCKTAILS.filter((drink) => {
    // 条件 A：基酒得匹配（如果是 All 或者是选中的基酒）
    const matchBase = activeBase === "All" || drink.base === activeBase;

    // 条件 B：名字得包含搜索的文字
    const matchSearch = drink.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // 只有 A 和 B 同时满足，这杯酒才会显示出来
    return matchBase && matchSearch;
  });

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <header>
        <h1>🍸 Mixology Lab</h1>
        <p>选择你手头的基酒，看看能调什么？</p>
      </header>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="搜索酒名（如：Gimlet）..."
          value={searchQuery}
          // 关键：当用户打字时，立刻把文字存进存储格
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        />
      </div>

      {/* 4. 交互按钮组 */}
      <nav style={{ margin: "20px 0", display: "flex", gap: "10px" }}>
        {["All", "Gin", "Rum", "Whiskey"].map((base) => (
          <button
            key={base}
            onClick={() => setActiveBase(base)} // 点击时修改状态
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: "1px solid #ddd",
              cursor: "pointer",
              // 5. 动态样式：选中的按钮变深色
              backgroundColor: activeBase === base ? "#6bdaf6ff" : "#fff",
              color: activeBase === base ? "#fff" : "#333",
            }}
          >
            {base}
          </button>
        ))}
      </nav>

      {/* 6. 酒谱展示区域 */}
      <main style={{ display: "grid", gap: "15px" }}>
        {displayList.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </main>
    </div>
  );
}

export default App;
