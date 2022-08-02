package com.codetari.Controller;


import com.codetari.Repository.GameRepository;
import com.codetari.Repository.qARepository;
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


}
