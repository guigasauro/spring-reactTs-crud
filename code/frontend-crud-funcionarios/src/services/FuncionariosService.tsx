import axios from "axios";
import ListaFuncionarios from "../components/ListaFuncionarios";

const API_URL = 'http://localhost:8080/api/v1/funcionarios';

// Create
export function createFuncionario(funcionario: {}){
    return axios.post(API_URL, funcionario)
}

// Read
export function getListaFuncionarios(){
    return axios.get(API_URL);
}

// Update
export function updateFuncionario(id: number, funcionario: {}){
    return axios.put(API_URL + '/' +  id , funcionario);
}

// Delete
export function deleteFuncionario(id: number){
    return axios.delete(API_URL + '/' + id)
}