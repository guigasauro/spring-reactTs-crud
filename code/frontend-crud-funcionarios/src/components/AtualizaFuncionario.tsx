import axios from "axios";
import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ListaFuncionarios from "./ListaFuncionarios";

export default function CadastrarFuncionario(){

    const [id, setID] = useState<any | null>(null);
    const [nome, setNome] = useState<string>('');
    const [cpf, setCPF] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [cargo, setCargo] = useState<string>('');
    const [salario, setSalario] = useState<number>();

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setNome(localStorage.getItem('Nome') as string)
        setCPF(localStorage.getItem('CPF') as string)
        setEmail(localStorage.getItem('E-mail') as string)
        setCargo(localStorage.getItem('Cargo') as string)
        setSalario(parseInt(localStorage.getItem('Salario') as string))

    }, [])

    let funcionario = {
        id: id,
        nome: nome, 
        cpf: cpf, 
        email: email, 
        cargo: cargo, 
        salario: salario
    }

    const updateAPIData = () =>{
        axios.put('http://localhost:8080/api/v1/funcionarios' + '/' +  id , funcionario);
    }

    return(
        <div>
            <div className="row">
                <div className="col-12">
                    <h2 className="pb-2 border-bottom">Atualizar Funcionario</h2>
                </div>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input className="form-control" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3">
                            <label className="form-label">CPF</label>
                            <input className="form-control" placeholder="XXX.XXX.XXX-XX" value={cpf} onChange={(e) => setCPF(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input className="form-control" placeholder="email@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3">
                            <label className="form-label">Cargo</label>
                            <input className="form-control" placeholder="Cargo" value={cargo} onChange={(e) => setCargo(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="mb-3">
                        <label className="form-label">Salário</label>
                        <input className="form-control" value={salario} onChange={(e) => setSalario(parseInt(e.target.value))}/>
                    </div>
                </div>
                <Link to={'/'}>
                    <button onClick={updateAPIData} type="submit" className="btn btn-dark">Atualizar</button>
                </Link>
            </form>
        </div>
    )
}