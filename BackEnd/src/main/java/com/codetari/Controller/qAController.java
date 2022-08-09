package com.codetari.Controller;


import com.codetari.Model.Game;
import com.codetari.Model.qA;
import com.codetari.Repository.GameRepository;
import com.codetari.Repository.qARepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class qAController {

    private GameRepository gameRepo;
    private qARepository qARepo;


    public qAController(GameRepository gameRepo, qARepository qARepo) {
        this.gameRepo = gameRepo;
        this.qARepo = qARepo;
    }

    @GetMapping("/api/qA")
    public Iterable<qA> retrieveAllQa(){
        return qARepo.findAll();
    }

    @GetMapping("/api/qA/{id}")
    public qA retrieveQaById(@PathVariable Long id){
        return qARepo.findById(id).get();
    }
}