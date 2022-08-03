package com.codetari.Controller;


import com.codetari.Model.Game;
import com.codetari.Repository.GameRepository;
import com.codetari.Repository.qARepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class GameController {

    private GameRepository gameRepo;
    private qARepository qARepo;

    public GameController(GameRepository gameRepo, qARepository qARepo) {
        this.gameRepo = gameRepo;
        this.qARepo = qARepo;
    }

    @GetMapping("/api/games")
    public Iterable<Game> retrieveAllGames(){
        return gameRepo.findAll();
    }


    @GetMapping("/api/games/{id}")
    public Game retrieveGameById(@PathVariable Long id){
        return gameRepo.findById(id).get();
    }



}
