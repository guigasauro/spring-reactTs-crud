package nogueira.guilherme.springbootbackend.repository;

import nogueira.guilherme.springbootbackend.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario, Long>{

}
