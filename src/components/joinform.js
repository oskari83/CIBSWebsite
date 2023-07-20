'use client'

import './joinform.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function JoinForm() {
	const router = useRouter()

	const [firstname, setFirstname] = useState(''); 
	const [lastname, setLastname] = useState(''); 
	const [cambridgeEmail, setCambridgeEmail] = useState(''); 
	const [nonCambridgeEmail, setNonCambridgeEmail] = useState(''); 

	const [degreeSubject, setDegreeSubject] = useState('');

	const handleFirstnameChange = (e) => {
        const val = e.target.value;
        setFirstname(val);
    };

	const handleLastnameChange = (e) => {
        const val = e.target.value;
        setLastname(val);
    };

	const handleCambridgeEmailChange = (e) => {
        const val = e.target.value;
        setCambridgeEmail(val);
    };

	const handleNonCambridgeEmailChange = (e) => {
        const val = e.target.value;
        setNonCambridgeEmail(val);
    };

	const handleDegreeSubjectChange = (e) => {
        const val = e.target.value;
        setDegreeSubject(val);
    };

	return (
		<>
		<div className='form-outer-container'>
			<form className='join-form'>
				<div className='firstname-text-container'>First name</div>
				<div className='firstname-container'>
					<input 
						type="text" 
						value={firstname} 
						className='firstnameInput'  
						placeholder=""
						onChange={handleFirstnameChange}
					></input>
				</div>

				<div className='lastname-text-container'>Last name</div>
				<div className='lastname-container'>
					<input 
						type="text" 
						value={lastname} 
						className='lastnameInput'  
						placeholder=""
						onChange={handleLastnameChange}
					></input>
				</div>

				<div className='cambridgeemail-text-container'>Cambridge email</div>
				<div className='cambridgeemail-container'>
					<input 
						type="text" 
						value={cambridgeEmail} 
						className='cambridgeemailInput'  
						placeholder=""
						onChange={handleCambridgeEmailChange}
					></input>
				</div>

				<div className='cambridgeemail-text-container'>Non-Cambridge email</div>
				<div className='cambridgeemail-container'>
					<input 
						type="text" 
						value={nonCambridgeEmail} 
						className='cambridgeemailInput'  
						placeholder=""
						onChange={handleNonCambridgeEmailChange}
					></input>
				</div>

				<div className='college-text-container'>College</div>
				<div className='college-container'>
					<select id="college" name="college" className='collegeInput'>
						<option value=""></option>
						<option value="Christ's">Christ's</option>
						<option value="Churchill">Churchill</option>
						<option value="Clare">Clare</option>
						<option value="Clare Hall">Clare Hall</option>
						<option value="Corpus Christi">Corpus Christi</option>
						<option value="Darwin">Darwin</option>
						<option value="Downing">Downing</option>
						<option value="Emmanuel">Emmanuel</option>
						<option value="Fitzwilliam">Fitzwilliam</option>
						<option value="Girton">Girton</option>
						<option value="Gonville and Caius">Gonville and Caius</option>
						<option value="Homerton">Homerton</option>
						<option value="Hughes Hall">Hughes Hall</option>
						<option value="Jesus">Jesus</option>
						<option value="King's">King's</option>
						<option value="Lucy Cavendish">Lucy Cavendish</option>
						<option value="Magdalene">Magdalene</option>
						<option value="Murray Edwards">Murray Edwards</option>
						<option value="Newnham">Newnham</option>
						<option value="Pembroke">Pembroke</option>
						<option value="Peterhouse">Peterhouse</option>
						<option value="Queens'">Queens'</option>
						<option value="Robinson">Robinson</option>
						<option value="Selwyn">Selwyn</option>
						<option value="Sidney Sussex">Sidney Sussex</option>
						<option value="St Catharine's">St Catharine's</option>
						<option value="St Edmund's">St Edmund's</option>
						<option value="St John's">St John's</option>
						<option value="Trinity">Trinity</option>
						<option value="Trinity Hall">Trinity Hall</option>
						<option value="Wolfson">Wolfson</option>
					</select>
				</div>

				<div className='gyear-text-container'>Graduation year</div>
				<div className='gyear-container'>
					<select id="gyear" name="gyear" className='gyearInput'>
						<option value=""></option>
						<option value="2024">2024</option>
						<option value="2025">2025</option>
						<option value="2026">2026</option>
						<option value="2027">2027</option>
						<option value="2028">2028</option>
						<option value="2029">2029</option>
						<option value="2030">2030</option>
						<option value="2031">2031</option>
						<option value="2032">2032</option>
					</select>
				</div>

				<div className='dtype-text-container'>Degree type</div>
				<div className='dtype-container'>
					<select id="dtype" name="dtype" className='dtypeInput'>
						<option value=""></option>
						<option value="Undergraduate">Undergraduate</option>
						<option value="Undergraduate with integrated masters">Undergraduate with integrated masters</option>
						<option value="Postgraduate">Postgraduate</option>
						<option value="MBA">MBA</option>
						<option value="Visiting student">Visiting student</option>
						<option value="Other">Other</option>
					</select>
				</div>

				<div className='dsubject-text-container'>Degree subject</div>
				<div className='dsubject-container'>
					<input 
						type="text" 
						value={degreeSubject} 
						className='dsubjectInput'  
						placeholder=""
						onChange={handleDegreeSubjectChange}
					></input>
				</div>
				
				<div className='gender-text-container'>Gender</div>
				<div className='gender-container'>
					<select id="gender" name="gender" className='genderInput'>
						<option value=""></option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Other">Other</option>
						<option value="Prefer not to say">Prefer not to say</option>
					</select>
				</div>

				<div className='ethnicity-text-container'>Ethnicity</div>
				<div className='ethnicity-container'>
					<select id="ethnicity" name="ethnicity" className='ethnicityInput'>
						<option value=""></option>
						<option value="Prefer not to say">Prefer not to say</option>
						<option value="White - English/Welsh/Scottish/Northern Irish/British">White - English/Welsh/Scottish/Northern Irish/British</option>
						<option value="White - Irish">White - Irish</option>
						<option value="White - Continental European">White - Continental European</option>
						<option value="White - Any other White background">White - Any other White background</option>
						<option value="Mixed Ethnicity">Mixed Ethnicity</option>
						<option value="Asian/Asian British - Indian">Asian/Asian British - Indian</option>
						<option value="Asian/Asian British - Pakistani">Asian/Asian British - Pakistani</option>
						<option value="Asian/Asian British - Bangladeshi">Asian/Asian British - Bangladeshi</option>
						<option value="Asian/Asian British - Chinese">Asian/Asian British - Chinese</option>
						<option value="Asian/Asian British - Any other Asian background">Asian/Asian British - Any other Asian background</option>
						<option value="Black/African/Caribbean/Black British - African">Black/African/Caribbean/Black British - African</option>
						<option value="Black/African/Caribbean/Black British - Any other Black/African/Caribbean background">Black/African/Caribbean/Black British - Any other Black/African/Caribbean background</option>
						<option value="Other ethnic group - Arab">Other ethnic group - Arab</option>
						<option value="Other ethnic group - any other ethnic group">Other ethnic group - any other ethnic group</option>
						<option value="Prefer not to say">Prefer not to say</option>
					</select>
				</div>

				<button className='join-button' type='submit'>Join</button>
			</form>
		</div>
		</>
	)
}