import React, {useState} from 'react';
import Affairs from './Affairs';
import affair from './Affair';

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType = {
	_id: number
	name: string
	priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType
//export type defaultAffairsType = Array<AffairType>

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
	{_id: 1, name: 'React', priority: 'high'},
	{_id: 2, name: 'anime', priority: 'low'},
	{_id: 3, name: 'games', priority: 'low'},
	{_id: 4, name: 'work', priority: 'high'},
	{_id: 5, name: 'html & css', priority: 'middle'},
];

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
	if (filter === 'all') return affairs;
	else return affairs.filter(affair => affair.priority === filter);
};

export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
	return affairs.filter(affair => affair._id !== _id);

};

function HW2() {
	const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs); // need to fix any
	const [filter, setFilter] = useState<FilterType>('all');

	const filteredAffairs = filterAffairs(affairs, filter);
	const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

	return (
		<section className="section">
			<div className="container">
				<h2 className="title">Homework 2</h2>
				<Affairs
					data={filteredAffairs}
					setFilter={setFilter}
					deleteAffairCallback={deleteAffairCallback}
					filter={filter}
				/>
			</div>
        </section>
	);
}

export default HW2;
