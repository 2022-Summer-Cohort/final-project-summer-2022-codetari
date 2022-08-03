package com.codetari.Repository;

import com.codetari.Model.Game;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository extends CrudRepository <Game, Long>{

}