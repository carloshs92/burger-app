import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map((key) => {
        let ingredientQuantity, ingredientsList;
        ingredientQuantity = [...Array(props.ingredients[key])];
        ingredientsList = ingredientQuantity.map((_, index) => {
            return <BurgerIngredient type={key} key={key + index}/>
        });
        return ingredientsList
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Por favor, seleccione ingredientes.</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;