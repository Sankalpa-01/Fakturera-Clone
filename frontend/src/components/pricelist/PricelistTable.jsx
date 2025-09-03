import React, { useState, useEffect } from "react";
import { getPricelist, updateProduct } from "../../api/pricelistService";
import PricelistHeader from "./PricelistHeader";
import PricelistRow from "./PricelistRow";
import "../../styles/PricelistPage.css";

const PricelistTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeRow, setActiveRow] = useState(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getPricelist();
        setProducts(data);
        if (data.length > 0) {
          setActiveRow(data[0].id); // Set the first row as active initially
        }
      } catch (err) {
        setError("Failed to fetch pricelist.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // This function is called from PricelistRow when any input changes
  const handleProductChange = (id, updatedProduct) => {
    const newProducts = products.map((p) => (p.id === id ? updatedProduct : p));
    setProducts(newProducts);

    // Here you would typically "debounce" the API call
    // For this SOW, we can call it directly or on blur
    // For simplicity, we'll imagine it saves on blur (or via a save button)
    // To meet the SOW, you could call updateProduct here:
    // updateProduct(id, updatedProduct);
  };

  // A simple save function to be called on blur or with a button
  const handleSaveProduct = async (id) => {
    const productToSave = products.find((p) => p.id === id);
    if (productToSave) {
      try {
        await updateProduct(id, productToSave);
        console.log(`Product ${id} saved!`);
      } catch (err) {
        console.error(`Failed to save product ${id}`, err);
        // Optionally revert changes or show an error message
      }
    }
  };

  if (loading) return <p>Loading pricelist...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="pricelist-container">
      <table className="pricelist-table">
        <PricelistHeader />
        <tbody
          onBlur={(e) => {
            // Find the closest parent row ID to handle saving
            const row = e.target.closest("tr");
            if (row && activeRow) handleSaveProduct(activeRow);
          }}
        >
          {products.map((product) => (
            <PricelistRow
              key={product.id}
              product={product}
              isActive={product.id === activeRow}
              onProductChange={handleProductChange}
              onRowFocus={setActiveRow}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricelistTable;
