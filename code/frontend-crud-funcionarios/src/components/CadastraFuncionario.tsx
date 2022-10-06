import axios from "axios";
import React, { useState} from "react";
import { Link } from "react-router-dom";

export default function CadastrarFuncionario(){
    const [nome, setNome] = useState<string>('');
    const [cpf, setCPF] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [cargo, setCargo] = useState<string>('');
    const [salario, setSalario] = useState<number>();

    let funcionario = {
        nome: nome, 
        cpf: cpf, 
        email: email, 
        cargo: cargo, 
        salario: salario
    }

    const postData = () =>{
        axios.post('http://localhost:8080/api/v1/funcionarios', funcionario)
    }

    return(
        <div>
            <div className="row">
                <div className="col-12">
                    <h2 className="pb-2 border-bottom">Cadastrar Funcionario</h2>
                </div>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input className="form-control" placeholder="Nome" onChange={(e) => setNome(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3">
                            <label className="form-label">CPF</label>
                            <input className="form-control" placeholder="XXX.XXX.XXX-XX" onChange={(e) => setCPF(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input className="form-control" placeholder="email@exemplo.com" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3">
                            <label className="form-label">Cargo</label>
                            <input className="form-control" placeholder="Cargo" onChange={(e) => setCargo(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="mb-3">
                        <label className="form-label">Salário</label>
                        <input className="form-control" onChange={(e) => setSalario(parseInt(e.target.value))}/>
                    </div>
                </div>
                <Link to={'/'}>
                    <button onClick={postData} type="submit" className="btn btn-dark">Cadastrar</button>
                </Link>
            </form>
        </div>
    )
}