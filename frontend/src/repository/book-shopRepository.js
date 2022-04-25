import axios from "../custom-axios/axios";

const BookShopService = {
    fetchCountries : () => {
        return axios.get("/countries");
    },
    fetchAuthors : () => {
        return axios.get("/authors");
    },
    fetchBooks : () => {
        return axios.get("/books");
    },
    fetchCategories : () => {
        return axios.get("/books/categories")
    },
    addBook : (name, category, author, availableCopies) => {
        return axios.post("/books/add", {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        });
    },
    editBook : (id, name, category, author, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        });
    },
    deleteBook : (id) => {
        return axios.delete(`/books/delete/${id}`)
    },
    getBook : (id) => {
        return axios.get(`/book/${id}`);
    },
    getAllCategories : () => {
        return axios.get("/books/categories");
    },
    markAsTaken: (id) => {
        return axios.get(`/books/${id}`);
    }
}

export default BookShopService;