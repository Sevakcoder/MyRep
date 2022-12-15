import React from 'react';
import { brewedAfter,brewedBefore } from '../../components/files/filterOptions';
import { filterKeyContext } from '../../App';
import { useContext } from 'react';
import { IFilterValue } from '../../data-structures/interfaces';

interface IComponentValue {
    handleFilter: Function,
    defaultFilter: IFilterValue,
    filterStyle: string,
    filterRef: any
}

const Filter = ({handleFilter,defaultFilter,filterStyle,filterRef}: IComponentValue) => {
    const key = useContext(filterKeyContext)
    return (
        <div key={key} id="filter-div" style={{display: filterStyle}}>
            <div id="filter" >
                <ul>
                    <li>
                        <span> First brewed year </span>
                        <select  defaultValue={defaultFilter.brewedAfter} ref={filterRef.brewedAfterRef} 
                            className={"brewed-after-before"}
                            onChange={(evt) => {
                            handleFilter(evt.target.value,filterRef.brewedBeforeRef.current.value
                            ,filterRef.searchRef.current.value)}} >
                            {
                                brewedAfter.map((item, index) => {
                                    return <option key={index} value={item.value}>{item.name}</option> 
                                })
                            }
                        </select>
                    </li>
                    <li>
                        <select defaultValue={defaultFilter.brewedBefore} ref={filterRef.brewedBeforeRef} 
                            className={"brewed-after-before"}
                            onChange={(evt) => {
                            handleFilter(filterRef.brewedAfterRef.current.value
                            ,evt.target.value,filterRef.searchRef.current.value)}} >
                            {
                                brewedBefore.map((item, index) => {
                                    return <option key={index} value={item.value}>{item.name}</option> 
                                })
                            }
                        </select>
                    </li>
                    <li>
                        <input defaultValue={defaultFilter.searchValue} type="text" 
                        placeholder="Search your beer" ref={filterRef.searchRef}
                        className={"item-search"}
                        onChange={(evt) => {
                            handleFilter(filterRef.brewedAfterRef.current.value
                            ,filterRef.brewedBeforeRef.current.value
                            ,evt.target.value)
                        }} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Filter;