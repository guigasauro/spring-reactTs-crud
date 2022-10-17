import React, {useState, useEffect} from 'react';
import * as FuncionariosService from '../services/FuncionariosService';
import { Link } from 'react-router-dom';

export default function ListaFuncionarios(){
    const [funcionarios, setFuncionarios] = useState<any[]>([]);

    useEffect(() => {
        FuncionariosService.getListaFuncionarios().then((response) =>{
                setFuncionarios(response.data);
            });
    }, []);

    const getData = () =>{
        FuncionariosService.getListaFuncionarios().then((getData) => {
            setFuncionarios(getData.data);
        })
    }

    const setData = (data) =>{
        let {id, nome, cpf, email, cargo, salario} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Nome', nome);
        localStorage.setItem('CPF', cpf);
        localStorage.setItem('E-mail', email);
        localStorage.setItem('Cargo', cargo);
        localStorage.setItem('Salario', JSON.stringify(salario));
    }

    const onDelete = (id) =>{
        FuncionariosService.deleteFuncionario(id).then(() =>{
            getData();
        })
    }

    return (
        <div>
            <h2 className='text-center'>Lista de Funcionários</h2>
            <div className='row'>
                <div className='col-md'>
                    <Link to={'/cadastra-funcionario'}>
                    <button type="button" className="btn btn-dark mb-3">Cadastrar Funcionário</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Email</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Salário</th>
                        <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {funcionarios.map((data) => {
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.nome}</td>
                                    <td>{data.cpf}</td>
                                    <td>{data.email}</td>
                                    <td>{data.cargo}</td>
                                    <td>{data.salario}</td>
                                    <td>
                                        <Link to={'/atualiza-funcionario'}>
                                        <button onClick={() => setData(data)} type="button" className="btn btn-sm btn-success mb-3">Atualizar</button>
                                        </Link>
                                        <button onClick={() => onDelete(data.id)} type="button" className="btn btn-sm btn-danger mb-3">Excluir</button>
                                    </td>
                                </tr>
                            )})}
                    </tbody>
                </table>
            </div>
        </div>
    );
}