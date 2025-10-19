import axios from "axios";

const API_URL = "http://localhost:3000/books";

export async function getBooks() {
  return await axios.get(API_URL);
}

export async function getBookById(id) {
  return await axios.get(`${API_URL}/${id}`);
}

export async function createBook(book) {
  return await axios.post(API_URL, book);
}

export async function updateBook(id, book) {
  return await axios.put(`${API_URL}/${id}`, book);
}

export async function deleteBook(id) {
  return await axios.delete(`${API_URL}/${id}`);
}
