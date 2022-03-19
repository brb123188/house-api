import axios from 'axios';
import React, { useState } from 'react';

export default function AddHouse() {
	const [address, setAddress ]  =  useState( '' );
	const [ bedrooms, setBedrooms ]  =  useState( '' );
	const [ bathrooms, setBathrooms ]  =  useState( '' );
	const [ acres, setAcres ]  =  useState( '' );
	const [ squareFootage, setSquareFootage ]  =  useState( '' );
	const [ price, setPrice ]  =  useState( '' );
	const [ description, setDescription ]  =  useState( '' );
	

	const postData  = ()  => {
		axios.post(
			'https://crudcrud.com/api/d6dfc9852dc6440d9449f600671f2a7c/houses',
			{
				address,
				squareFootage,
				bedrooms,
				bathrooms,
				acres,
				price,
				description,
			}
		);
	};
	return (
		<div className = 'house-form'>
			<div className = 'house-form-box'>
				<h2> Add a  new house. </h2>
				<form>
					<label className = 'col-form-label'>Address </label>
					<input
						className = 'form-control'
						type = 'text'
						name = 'address'
						id = 'address'
						placeholder = 'HouseAddress'
						onChange  =  { ( e )  => setAddress( e.target.value ) }
					/>
					<label className = 'col-form-label'>Bedrooms </label>
					<input
						className = 'form-control'
						type = 'text'
						name = 'bedrooms'
						id = 'bedrooms'
						placeholder = '# of bedrooms'
						onChange  =  { ( e )  => setBedrooms( e.target.value ) }
					/>
					<label className = 'col-form-label'>Bathrooms </label>
					<input
						className = 'form-control'
						type = 'text'
						name = 'bathrooms'
						id = 'bathrooms'
						placeholder = '# of bathrooms'
						onChange  =  { ( e )  => setBathrooms( e.target.value ) }
					/>
					<label className = 'col-form-label'> Square Footage </label>
					<input
						className  =  'form-control'
						type = 'text'
						name = 'squareFootage'
						id = 'squareFootage'
						placeholder = 'Total sq ft'
						onChange  =  { ( e )  => setSquareFootage( e.target.value ) }
					/>
					<label className = 'col-form-label'> Acres </label>
					<input
						className  =  'form-control'
						type = 'text'
						name = 'acres'
						id = 'acres'
						placeholder = '# of Acres'
						onChange  =  { ( e )  => setAcres( e.target.value ) }
					/>
					<label className = 'col-form-label'> Price </label>
					<input
						className = 'form-control'
						type = 'text'
						name = 'price'
						id = 'price'
						placeholder = 'House Price'
						onChange  =  { ( e )  => setPrice( e.target.value ) }
					/>

					<label className = 'col-form-label'> Description </label>
					<textarea
						className = 'form-control'
						type = 'text'
						name = 'description'
						id = 'description'
						placeholder = 'Description'
						onChange  =  { ( e )  => setDescription( e.target.value ) }
					/>
					<button
						onClick  =  { postData }
						className = 'btn btn-primary mt-3'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}