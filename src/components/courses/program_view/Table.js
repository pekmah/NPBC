import React from 'react';

/**
 * @typedef {{headerList:Array<string>, data:ProgramRow[]}} Props
 */

/**
 * @return {JSX.Element}
 * @param {Props} props
 */
function Table(props) {
    const {headerList, data} = props

    return (
        <table className=" text-c-blue">
            <thead>
            <tr className={"bg-bg-blue "}>
                {
                    headerList?.map((item, key) => (
                        <th key={key} className={`text-left w-1/6 py-2 px-1`}>{item}</th>
                    ))
                }

            </tr>
            </thead>
            <tbody>
            {
                data?.map((item, key) => (
                    <tr key={key} className={"border-b border-line-gray font-medium"}>
                        {
                            Object.keys(item).map((cKey, key) => (
                                <td key={key}
                                    className={`text-sm w-1/6 py-3 px-1`}>{item[cKey]}</td>
                            ))
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
