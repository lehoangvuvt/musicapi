import React from 'react';
function CountryList(){
	return(
		<div>
		<select id="country-list" style={{'width':'150px','textAlign':'center'}}>
		
			<option value="australia">Australia</option>
			<option value="brazil">Brazil</option>
			<option value="canada">Canada</option>
			<option value="china">China</option>
			<option value="columbia">Colombia</option>
			<option value="cuba">Cuba</option>
			<option value="france">France</option>
			<option value="germany">Germany</option>
			<option value="india">India</option>
			<option value="italy">Italy</option>
			<option value="japan">Japan</option>
			<option value="Korea,%20Republic%20of">Korea, Republic of</option>
			<option value="spain">Spain</option>
			<option value="sweden">Sweden</option>
			<option value="united%20kingdom">United Kingdom</option>
			<option value="united%20states">United States</option>
			<option value="viet%20nam">Viet Nam</option>
		
		</select>
		</div>
		)
}
export default CountryList;