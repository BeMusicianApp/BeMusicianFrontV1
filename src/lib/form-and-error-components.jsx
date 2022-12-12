import { ErrorMessage } from 'formik';
import React from 'react';

const Input = ({
    noError,
    errorRight,
    className,
    type,
    field: { name },
    field,
    form: { errors, touched },
    ...rest
}) => {
    return (
        <div className="relative">
            <input
                id={name}
                name={name}
                type={type}
                className={`input ${
                    errors[name] && touched[name] && 'input-error'
                } ${className} `}
                {...field}
                {...rest}
            />
            {!noError && (
                <ErrorMessage
                    name={field.name}
                    className={`absolute bottom-0 text-xs text-red-500 ${
                        errorRight ? 'right-0' : 'left-0'
                    }`}
                    component="small"
                />
            )}
        </div>
    );
};

export default Input;