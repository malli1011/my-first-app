import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const classNames = [classes.InputElement];

    let validationError = null;

    if (props.invalid && props.shouldValidate && props.touched) {
        classNames.push(classes.Invalid);
    }

    if (props.invalid && props.touched) {
        validationError = <p>Please enter a valid value!</p>;
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={classNames.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={classNames.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case ('select'):
            inputElement = (<select className={classNames.join(' ')} value={props.value} onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>)
            break;
        default:
            inputElement = <input className={classNames.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;

    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
}

export default input;