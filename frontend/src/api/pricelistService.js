import apiClient from "./apiClient";

export const getPricelist = async () => {
  try {
    const response = await apiClient.get("/pricelist");
    return response.data;
  } catch (error) {
    console.error("Error fetching pricelist:", error);
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await apiClient.patch(`/pricelist/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error(`Error updating product with ID ${id}:`, error);
    throw error;
  }
};
