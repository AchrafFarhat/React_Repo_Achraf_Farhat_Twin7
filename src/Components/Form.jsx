function Form(props) {
    return ( 
        <div>
            <label>{props.labelle}</label>
            <input type={props.typee} name={props.namee} />
        </div>
    );
}

export default Form;