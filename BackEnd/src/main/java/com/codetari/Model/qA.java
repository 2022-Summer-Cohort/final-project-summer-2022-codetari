package com.codetari.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Entity
public class qA {

    @Id
    @GeneratedValue
    private long id;

    private String answer;
    private String question;
    @ManyToOne
    @JsonIgnore
    private Game game;
    @ElementCollection
    private Collection<String> wrongA;



    public qA(String question, String answer, Game game, String...wrongA) {
        this.question = question;
        this.answer = answer;
        this.game = game;
        this.wrongA = Arrays.asList(wrongA);
    }

    public qA() {
    }

    public Game getGame() {
        return game;
    }

    public long getId() {
        return id;
    }

    public String getAnswer() {
        return answer;
    }

    public String getQuestion() {
        return question;
    }

    public Collection<String> getWrongA() {
        return wrongA;
    }

    //TODO: make boolean value
//    questionCorrect(){
//        if( question == answer){ return true}
//        else {return false}
//    }
}
