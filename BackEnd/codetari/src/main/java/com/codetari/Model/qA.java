package com.codetari.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Entity
public class qA {

    @Id
    @GeneratedValue
    private long id;


    @ManyToOne
    private String answer;
    private String question;
    private Collection<String> wrongA;



    public qA(String question, String answer, String...wrongA) {
        this.question = question;
        this.answer = answer;
        this.wrongA = (Collection<String>) Arrays.asList(wrongA);
    }

    public qA() {
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
