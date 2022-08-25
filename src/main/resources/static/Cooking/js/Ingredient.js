/* exported Ingredient */
/* globals */

'use strict';

const ingredientTemplate = document.getElementById('ingredient-template');

class Ingredient {
    constructor(ingredient, onClick) {
        this.ingredient = ingredient;
        this.onClick = onClick;
    }

    render() {
        this.ingredient.selected = false;
        const dom = ingredientTemplate.content.cloneNode(true);

        const image = dom.querySelector('img');
        image.src = 'images/' + this.ingredient.image;

        const input = dom.querySelector('input');
        input.addEventListener('change', () => {
            this.onClick(this.ingredient, input.checked);
            if(input.checked){
                image.classList.add('selected-ingredient');
            } else {image.classList.remove('selected-ingredient');}
        });
        
        return dom;
    }
}