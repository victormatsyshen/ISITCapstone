import { React, Children, Component } from "react";
import { Link } from "react-router-dom";

class SideBarNav extends Component {

	constructor(props) {
		super(props);
		// static data for sidebar list
		this.state = {
			filter: "",
			data: [
				{
					id: 1,
					heading: "Nourish & Refresh",
					content: [
						{
							id: 1,
							dataLevel: 1,
							dataCategory: 1,
							dataSpace: 1.08,
							name: 'The Wizard',
							route: '/map/The-Wizard'
						},
						{
							id: 2,
							dataLevel: 1,
							dataCategory: 1,
							dataSpace: 1.01,
							name: 'Apple Heart',
							route: '/Apple-Heart'
						},
						{
							id: 3,
							dataLevel: 1,
							dataCategory: 1,
							dataSpace: 1.02,
							name: 'Crazy Banana',
							route: '/Crazy-Banana'
						},
						{
							id: 4,
							dataLevel: 2,
							dataCategory: 1,
							dataSpace: 2.05,
							name: 'The Eggplanthead',
							route: '/The-Eggplanthead'
						},
						{
							id: 5,
							dataLevel: 1,
							dataCategory: 1,
							dataSpace: 1.09,
							name: 'Smoothies &amp; Soul',
							route: '/Smoothies-Soul'
						},
						{
							id: 6,
							dataLevel: 1,
							dataCategory: 1,
							dataSpace: 1.06,
							name: 'Seed of Life',
							route: '/Seed-of-Life'
						},
						{
							id: 7,
							dataLevel: 1,
							dataCategory: 1,
							dataSpace: 1.07,
							name: 'Raw Delight',
							route: '/Raw-Delight'
						},
						{
							id: 8,
							dataLevel: 1,
							dataCategory: 2,
							dataSpace: 2.01,
							name: 'Grilled Chipotle',
							route: '/Grilled-Chipotle'
						},
						{
							id: 9,
							dataLevel: 3,
							dataCategory: 1,
							dataSpace: 3.01,
							name: 'Oolong House',
							route: '/Oolong-House'
						},
						{
							id: 10,
							dataLevel: 4,
							dataCategory: 1,
							dataSpace: 4.01,
							name: 'Cold Soup Kitchen',
							route: '/Cold-Soup-Kitchen'
						},
						{
							id: 11,
							dataLevel: 2,
							dataCategory: 1,
							dataSpace: 2.06,
							name: 'Superfood',
							route: '/Superfood'
						},
					]
				},
				{
					id: 2,
					heading: "Learn & Create",
					content: [
						{
							id: 12,
							dataLevel: 4,
							dataCategory: 2,
							dataSpace: 4.06,
							name: 'Love 2 Cook',
							route: '/Love-2-Cook'
						},
						{
							id: 13,
							dataLevel: 4,
							dataCategory: 2,
							dataSpace: 4.07,
							name: 'Permaculture Hub',
							route: '/Permaculture-Hub'
						},
						{
							id: 14,
							dataLevel: 1,
							dataCategory: 2,
							dataSpace: 1.03,
							name: 'Folding Life',
							route: '/Folding-Life'
						},
						{
							id: 15,
							dataLevel: 2,
							dataCategory: 2,
							dataSpace: 2.02,
							name: 'Rocketship Tech',
							route: '/Rocketship-Tech'
						},
						{
							id: 16,
							dataLevel: 2,
							dataCategory: 2,
							dataSpace: 2.03,
							name: 'Which Bug?',
							route: '/Which-Bug'
						},
						{
							id: 17,
							dataLevel: 3,
							dataCategory: 2,
							dataSpace: 3.02,
							name: 'Enlightend Path',
							route: '/Enlightend-Path'
						},
						{
							id: 18,
							dataLevel: 4,
							dataCategory: 2,
							dataSpace: 4.02,
							name: 'Docu Dome',
							route: '/Docu-Dome'
						},
					]
				},
				{
					id: 3,
					heading: "Swap & Give",
					content: [
						{
							id: 19,
							dataLevel: 4,
							dataCategory: 3,
							dataSpace: 4.03,
							name: 'Little Artist',
							route: '/Little-Artist'
						},
						{
							id: 20,
							dataLevel: 3,
							dataCategory: 3,
							dataSpace: 3.04,
							name: 'Your Last Shirt',
							route: '/Your-Last-Shirt'
						},
						{
							id: 21,
							dataLevel: 2,
							dataCategory: 3,
							dataSpace: 2.08,
							name: 'Tool Exchange',
							route: '/Tool-Exchange'
						},
						{
							id: 22,
							dataLevel: 1,
							dataCategory: 3,
							dataSpace: 1.04,
							name: 'Dress me not',
							route: '/Dress-me-not'
						},
						{
							id: 23,
							dataLevel: 2,
							dataCategory: 3,
							dataSpace: 2.04,
							name: 'Cognitio',
							route: '/Cognitio'
						},
						{
							id: 24,
							dataLevel: 3,
							dataCategory: 3,
							dataSpace: 3.03,
							name: 'What makes us walk',
							route: '/What-makes-us-walk'
						},
						{
							id: 25,
							dataLevel: 2,
							dataCategory: 3,
							dataSpace: 2.07,
							name: 'No Princess',
							route: '/No-Princess'
						},
					]
				},
				{
					id: 4,
					heading: "Relax & Recharge",
					content: [
						{
							id: 26,
							dataLevel: 3,
							dataCategory: 4,
							dataSpace: 3.07,
							name: 'Star Gazer',
							route: '/Star-Gazer'
						},
						{
							id: 27,
							dataLevel: 4,
							dataCategory: 4,
							dataSpace: 4.04,
							name: 'Space 16',
							route: '/Space-16'
						},
						{
							id: 28,
							dataLevel: 3,
							dataCategory: 4,
							dataSpace: 3.05,
							name: 'Breathe',
							route: '/Breathe'
						},
						{
							id: 29,
							dataLevel: 4,
							dataCategory: 4,
							dataSpace: 4.05,
							name: 'Hot Tub Festival',
							route: '/Hot-Tub-Festival'
						},
						{
							id: 30,
							dataLevel: 3,
							dataCategory: 4,
							dataSpace: 3.06,
							name: 'Feel the Grass',
							route: '/Feel-the-Grass'
						},
					]
				},
				
			]
		}
	}
	
	// set state to filter data
	filterLinks = event => {
		this.setState({ filter: event.target.value })
	}

	render () {

		const { filter, data } = this.state;
		const lowercasedFilter = filter.toLowerCase();
		
		// filter strings
		// const filterData = data.filter(item => {
		// 	return Object.keys(item).some(key =>
		// 		typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
		// 	)	
		// })

		const filterData = data.reduce((newData,item) => {
			let content = item.content.filter(content =>  content.name.toLowerCase().includes(lowercasedFilter))
			if (content.length) {
				newData.push( {
					id: item.id,
					heading: item.heading,
					content: content
				})
			}
			return newData;
		},[])



		return (
			<aside className="spaces-list" id="spaces-list">
				<div className="search">
					<input className="search__input" placeholder="Search..." value={filter} onChange={ this.filterLinks } />
					<button className="boxbutton boxbutton--darker close-search" aria-label="Close details"><svg className="icon icon--cross"></svg></button>
				</div>
				<span className="label">
					<input id="sort-by-name" className="label__checkbox" type="checkbox" aria-label="Show alphabetically"/>
					<label className="label__text">A - Z</label>
				</span>
				<ul className="list grouped-by-category">
					{ filterData.map(item => (
						<div className="sideBarSection" key={item.id}>
						{ item.id == 1 ? <h2 className="green" key={ item.id }>{ item.heading }</h2> : item.id == 2 ? <h2 className="blue" key={ item.id }>{ item.heading }</h2> :item.id == 3 ? <h2 className="red" key={ item.id }>{ item.heading }</h2> : <h2 className="lightBlue" key={ item.id }>{ item.heading }</h2> }

							{ item.content.map((list, i) => (
								<li className="list__item" data-level={ list.dataLevel } data-category={ list.dataCategory } data-space={ list.dataSpace } key={list.id}>
								<Link to={ list.route } className="list__link" >{ list.name }</Link>
							</li>
							)) }
						</div>
						
					)) }
				</ul>
			</aside>
		)
	}

   


}


export default SideBarNav;