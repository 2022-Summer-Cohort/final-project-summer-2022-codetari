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

    private String language;
    private String level;


    public qA(String question, String answer, Game game,String language, String level, String... wrongA) {
        this.question = question;
        this.answer = answer;
        this.game = game;
        this.language = language;
        this.level = level;
        this.wrongA = Arrays.asList(wrongA);
    }

    public qA() {    }

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

    public String getLanguage() {return language;}

    public String getLevel() {return level;}
}


