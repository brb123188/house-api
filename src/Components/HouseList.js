import React from 'react';

const houseList = ( { data, handleEditClick, handleDeleteClick } ) => {
	return (
		<tr>
			<td>
				{ data.address }
			</td>

			<td>
				{ data.bedrooms }
			</td>

			<td>
				{ data.bathrooms }
			</td>

			<td>
				{ data.acres }
			</td>

			<td>
				{ data.squareFootage }
			</td>

			<td>
				{ data.price }
			</td>

			<td>
				{ data.description }
			</td>
			<td>
				<button
					className='btn btn-success'
					onClick = { ( event ) => handleEditClick( event, data ) }>
					Edit
				</button>
				<button
					className='btn btn-danger'
					data = { data }
					onClick = { () => handleDeleteClick( data._id ) }>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default houseList;