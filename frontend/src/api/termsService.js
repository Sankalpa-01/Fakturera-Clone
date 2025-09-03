import apiClient from "./apiClient";

export const getTerms = async (lang) => {
  try {
    const response = await apiClient.get(`/terms/${lang}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching terms for language "${lang}":`, error);
    throw error;
  }
};

export const updateTerms = async (lang, content) => {
  try {
    const response = await apiClient.put(`/terms/${lang}`, { content });
    return response.data;
  } catch (error) {
    console.error(`Error updating terms for language "${lang}":`, error);
    throw error;
  }
};
