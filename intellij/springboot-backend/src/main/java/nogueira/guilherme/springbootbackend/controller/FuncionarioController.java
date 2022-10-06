package nogueira.guilherme.springbootbackend.controller;

import nogueira.guilherme.springbootbackend.exception.ResourceNotFoundException;
import nogueira.guilherme.springbootbackend.model.Funcionario;
import nogueira.guilherme.springbootbackend.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    // atualiza funcionário
    @PutMapping("/funcionarios/{id}")
    public ResponseEntity<Funcionario> atualizaFuncionario(
            @PathVariable Long id,
            @RequestBody Funcionario funcionarioDetails){

        Funcionario funcionario = funcionarioRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Funcionário não encontrado com id: " + id)
        );

        funcionario.setNome(funcionarioDetails.getNome());
        funcionario.setCpf(funcionarioDetails.getCpf());
        funcionario.setEmail(funcionarioDetails.getEmail());
        funcionario.setCargo(funcionarioDetails.getCargo());
        funcionario.setSalario(funcionarioDetails.getSalario());

        Funcionario funcionarioAtualizado = funcionarioRepository.save(funcionario);
        return ResponseEntity.ok(funcionarioAtualizado);
    }


    // excluir funcionário
    @DeleteMapping("/funcionarios/{id}")
    public ResponseEntity<Map<String, Boolean>> excluiFuncionario(@PathVariable Long id){
        Funcionario funcionario = funcionarioRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Funcionário não encontrado com id: " + id)
        );

        funcionarioRepository.delete(funcionario);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
