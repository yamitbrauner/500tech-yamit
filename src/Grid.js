import React from 'react';

function renderElement(row, col){
    let data = row[col.field];
    if (typeof col.component !== "undefined") {
        return React.createElement(col.component, {data: data});
    }else{
        return data;
    }
}

const Grid = ({ config, data }) => (
    <table>
        <thead>
            <tr>
                {config.map((col , index)=>{
                    return <th key={index}>{col.title}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {data.map((row, rowIndex)=>{
                return <tr key={rowIndex}>
                    {
                        config.map((col, colIndex)=>{
                            return <td key={rowIndex + "" + colIndex}> {renderElement(row,col)}</td>
                        })
                    }
                </tr>
            })}
        </tbody>
    </table>
);

export default Grid;