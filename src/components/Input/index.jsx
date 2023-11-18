import './styles.css';

export default function Input({id, name, label, type="text"}) {
    return( 
        <div className='inputContainer'>
            <div className='label'>{label}</div>
            <input id={id} name={name} type={type} />
        </div>
    )
}