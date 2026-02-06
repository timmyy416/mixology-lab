/* 
  这是一个新的组件：DrinkCard (酒卡片)
  它的工作就是：接收一杯酒的数据，把它画得漂漂亮亮的。
*/

function DrinkCard({ drink }) {
    // 注意：这里的 { drink } 意思是从外界接收叫 drink 的数据
    return (
        <div
            style={{
                padding: "20px",
                border: "1px solid #eee",
                borderRadius: "12px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
            }}
        >
            <h3 style={{ margin: "0 0 10px 0" }}>{drink.name}</h3>
            <span
                style={{
                    fontSize: "14px",
                    color: "#666",
                    background: "#f5f5f5",
                    padding: "4px 8px",
                    borderRadius: "4px",
                }}
            >
                {drink.base}
            </span>
            <p style={{ fontSize: "14px", color: "#888" }}>
                口感描述：{drink.taste}
            </p>
        </div>
    );
}

export default DrinkCard;
