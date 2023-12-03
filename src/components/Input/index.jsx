import './styles.css';

export default function Input({id, name, label, type="text", placeholder=""}) {
    return( 
        <div className='inputContainer'>
            <div className='label'>{label}</div>
            <input className="inputGeral" id={id} name={name} type={type} placeholder={placeholder}/>
        </div>
    )
}