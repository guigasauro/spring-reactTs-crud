import React, { Component} from 'react';
import FuncionarioService from '../services/FuncionarioService';

class ListaFuncionariosComponent extends Component<any, any> {
    constructor(props:any){
        super(props);

        this.state = {
            funcionarios: []
        }
    }

    componentDidMount(): void {
        FuncionarioService.getFuncionarios().then((res) => {
            this.setState({funcionarios: res.data})
        })
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Lista de Funcionários</h2>
                <div className="row">
                  <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.funcionarios.map(
                                funcionario =>
                                <tr key = {funcionario.id}>
                                    <td>{funcionario.id}</td>
                                    <td>{funcionario.nome}</td>
                                    <td>{funcionario.email}</td>
                                    <td>{funcionario.cargo}</td>
                                </tr>
                            )
                        }
                    </tbody>
                  </table>
                </div>
            </div>
        );
    }
}

export default ListaFuncionariosComponent;