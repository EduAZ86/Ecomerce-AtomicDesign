import { ITypographyProps } from "./types";
import { FC } from 'react'

export const MainTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <h1
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'}
            text-center
            ${textSize ? textSize : 'text-3xl md:text-4xl'} 
            
            m-0
                       
            ${textColor && `text-light-${textColor} dark:text-dark-${textColor}`}         
            `
            }
            style={style}
        >
            {children}
        </h1>
    );
};

export const Title: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <h2
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'}
            text-center
            ${textSize ? textSize : 'text-2xl md:text-3xl'}           
            
            ${textColor && `text-light-${textColor} dark:text-dark-${textColor}`}           
            `
            }
            style={style}
        >
            {children}
        </h2>
    );
};

export const SubTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <h2
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'}
            ${textSize ? textSize : 'text-xl md:text-2xl'} 
             m-0 
             
            ${textColor && `text-light-${textColor} dark:text-dark-${textColor}`}          
            `
            }
            style={style}
        >
            {children}
        </h2>
    );
};

export const CardTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <h3
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            ${textSize ? textSize : 'text-xl'} 
            
            m-0
            ${textColor && `text-light-${textColor} dark:text-dark-${textColor}`} 
            `}
            style={style}
        >
            {children}
        </h3>
    );
};


export const Paragraph: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textSize, textColor, style }) => {
    return (
        <p
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            ${textSize ? textSize : 'text-sm'}
            
             m-0
             ${textColor && `text-light-${textColor} dark:text-dark-${textColor}`}   
             `
            }
            style={style}
        >
            {children}
        </p>
    );
};

export const TextError: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <span
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            ${textSize ? textSize : 'text-sm'} 
             m-0
            ${textColor && `text-light-${textColor} dark:text-dark-${textColor}`} 
            `}
            style={style}
        >
            {children}
        </span>
    );
};

export const TextButton: FC<ITypographyProps> = ({ align = 'text-left', children, textColor, textSize, style }) => {
    return (
        <span
            className={`
        md:${align} font-bold 
        ${textSize ? textSize : 'text-sm'}
        
        ${textColor && `text-light-${textColor} dark:text-dark-${textColor}`} 
        `}
        style={style}
        >
            {children}
        </span>
    );
};

export const Label: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <label
            className={`
        md:${align}  
        ${textSize ? textSize : 'text-sm'}
        
        ${textColor && `text-light-${textColor} dark:text-dark-${textColor}`} 
        cursor-pointer
        `}
        style={style}
        >
            {children}
        </label>
    );
};
export const AltText: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <span
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'}
            text-center
            ${textSize ? textSize : 'text-3xs'} 
             
             m-0 
             ${textColor && `text-light-${textColor} dark:text-dark-${textColor}`}   
            `}
            style={style}
        >
            {children}
        </span>
    );
};