import React, { useState } from "react";
import "./PackingList.css";

const PackingList = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Passport", packed: false },
    { id: 2, name: "Clothes", packed: false },
    { id: 3, name: "Toothbrush", packed: false },
    { id: 4, name: "Charger", packed: false },
    { id: 5, name: "Snacks", packed: false },
  ]);

  const [newItem, setNewItem] = useState("");

  const togglePacked = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const addItem = () => {
    if (newItem.trim() === "") return;
    const newEntry = {
      id: Date.now(),
      name: newItem,
      packed: false,
    };
    setItems([...items, newEntry]);
    setNewItem("");
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="packing-container">
      <h1 className="packing-title">🧳 Packing List</h1>
      <p className="packing-subtitle">Plan smart, travel colorful ✨</p>

      {/* Add Item Section */}
      <div className="add-item">
        <input
          type="text"
          placeholder="Add new item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>➕ Add</button>
      </div>

      {/* Items Grid */}
      <div className="packing-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className={`packing-card ${item.packed ? "packed" : ""}`}
          >
            <span onClick={() => togglePacked(item.id)}>{item.name}</span>
            <div className="card-actions">
              <input
                type="checkbox"
                checked={item.packed}
                onChange={() => togglePacked(item.id)}
              />
              <button
                className="delete-btn"
                onClick={() => removeItem(item.id)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackingList;
