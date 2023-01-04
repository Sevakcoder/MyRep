import React from 'react';
// import { brewedAfter,brewedBefore } from '../../components/files/filterOptions';
import { brewedAfter, brewedBefore } from '../../components/files/filterOptions';
import { useSelector } from 'react-redux';
import { selectFilterKey } from '../../features/filterKeySlice';
import { selectBrewedAfter } from '../../features/brewedAfterSlice';
import { selectBrewedBefore } from '../../features/brewedBeforeSlice';
import { selectSearch } from '../../features/searchSlice';

interface IFilterProps {
    handleFilter: Function,
    filterStyle: string,
    filterRef: any
}

const Filter = ({ handleFilter, filterStyle, filterRef }: IFilterProps) => {
    const filterKey = useSelector(selectFilterKey)
    const defaultFilter = {
        brewedAfter: useSelector(selectBrewedAfter),
        brewedBefore: useSelector(selectBrewedBefore),
        searchValue: useSelector(selectSearch),
    }
    return (
        <div key={filterKey} id="filter-div" style={{ display: filterStyle }}>
            <div id="filter" >
                <ul>
                    <li>
                        <span> First brewed year </span>
                        <select defaultValue={defaultFilter.brewedAfter} ref={filterRef.brewedAfterRef}
                            className={"brewed-after-before"}
                            onChange={(evt) => {
                                handleFilter(evt.target.value, filterRef.brewedBeforeRef.current.value
                                    , filterRef.searchRef.current.value)
                            }} >
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
                                    , evt.target.value, filterRef.searchRef.current.value)
                            }} >
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
                                    , filterRef.brewedBeforeRef.current.value
                                    , evt.target.value)
                            }} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Filter;