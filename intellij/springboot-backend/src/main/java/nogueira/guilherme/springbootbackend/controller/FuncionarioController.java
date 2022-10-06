package nogueira.guilherme.springbootbackend.controller;

import nogueira.guilherme.springbootbackend.exception.ResourceNotFoundException;
import nogueira.guilherme.springbootbackend.model.Funcionario;
import nogueira.guilherme.springbootbackend.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    // criar um funcionário

    @PostMapping("/funcionarios")
    public Funcionario criarFuncionario(@RequestBody Funcionario funcionario){
        return funcionarioRepository.save(funcionario);
    }

    // retorna funcionário por id
    @GetMapping("/funcionarios/{id}")
    public ResponseEntity<Funcionario> getFuncionarioById(@PathVariable Long id){
        Funcionario funcionario = funcionarioRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Funcionário não encontrado com id: " + id)
        );
        return ResponseEntity.ok(funcionario);
    }

}
