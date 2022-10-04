package nogueira.guilherme.springbootbackend.controller;

import nogueira.guilherme.springbootbackend.model.Funcionario;
import nogueira.guilherme.springbootbackend.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class FuncionarioController {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    // retornar todos os funcionários
    @GetMapping("/funcionarios")
    public List<Funcionario> listarTodosFuncionarios(){
        return funcionarioRepository.findAll();
    }
}
